import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import restarurants from '.././../../assets/data/restaurants.json'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { bool } from 'prop-types';

const dish = restarurants[0].dishes[0]
const restarurant = restarurants[0]
const BasketSushiItem = ({ basketSushi }) => {
    return (
        <View style={styles.row}>
            {basketSushi.image && (<Image source={{ uri: basketSushi.image }} style={styles.image} />)}
            <View style={styles.tucarrito}>
                <Text>1</Text>
            </View>
            <Text>{basketSushi.name}</Text>
            <Text style={styles.price}>{basketSushi.price}</Text>
        </View>

    )
}

export default BasketSushiItem


const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 30,
        paddingLeft: 15
    },
    row: {
        flex:1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40,
        paddingLeft: 15,
        paddingRight:15
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 20
    },
    price: {
        marginLeft: "auto",
        paddingRight:5
    },
    tucarrito: {
        backgroundColor: "grey",
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 5
    },
    
    image: {
        height: 50,
        aspectRatio: 1,
        borderRadius: 7,
        paddingLeft:5,
        justifyContent:"center",
        alignContent:"center",
    }
})