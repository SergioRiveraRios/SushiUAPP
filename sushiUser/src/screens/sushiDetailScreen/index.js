import { View, Text, StyleSheet, Image } from 'react-native'
import restarurants from '.././../../assets/data/restaurants.json'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';

const dish = restarurants.dishes

const SushiDetailScreen = () => {
    const route = useRoute()
    const id = route.params?.id

    const [quantity, setQuantity] = useState(1)
    const onMinus = () => { if (quantity > 1) { setQuantity(quantity - 1) } }
    const onPlus = () => { setQuantity(quantity + 1) }
    const getTotal = () => { return (id.price * quantity).toFixed(2) }

    return (
        <View style={styles.page}>
            <View>{id.image && (<Image source={{ uri: id.image }} style={styles.image} />)}</View>
            <View style={styles.row}>
                <Text style={styles.title}>{id.name}</Text>
                <Text style={styles.price}>${id.price}</Text>
            </View>
            <Text style={styles.inside} numberOfLines={2}>Por Dentro:</Text>
            <Text style={styles.descrpition} >{id.inside} </Text>
            <Text style={styles.inside}>Por fuera: </Text>
            <Text style={styles.descrpition} >{id.outside}</Text>

            <View style={styles.separator} />

            <View style={styles.iconContainer}>
                <AntDesign name="minuscircleo" size={24} color="black" onPress={onMinus} />
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign name="pluscircleo" size={24} color="black" onPress={onPlus} />
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonAdd}> Add {quantity} to basket (${getTotal()}) </Text>
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
    image:{
        width:"100%",
        aspectRatio: 5/3,
        marginBottom:5,
        borderRadius:7
      },
    inside: {
        color: "orange",
        fontWeight: "400"
    },
})