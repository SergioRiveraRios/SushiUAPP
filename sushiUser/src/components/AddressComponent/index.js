import { View, Text, StyleSheet, FlatList, Image, Alert, Button } from 'react-native'
import restarurants from '.././../../assets/data/restaurants.json'
import menu from '../../../assets/data/menu.json'
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { bool } from 'prop-types';
const dish = menu[0].dishes[0]
const restarurant = menu[0]

import { useNavigation } from '@react-navigation/native';
import { useAuthContext } from '../../contexts/AuthContext'
import * as SQLite from 'expo-sqlite';

const AddressComponent = ({ Address }) => {
    const navigation = useNavigation()
    const db = SQLite.openDatabase('example.db')
    const { setUsuario, user } = useAuthContext()
    const [currentBasket, setcurrentBasket] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        setCurrentUser(user[0])
        console.log("Current", currentUser)
    }, [user])
    const deleteMenuItem = async (Usuario_Telefono) => {
        db.transaction(tx => {
            // sending 4 arguments in executeSql
            tx.executeSql(` DELETE FROM direccion WHERE direccion.cliente_Telefono IN (SELECT direccion.cliente_Telefono FROM direccion INNER JOIN usuario ON direccion.cliente_Telefono=usuario.cliente_Telefono WHERE direccion.cliente_Telefono='${Usuario_Telefono}') `, [],
                (txObj, result) => {
                    console.log("eliminado")
                    console.log(result.rows._array)
                    getCurrentAddress(Usuario_Telefono)
                },
                (txObj, error) => console.log('Error ', error)
            )
        })
    }
    const getCurrentAddress = (Usuario_Telefono) => {
        db.transaction(tx => {
            // sending 4 arguments in executeSql
            tx.executeSql(`SELECT direccion.idDireccion FROM direccion INNER JOIN usuario ON direccion.cliente_Telefono=usuario.cliente_Telefono WHERE direccion.cliente_Telefono='${Usuario_Telefono}' `, [],
                (txObj, result) => {
                    console.log(result.rows._array)

                },
                (txObj, error) => console.log('Error ', error)
            )
        })
    }
    const deleteButton = () => {
        Alert.alert('Seguro?', 'Deseas eliminar el item de tu Carrito?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => deleteMenuItem(currentUser?.cliente_Telefono) },
        ]);
    }
    return (
        <View>
            <View style={styles.row}>
                <AntDesign name="delete" size={24} color="black" onPress={deleteButton} />
                <View style={styles.direccion}>
                    <Text style={styles.quantity}>{Address.DireccionColonia},</Text>
                    <Text style={styles.quantity}>{Address.direccionCalle},</Text>
                    <Text style={styles.quantity}>#{Address.DireccionNum},</Text>
                    <Text style={styles.quantity}>C.P.{Address.direccionCP}</Text>
                </View>

            </View>
            <View style={styles.separator} />


        </View>


    )
}

export default AddressComponent


const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 30,
        paddingLeft: 15,
    },
    row: {
        flex: 1,
        marginLeft:20,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    direccion:{
        marginLeft:10,
    },
    quantity: {
        fontSize: 15,
        marginLeft: 10,
        width: "100%"
    },
    price: {
        paddingLeft: 30,
        fontSize: 20,
        fontWeight: "500",
        marginLeft: "auto"
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
        width: "45%"
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