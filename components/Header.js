import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginRight: '5%',
        marginBottom: 20,
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
        paddingLeft: 20,
        color: '#000'
    }
});

export default function Header({showSearch, tmp, setTmp, setSearch, title, description}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            {showSearch && (
                <TextInput value={tmp} placeholder="Busca un pokemon por nombre o número" style={styles.search}
                onChangeText={text => setTmp(text)} onEndEditing={() => setSearch(tmp)} />
            )}
        </View>
    );
}