import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { useQuery } from "@tanstack/react-query";

const { height } = Dimensions.get('screen') ;

const styles = StyleSheet.create({
    container: {
        width: "45%",
        height: height * 0.3,
        backgroundColor: '#1b1b',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginRight: "5%",
        marginBottom: 20
    },
    image: {
        height: 150,
        width: 150,
        marginBottom: 20
    },
    name: {
        color: '#fff',
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10
    },
    number: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold"
    }
});

export default function Card({pokemon}) {

    const getPokemon = async ({queryKey}) => {
        const res = await fetch(queryKey[1]);

        return res.json();
    }

    const { data, isLoading, error } = useQuery(['getPokemon', pokemon?.url], getPokemon);

    const colors = {
        grass: '#c4e4d4', 
        elektric: '#F7D020',
        fire: '#efdaba',
        water: '#89d5f8',
        rock: '#B6A136',
        ghost: '#735797',
        shadow: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE', 
        fairy: '#efbae8',
        bug: '#A6B91A', 
        psychic: '#F95587',
        flying: '#A98FF3',
        ground: '#E2BF65', 
        poison: '#АЗЗЕА1',
        fighting: '#C2228',
        ice: '#96D9D6',
        normal: '#A8A77A',
        unknown: '#ааа'
    }

    return (
        <View style={[styles.container, {backgroundColor: colors[data?.types[0]?.type?.name]}]}>
            <Image source={{ uri: data?.sprites?.other['official-artwork']?.front_default }} style={styles.image} />
            <Text style={styles.name} >{data?.name}</Text>
            <Text style={styles.number} >{data && data?.id.toString().padStart(3, 0)}</Text>
        </View>
    );
}