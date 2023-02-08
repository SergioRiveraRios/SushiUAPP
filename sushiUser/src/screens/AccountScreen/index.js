import { View, Text, StyleSheet, Image, TextInput, SafeAreaView, Button, Alert,FlatList } from "react-native"
import React, { useEffect, useState } from "react";
import {useAuthContext} from '../../contexts/AuthContext'

import BasketDishItem from '../../components/BasketDishItem'
import * as SQLite from 'expo-sqlite';
import AddressComponent from "../../components/AddressComponent";
//import { useBasketContext } from "../../contexts/BasketContext";
const AccountScreen = () => {
    const db = SQLite.openDatabase('example.db')
    const { setUsuario, user } = useAuthContext()
    const [currentUser,setCurrentUser]=useState(null)
    const [direcciones,setDirecciones]=useState(null)
    const [currentBasket,setcurrentBasket]=useState(null)
    useEffect(()=>{
        setCurrentUser(user[0])
        setUser(user[0])
    },[user])
    const updateUser = (Usuario_Telefono, Usuario_Nombre, Usuario_Correo) => {
        db.transaction(tx => {
            tx.executeSql(`UPDATE usuario 
                            SET cliente_Nombre='${Usuario_Nombre}', 
                            cliente_correo ='${Usuario_Correo}',
                            WHERE cliente_Telefono='${Usuario_Telefono}'`, null,
                (txtObj, resulSet) => {
                    console.log("actualizado")
                }
            )
        })
    
    }
    const setUser=(currentUser)=>{
        onChangeNombre(currentUser?.cliente_Nombre+'')
        onChangeTelefono(currentUser?.cliente_Telefono+'')
        onChangeCorreo(currentUser?.cliente_correo+'')
        getAddress(currentUser?.cliente_Telefono+'')
    }
    const getAddress= async(Usuario_Telefono)=>{
        console.log(currentUser)
        db.transaction(tx => {
            // sending 4 arguments in executeSql
            tx.executeSql(`SELECT * FROM direccion INNER JOIN usuario ON direccion.cliente_Telefono='${Usuario_Telefono}'`, [],
                (txObj, result) => {
                    setDirecciones(result.rows._array),
                    console.log(result.rows._array)
                },
                (txObj, error) => console.log('Error ', error)
            )
        })
    }
    const [Usuario_Nombre, onChangeNombre] = useState(currentUser?.cliente_Nombre+'');
    const [Usuario_Telefono, onChangeTelefono] = useState(currentUser?.cliente_Telefono+'');
    const [Usuario_Correo, onChangeCorreo] = useState(currentUser?.cliente_Correo+'' );

    const onRead = () => {
        console.log("usuario",currentUser)
        console.log("nombre",currentUser?.cliente_Nombre)
    }
    const onSave = () => {
        updateUser(currentUser?.Usuario_Telefono, currentUser?.Usuario_Nombre,currentUser?.Usuario_Correo)
    };

    /*const updateUser = async (id) => {
            console.log("entre")
            console.log("Original",original)
            const original = await DataStore.query(Usuario,id)
            console.log("Original",original)
            const nuevo =  await DataStore.save(Usuario.copyOf(original, (updated) => {
                updated.Usuario_Nombre = Usuario_Nombre;
                updated.Usuario_Telefono = Usuario_Telefono;
                updated.Usuario_Correo = Usuario_Correo
            }))
            console.log(nuevo)
            setdbUser(nuevo)
        console.log("2")
    }*/
    const newUser = () => {
        try {
            console.log("entre2")
            //createCarrito(Usuario_Telefono)
            //const user = await DataStore.save(new Usuario({ Usuario_Nombre, Usuario_Telefono, Usuario_Correo, sub, untitledfield: 's' }))
            //setdbUser(user)
            //setUsuario(user)
            //console.log("Usuario", user)
            //const basket2 = await DataStore.save(new Carrito({ usuarioID: user.id }))
            //setBasket(basket2)
        }
        catch (e) { Alert.alert("error", e.message) }
    }

    return (
        <View style={styles.page}>
            <Text style={styles.title}>Tu perfil</Text>
            <View style={styles.profileContainer}>
                <Text style={styles.perfil}>{currentUser?.cliente_Telefono+''}</Text>
            </View>
           
            <View style={styles.separator} />

            <View>
                <SafeAreaView>
                    <Text style={styles.inputText}>Tu nombre:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNombre}
                        value={Usuario_Nombre}
                    />
                    <Text style={styles.inputText}>Tu Telefono:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        editable={false}
                        onChangeText={onChangeTelefono}
                        value={Usuario_Telefono}
                    />
                    <Text style={styles.inputText}>Tu Correo</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeCorreo}
                        value={Usuario_Correo}
                    />
                </SafeAreaView>
                
                <Button title="Guardar" onPress={onSave} />
                <Button title="Eliminar Cuenta" onPress={onRead} style={styles.eliminarCuenta}/>
            </View>
        </View>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 30,
    },
    profileContainer: {
        flex: 1,
        alignItems: "center",
    },
    image: {
        height: 150,
        aspectRatio: 1,
        marginBottom: 5,
        borderRadius: 50
    },
    separator: {
        height: 1,
        backgroundColor: "#DCDCDC",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30,
        paddingLeft: 15,
        paddingRight: 15
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        fontWeight: "600",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        marginBottom: 10
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    inputText: {
        marginTop: 10,
        marginLeft: 12,
        fontSize: 15,
    },
    eliminarCuenta:{
        backgroundColor:"red"
    }
})