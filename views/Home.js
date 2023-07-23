import React, { useState } from 'react';
import { Text, View, FlatList, RefreshControl, StyleSheet } from 'react-native';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import Card from '../components/Card';
import Header from '../components/Header';

const GET_ALL_URL = 'https://pokeapi.co/api/v2/pokemon';

export default function Home() {

  const [ tmp, setTmp ] = useState('');
  const [ search, setSearch ] = useState(null);

  const styles = StyleSheet.create({
    container: {
      marginLeft: "5%",
      marginTop: 20
    }
  });

  const getAllPokemon = async({pageParam = 1})  => {
    const response = await fetch(`${pageParam === 1 ? GET_ALL_URL : pageParam}`)

    return response.json();
  }

  const { data, isLoading, hasNextPage, fetchNextPage, isFetching, refetch, error } = useInfiniteQuery(['getAllPokemon'], getAllPokemon, { getNextPageParam: lastPage => {
      if(lastPage.next !== null) {
        return lastPage.next;
      }
      return lastPage;
    }
  })

  const getPokemon = async ({queryKey}) => {
    const res = await fetch(`${GET_ALL_URL}/${queryKey[1]}`);

    return res.json();
  }

  const { data: searchResult, isLoading: searchLoading, isFetching: searchFetchin, error: searchError } = useQuery(['getPokemon', search], getPokemon, {
    enabled: !!search
  });

  const loadMore = () => {
    if(hasNextPage) {
      fetchNextPage();
    }
  }

  return (
    <View style={styles.container}>
      <Header tmp={tmp} setTmp={setTmp} setSearch={setSearch} />
      {!search && (
        <FlatList data={data?.pages.map(page => page.results).flat()} 
                  renderItem={({item}) => <Card pokemon={item} />} numColumns={2} onEndReached={loadMore} 
                  onEndReachedThreshold={0.2} 
                  refreshControl={<RefreshControl size="large" tintColor="#1b1b" refreshing={isLoading || isFetching} onRefresh={refetch} />}
      />
      )}
      { searchResult && <Card pokemon={{url: `${GET_ALL_URL}/${searchResult.id}`}} /> }
      { (searchLoading || searchFetchin) && <Text>Buscando...</Text>}
      { searchError && <Text>Pokemon no encontrado</Text> }
      {error && <Text>Ha ocurrido un error!</Text>}
    </View>
  );
}