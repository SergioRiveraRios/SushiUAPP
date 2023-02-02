import { View, Text, StyleSheet, Image } from 'react-native'
import restarurants from '.././../../assets/data/restaurants.json'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useBasketContext } from '../../contexts/BasketContext';
import { useNavigation } from "@react-navigation/native";
const SushiDetailScreen = () => {
    const route = useRoute()
    const id = route.params?.menuItem
    const [quantity, setQuantity] = useState(1)
    const { addtoBasketItem } = useBasketContext()
    const navigation = useNavigation()
    const onMinus = () => { if (quantity > 1) { setQuantity(quantity - 1) } }
    const onPlus = () => { setQuantity(quantity + 1) }
    const getTotal = () => { return (id.Item_Precio * quantity).toFixed(2) }
    
    const addCarrito = async() => {
        await addtoBasketItem(id.id ,parseInt(quantity))
        //navigation.goBack()
    }
    return (
        <View style={styles.page}>
            <View>{id.Item_Imagen && (<Image source={{ uri: id.Item_Imagen }} style={styles.image} />)}</View>
            <View style={styles.row}>
                <Text style={styles.title}>{id.Item_Nombre}</Text>
                <Text style={styles.price}>${id.Item_Precio}</Text>
            </View>
            <Text style={styles.inside} numberOfLines={2}>Por Dentro:</Text>
            <Text style={styles.descrpition} >{id.Item_Dentro} </Text>
            <Text style={styles.inside}>Por fuera: </Text>
            <Text style={styles.descrpition} >{id.Item_Fuera}</Text>

            <View style={styles.separator} />

            <View style={styles.iconContainer}>
                <AntDesign name="minuscircleo" size={24} color="black" onPress={onMinus} />
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign name="pluscircleo" size={24} color="black" onPress={onPlus} />
            </View>
            <View style={styles.buttonContainer} onPress={addCarrito}>
                <Text style={styles.buttonAdd} onPress={addCarrito}> Add {quantity} to basket (${getTotal()}) </Text>
            </View>
        </View>
    )
}

export default SushiDetailScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 5
    },
    row: {
        flexDirection: "row"
    },
    price: {
        marginLeft: "auto",
        fontSize: 30,
        fontWeight: "500"
    },
    title: {
        fontSize: 30,
        fontWeight: "500"
    },
    description: {
        color: "grey"
    },
    separator: {
        height: 1,
        backgroundColor: "#DCDCDC",
        marginVertical: 10
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40
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
    image: {
        width: "100%",
        aspectRatio: 5 / 3,
        marginBottom: 5,
        borderRadius: 7
    },
    inside: {
        color: "orange",
        fontWeight: "400"
    },
})
