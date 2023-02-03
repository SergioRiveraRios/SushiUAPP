import { View, Text, StyleSheet, Image, TextInput, SafeAreaView, Button, Alert } from "react-native"
import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { DataStore } from "@aws-amplify/datastore";
import { Usuario } from '../../models'
import { useAuthContext } from '../../contexts/AuthContext'
import * as SQLite from 'expo-sqlite';
//import { readTable } from "../../components/databaseQuery";

//import { useBasketContext } from "../../contexts/BasketContext";
const LoginScreen = () => {
    const { setUsuario, user } = useAuthContext()
    const navigation = useNavigation()
    const [Usuario_Contrasena, onChangeContrasena] = useState('');
    const [Usuario_Correo, onChangeCorreo] = useState('');
    const db = SQLite.openDatabase('example.db')

    
    const onSave = () => {
        newUser()
    };

    const readTable = (Usuario_Correo, Usuario_Contrasena) => {
        db.transaction(tx => {
            // sending 4 arguments in executeSql
            tx.executeSql(`SELECT * FROM usuario WHERE cliente_correo='${Usuario_Correo}' AND cliente_contrasena='${Usuario_Contrasena}'`, [],
                (txObj, result) => {
                    setUsuario(result.rows._array)
                    console.log(user)
                },
                (txObj, error) => console.log('Error ', error)
            )
        })
    }

    const newUser = () => {
        try {
            readTable(Usuario_Correo, parseInt(Usuario_Contrasena))
            if (user === undefined) {
                console.log("no definido")
            } else {
                user.map((nuevo, index) => {
                    console.log(nuevo)

                    navigation.navigate('Home');
                })
            }

        }
        catch (e) { Alert.alert("error", e.message) }
    }

    return (
        <View style={styles.page}>
            <Text style={styles.title}>Tu perfil</Text>
            <View style={styles.profileContainer}>
                <Text style={styles.perfil}>Sergio Rivera Rios</Text>
            </View>
            <View style={styles.separator} />

            <View>
                <SafeAreaView>
                    <Text style={styles.inputText}>Tu Correo</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeCorreo}
                        value={Usuario_Correo}
                    />
                    <Text style={styles.inputText}>Tu Contrasena:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeContrasena}
                        value={Usuario_Contrasena}
                    />

                </SafeAreaView>
                <Button title="Guardar" onPress={onSave} />
            </View>
        </View>
    )
}

export default LoginScreen

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
    }
})