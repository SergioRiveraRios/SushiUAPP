import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import restarurants from '.././../../assets/data/restaurants.json'
import menu from '../../../assets/data/menu.json'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { bool } from 'prop-types';

const dish = menu[0].dishes[0]
const restarurant = menu[0]

const BasketSushiItem = ({ basketSushi }) => {
    return (
        <View>
            <View style={styles.row}>
                {basketSushi.image && (<Image source={{ uri: basketSushi.image }} style={styles.image} />)}
                <Text style={styles.name}>{basketSushi.name}</Text>
                <Text style={styles.price}>3x{basketSushi.price}</Text>
            </View>
            <View style={styles.separator} />

            
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
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 20
    },
    price: {
        marginLeft: "auto",
        paddingRight: 5,
        fontWeight:"500"
    },
    tucarrito: {
        backgroundColor: "grey",
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 5
    },
    name: {
        marginLeft: 20
    },
    image: {
        height: 70,
        aspectRatio: 1,
        borderRadius: 7,
        paddingLeft: 5,
        justifyContent: "center",
        alignContent: "center",
    },
    separator: {
        height: 1,
        backgroundColor: "#DCDCDC",
        marginVertical: 8
    },
})