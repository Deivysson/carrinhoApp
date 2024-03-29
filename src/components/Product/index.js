import { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from "react-native"; 

export default function Product( {data, addToCart} ){
    return (
    <View style={styles.container}>
        <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}> R$ {data.price} </Text>
        </View>
        <TouchableOpacity style={styles.buttonAdd} onPress={addToCart}>
            <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#dfdfdf',
        borderRadius: 2,
        marginBottom: 14,
        padding: 8,
        paddingBottom: 14,
        paddingTop: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between' 
    },
    title: {
        fontWeight: 'bold'
    },
    buttonAdd: {
        paddingStart: 12,
        paddingEnd: 12,
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 2
    },
    buttonText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15
    }
})