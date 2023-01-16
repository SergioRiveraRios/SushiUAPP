import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import restarurants from '.././../../assets/data/restaurants.json'
import BasketDishItem from '../../components/BasketDishItem'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { bool } from 'prop-types';
import menu from '../../../assets/data/menu.json'

const dish = restarurants[0].dishes[0]
const restarurant = restarurants[0]


const BasketScreen = () => {
    const [quantity, setQuantity] = useState(1)
    const getTotal = () => { return (dish.price * quantity).toFixed(2) }

    return (
        <View style={styles.page}>
            <Text style={styles.title}>Tu carrito</Text>


            <FlatList data={restarurant.dishes} renderItem={({ item }) => <BasketDishItem basketSushi={item} />} />
            <View style={styles.total}>
                <Text>adasd</Text>
            </View>



            <View style={styles.buttonContainer}>
                <Text style={styles.buttonAdd}> Add {quantity} to basket (${getTotal()}) </Text>
            </View>
        </View>
    )
}

export default BasketScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 30,
        paddingLeft: 15
    },
    title: {
        paddingLeft: 15,
        fontSize: 30,
        fontWeight: "500"
    },
    descrpition: {
        paddingLeft: 15,
        color: "grey"
    },
    separator: {
        height: 1,
        backgroundColor: "#DCDCDC",
        marginVertical: 10
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 20
    },
    buttonContainer: {
        backgroundColor: "black",
        padding: 20,
        alignItems: "center",
        marginTop: "auto"
    },
    buttonAdd: {
        color: "white",
        fontWeight: "600"
    },
    price: {
        marginLeft: "auto"
    },
    tucarrito: {
        backgroundColor: "grey",
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 5
    },
    total:{
        marginLeft:20,
        marginTop:15
    }
})