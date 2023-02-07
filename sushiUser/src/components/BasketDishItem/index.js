import { View, Text, StyleSheet, FlatList, Image,Alert } from 'react-native'
import restarurants from '.././../../assets/data/restaurants.json'
import menu from '../../../assets/data/menu.json'
import { AntDesign } from '@expo/vector-icons';
import { useState,useEffect } from 'react';
import { bool } from 'prop-types';
const dish = menu[0].dishes[0]
const restarurant = menu[0]

import {useAuthContext} from '../../contexts/AuthContext'
import * as SQLite from 'expo-sqlite';

const BasketSushiItem = ({ basketSushi }) => {
    const db = SQLite.openDatabase('example.db')
    const { setUsuario, user } = useAuthContext()
    const [currentBasket,setcurrentBasket]=useState(null)
    const [currentUser,setCurrentUser]=useState(null)
    useEffect(()=>{
        setCurrentUser(user[0])
        console.log(currentUser)
    },[user])
    const deleteMenuItem= async(Usuario_Telefono)=>{
        db.transaction(tx => {
            // sending 4 arguments in executeSql
            tx.executeSql(`DELETE FROM ordenCarrito WHERE ordenCarrito.idMenuItem IN (SELECT ordenCarrito.idMenuItem FROM ordenCarrito INNER JOIN carrito ON ordenCarrito.idCarrito=carrito.idCarrito WHERE ordencarrito.idMenuItem='${basketSushi.idMenuItem}' AND carrito.cliente_Telefono='${Usuario_Telefono}') `, [],
                (txObj, result) => {
                    console.log("econtrado")
                    setcurrentBasket(result.rows._array)
                    console.log("eliminado")
                },
                (txObj, error) => console.log('Error ', error)
            )
        })
    }
    const deleteButton=()=>{
        Alert.alert('Seguro?', 'Deseas eliminar el item de tu Carrito?', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => deleteMenuItem(currentUser?.cliente_Telefono)},
          ]);
        
    }
    return (
        <View>
            <View style={styles.row}>
            <AntDesign name="delete" size={24} color="black" onPress={deleteButton}/>
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
        marginLeft:10,
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
        width:"45%"
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