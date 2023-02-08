import { View, Text, StyleSheet, Image, TextInput, SafeAreaView, Button, Alert,Pressable } from "react-native"
import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
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
    const createUser=()=>{
        navigation.navigate('NewAccount')
    }
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
            <View style={styles.profileContainer}>
                <Image source={{ uri: 'https://images-uan.s3.us-east-2.amazonaws.com/imagenessushi/sushiuanlogo.png' }} style={styles.image} />
            </View>
            <View style={styles.separator} />

            <View>
                <Text style={styles.title}>Inicia Sesion</Text>
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
                <Pressable style={styles.button} onPress={onSave}>
                    <Text style={styles.text}>Inicia Sesion</Text>
                </Pressable>
                <Text style={styles.o}>o</Text>
                <Pressable style={styles.button} onPress={createUser}  >
                    <Text style={styles.text} >Registrate</Text>
                </Pressable>
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
    image: {
        marginTop: 50,
        width: "90%",
        aspectRatio: 8 / 3,
        marginBottom: 50,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    profileContainer: {

        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center"
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
        marginBottom: 10,
        marginTop: 20
    },
    o: {
        fontSize: 20,
        fontWeight: "600",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        marginBottom: 10,
        marginTop: 10
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
    button: {
        width:"50%",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:"center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'orange',
        marginTop:10
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      }
})