import { View, Text, StyleSheet, Image, TextInput, SafeAreaView, Button, Alert } from "react-native"
import React, { useEffect, useState } from "react";
import { useAuthContext } from '../../contexts/AuthContext'
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import * as SQLite from 'expo-sqlite';
import { Usuario } from "../../models";
import { useRoute } from '@react-navigation/native';
//import { useBasketContext } from "../../contexts/BasketContext";
const NewUserAccount = () => {
    const route = useRoute()
    const db = SQLite.openDatabase('example.db')
    const { setUsuario, user } = useAuthContext()
    const [currentUser, setCurrentUser] = useState()
    const [Usuario_Nombre, onChangeNombre] = useState('');
    const [Usuario_Telefono, onChangeTelefono] = useState('');
    const [Usuario_Correo, onChangeCorreo] = useState('');
    const [Usuario_Pass, onChangePass] = useState('');
    const [Usuario_Pass2, onChangePass2] = useState('');
    const [image, setImage] = useState(null);
    const navigation = useNavigation()
    
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
    const createUser = (Usuario_Telefono, Usuario_Nombre, Usuario_Correo, Usuario_Pass,Usuario_Imagen) => {
        console.log("dd")
        db.transaction(tx => {
            tx.executeSql(`INSERT INTO usuario (cliente_Telefono,cliente_Nombre,cliente_correo,cliente_contrasena,cliente_Imagen) VALUES ('${Usuario_Telefono}','${Usuario_Nombre}','${Usuario_Correo}','${Usuario_Pass}','${Usuario_Imagen}')`, null,
                (txtObj, resulSet) => {
                    console.log("insertado")
                }
            )
        })

    }

    const getCurrentUser=(Usuario_Telefono)=>{
        db.transaction(tx => {
            tx.executeSql(`SELECT * FROM usuario WHERE cliente_Telefono='${Usuario_Telefono}'`, null,
                (txtObj, resulSet) => {
                    console.log(resulSet.rows._array)
                    setUsuario(resulSet.rows._array)
                }
            )
        })
    }
    const onSave = () => {
        db.transaction(tx => {
            tx.executeSql(`SELECT * FROM usuario WHERE cliente_Telefono='${Usuario_Telefono}'`, null,
                (txtObj, resulSet) => {
                    setCurrentUser(resulSet.rows._array)
                    if (currentUser === undefined) {
                        createUser(Usuario_Telefono, Usuario_Nombre, Usuario_Correo, Usuario_Pass,image)
                        Alert.alert("Exito!", "Usuario Creado")
                        getCurrentUser(Usuario_Telefono)
                        navigation.navigate('Maps',{id:Usuario_Telefono});
                    } else {
                        currentUser.map((nuevo, index) => {
                            newUser(nuevo?.cliente_Telefono, nuevo?.cliente_Correo)
                        })
                    }

                }
            )
        })

        //updateUser(currentUser?.Usuario_Telefono, currentUser?.Usuario_Nombre,currentUser?.Usuario_Correo)
        //

    };

    const newUser = (nuevoTelefono, nuevoCorreo) => {
        try {
            if (nuevoTelefono == Usuario_Telefono || nuevoCorreo == Usuario_Correo) {
                Alert.alert("Cuidado!", "Este correo o numero ya estan registrados")
            }
        }
        catch (e) { Alert.alert("error", e.message) }
    }

    return (
        <View style={styles.page}>
            <Text style={styles.title}>Registrate</Text>
            <View style={styles.profileContainer}>
            
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <Button title="Selecciona tu foto de perfil" onPress={pickImage} style={styles.botonPerfil}/>
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
                        onChangeText={onChangeTelefono}
                        value={Usuario_Telefono}
                    />
                    <Text style={styles.inputText}>Tu Correo</Text>
                    <TextInput
                        style={styles.input}
                        textContentType="emailAddress"
                        onChangeText={onChangeCorreo}
                        value={Usuario_Correo}
                    />
                    <Text style={styles.inputText}>Tu contrasena</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={onChangePass}
                        value={Usuario_Pass}
                    />
                    <Text style={styles.inputText}>Confirma contrasena</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={onChangePass2}
                        value={Usuario_Pass2}
                    />
                </SafeAreaView>
                <Button title="Guardar" onPress={onSave} />
            </View>
        </View>
    )
}

export default NewUserAccount

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 30,
    },
    profileContainer: {
        alignItems: "center",
    },
    image: {
        height: 150,
        aspectRatio: 1,
        marginTop:10,
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
        marginTop: 30,
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
        borderColor: "lightgrey",
        padding: 10,
        borderRadius: 6
    },
    inputText: {
        marginTop: 10,
        marginLeft: 12,
        fontSize: 15,
    },
    eliminarCuenta: {
        backgroundColor: "red"
    },
    botonPerfil:{
        marginTop:10,
        marginBottom:10
    }
})