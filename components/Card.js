import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 350,
        backgroundColor: '#1b1b',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
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
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://www.latercera.com/resizer/0m3JT6JAmot5lzEHQ9eF7dXQO5c=/900x600/filters:focal(469x292:479x282)/cloudfront-us-east-1.images.arcpublishing.com/copesa/6O3E6FX56FCYFGW5NZFOKYGNY4.jpg' }} style={styles.image} />
            <Text style={styles.name} >{pokemon?.name}</Text>
            <Text style={styles.number} >{pokemon?.number}</Text>
        </View>
    );
}