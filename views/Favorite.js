import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import { FavoriteContext } from "../context";

const styles = StyleSheet.create({
    container: {
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 20
    }
});

export default function Favorites() {

    const {favorites} = useContext(FavoriteContext);

    return (
        <View style={styles.container}>
            <Header title='Favoritos' description='Todos tus pokemos favoritos' />
            <FlatList data={favorites} 
                  renderItem={({item}) => <Card pokemon={item} />} numColumns={2} />
        </View>
    );
}