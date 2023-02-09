import { View, Text, StyleSheet, Image, TextInput, SafeAreaView, Button, Alert, Pressable } from "react-native"
import React, { useEffect, useState } from "react";
import { useAuthContext } from '../../contexts/AuthContext'

import * as ImagePicker from 'expo-image-picker';
import BasketDishItem from '../../components/BasketDishItem'
import * as SQLite from 'expo-sqlite';
import AddressComponent from "../../components/AddressComponent";
//import { useBasketContext } from "../../contexts/BasketContext";
const AccountScreen = () => {
    const db = SQLite.openDatabase('example.db')
    const { setUsuario, user } = useAuthContext()
    const [currentUser, setCurrentUser] = useState(null)
    const [updatedUser, setUpdatedUser] = useState(null)
    const [direcciones, setDirecciones] = useState(null)
    const [image, setImage] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);
    useEffect(() => {
        setCurrentUser(user[0])
        setUser(user[0])
        getAddress(user[0].cliente_Telefono)
        setImage(user[0].cliente_Imagen)
    }, [user])

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your photos!");
            return;
          }
        console.log("entre")
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result.assets[0].uri);
        
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
    const updateUser = (Usuario_Telefono, Usuario_Nombre, Usuario_Correo) => {
        console.log(Usuario_Telefono)
        db.transaction(tx => {
            tx.executeSql(`UPDATE usuario 
                            SET cliente_Nombre='${Usuario_Nombre}', 
                            cliente_correo ='${Usuario_Correo}',
                            cliente_Imagen ='${image}'
                            WHERE cliente_Telefono='${Usuario_Telefono}'`, null,
                (txtObj, resulSet) => {
                    getCurrentUser(Usuario_Telefono)
                }
            )
        })

    }
    const getCurrentUser=(Usuario_Telefono)=>{
        db.transaction(tx => {
            tx.executeSql(`SELECT * FROM usuario
                            WHERE cliente_Telefono='${Usuario_Telefono}'`, null,
                (txtObj, resulSet) => {
                    console.log("encontrado",resulSet.rows._array)
                    setUsuario(resulSet.rows._array)
                }
            )
        })
    }
    const setUser = (currentUser) => {
        onChangeNombre(currentUser?.cliente_Nombre + '')
        onChangeTelefono(currentUser?.cliente_Telefono + '')
        onChangeCorreo(currentUser?.cliente_correo + '')
        getAddress(currentUser?.cliente_Telefono + '')
    }
    const getAddress = async (Usuario_Telefono) => {
        console.log(currentUser)
        db.transaction(tx => {
            // sending 4 arguments in executeSql
            tx.executeSql(`SELECT * FROM direccion INNER JOIN usuario ON direccion.cliente_Telefono='${Usuario_Telefono}'`, [],
                (txObj, result) => {
                    setDirecciones(result.rows._array)
                },
                (txObj, error) => console.log('Error ', error)
            )
        })
    }
    const [Usuario_Nombre, onChangeNombre] = useState(currentUser?.cliente_Nombre + '');
    const [Usuario_Telefono, onChangeTelefono] = useState(currentUser?.cliente_Telefono + '');
    const [Usuario_Correo, onChangeCorreo] = useState(currentUser?.cliente_Correo + '');

    const onSave = () => {
        //getCurrentUser(currentUser?.cliente_Telefono)
        updateUser(currentUser?.cliente_Telefono, Usuario_Nombre, Usuario_Correo)
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

    return (
        <View style={styles.page}>
            <Text style={styles.title}>Tu perfil</Text>
            {image && (<Image source={{ uri: image }} style={styles.image} />)}
            <Button title="Selecciona tu foto de perfil" onPress={pickImage} style={styles.botonPerfil}/>
            <View style={styles.profileContainer}>
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

            </View>
            <Pressable style={styles.button}  onPress={onSave}>
                <Text style={styles.text} >Guardar Cambios</Text>
            </Pressable>
            <Pressable style={styles.button2}  onPress={onSave}>
                <Text style={styles.cerrar} >Eliminar Cuenta</Text>
            </Pressable>


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
        borderRadius: 50,
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
        alignSelf: "center",
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
    eliminarCuenta: {
        backgroundColor: "red"
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
        marginBottom:20
      },
      button2: {
        alignItems: "center",
      }
      ,text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      cerrar: {
        
        color: "red",
        fontWeight: "400",
        fontSize: 20
    },
})