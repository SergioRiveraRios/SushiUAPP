import { View, Text, StyleSheet, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import {useAuthContext} from '../../contexts/AuthContext'
import * as SQLite from 'expo-sqlite';
const SushiDetailScreen = () => {
    const route = useRoute()
    const id = route.params?.menuItem
    const { setUsuario, user } = useAuthContext()
    const [currentUser,setCurrentUser]=useState(null)
    const [quantity, setQuantity] = useState(1)
    const onMinus = () => { if (quantity > 1) { setQuantity(quantity - 1) } }
    const onPlus = () => { setQuantity(quantity + 1) }
    const getTotal = () => { return (id.menuItemPrecio * quantity).toFixed(2) }
    const db = SQLite.openDatabase('example.db')

    useEffect(()=>{
        setCurrentUser(user[0])
    },[user])
    const addCarrito=()=>{
        createOrdenCarrito(currentUser?.cliente_Telefono,id.idMenuItem,quantity)
    }
    const createOrdenCarrito = (carritoID, menuItemId, cantidadMenuItem) => {
        db.transaction(tx => {
            tx.executeSql(`INSERT INTO ordenCarrito (idCarrito,idMenuItem,cantidadMenutItem) SELECT (select idCarrito FROM carrito where carrito.cliente_Telefono='${carritoID}') as idCarrito , '${menuItemId}', '${cantidadMenuItem}' `, null,
                (txtObj, resulSet) => {
                    console.log("CREADO")
                }
            )
        })
    
    }
    return (
        <View style={styles.page}>
            <View>{id.menuItemImagen && (<Image source={{ uri: id.menuItemImagen }} style={styles.image} />)}</View>
            <View style={styles.row}>
                <Text style={styles.title}>{id.menuItemNombre}</Text>
                <Text style={styles.price}>${id.menuItemPrecio}</Text>
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
        fontWeight: "500",
        width:"80%"
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
