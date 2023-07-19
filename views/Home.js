import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Card from '../components/Card';
import { useInfiniteQuery } from '@tanstack/react-query';

const GET_ALL_URL = 'https://pokeapi.co/api/v2/pokemon';

export default function Home() {

  const getAllPokemon = async({pageParam = 1})  => {
    const response = await fetch(`${pageParam === 1 ? GET_ALL_URL : pageParam}`)

    return response.json();
  }

  const { data, isLoading, hasNextPage, fetchNextPage, isFetching, error } = useInfiniteQuery(['getAllPokemon'], getAllPokemon, { getNextPageParam: lastPage => {
      if(lastPage.next !== null) {
        return lastPage.next;
      }
      return lastPage;
    }
  })

  const loadMore = () => {
    if(hasNextPage) {
      fetchNextPage();
    }
  }

  return (
    <View>
      <FlatList data={data?.pages.map(page => page.results).flat()} 
                renderItem={({item}) => <Card pokemon={item} />} numColumns={2} onEndReached={loadMore} onEndReachedThreshold={0.2} />
    </View>
  );
}