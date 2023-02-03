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
            <Text style={styles.quantity}>{basketSushi.cantidadMenutItem}x</Text>
                {basketSushi.menuItemImagen && (<Image source={{ uri: basketSushi.menuItemImagen }} style={styles.image} />)}
                <Text style={styles.name}>{basketSushi.menuItemNombre}</Text>
                <Text style={styles.price}>{basketSushi.menuItemPrecio}</Text>
                
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
        fontSize: 20,
        width:"12%"
    },
    price: {
        paddingLeft: 30,
        fontSize:20,
        fontWeight:"500",
        marginLeft:"auto"
    },
    tucarrito: {
        backgroundColor: "grey",
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 5
    },
    name: {
        marginLeft: 20,
        width:"50%"
    },
    image: {
        height: 70,
        aspectRatio: 1,
        borderRadius: 7,
        paddingLeft: 10,
        justifyContent: "center",
        alignContent: "center",
    },
    separator: {
        height: 1,
        backgroundColor: "#DCDCDC",
        marginVertical: 8
    },
})