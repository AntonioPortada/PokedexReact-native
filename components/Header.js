import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginRight: '5%'
    },
    title: {
        color: '#000',
        fontSize: 28,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16,
        marginTop: 10
    },
    search: {
        backgroundColor: '#ebf3f5',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 20,
        color: '#000'
    }
});

export default function Header({tmp, setTmp, setSearch}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Titulo</Text>
            <Text style={styles.description}>Busca un pokemon usando su nombre o su número</Text>
            <TextInput value={tmp} placeholder="Busca un pokemon por nombre o número" style={styles.search}
                       onChangeText={text => setTmp(text)} onEndEditing={() => setSearch(tmp)} />
        </View>
    );
}