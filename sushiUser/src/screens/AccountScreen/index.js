import { View, Text, StyleSheet, Image, TextInput, SafeAreaView, Button, Alert } from "react-native"
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { DataStore } from "aws-amplify";
import { Usuario } from '../../models'
import { Carrito } from "../../models";
import { useAuthContext } from '../../contexts/AuthContext'
import { useBasketContext } from "../../contexts/BasketContext";
const AccountScreen = () => {
    const { dbUser } = useAuthContext()

    const [Usuario_Nombre, onChangeNombre] = useState(dbUser?.Usuario_Nombre || "");
    const [Usuario_Telefono, onChangeTelefono] = useState(dbUser?.Usuario_Telefono + "" || "0");
    const [Usuario_Correo, onChangeCorreo] = useState(dbUser?.Usuario_Correo || "");
    const { sub, setdbUser } = useAuthContext()
    const { addtoBasketItem, basket, setBasket } = useBasketContext()


    const onSave = async () => {
        if (dbUser) {
            console.log("1")
            await updateUser();
            console.log("3")
        } else { await newUser(); }

    }
    const updateUser = async () => {
        const user  = await DataStore.save(Usuario.copyOf(dbUser, updated => {
                updated.Usuario_Nombre = Usuario_Nombre;
                updated.Usuario_Telefono = parseInt(Usuario_Telefono);
                updated.Usuario_Correo = Usuario_Correo;
                updated.sub=sub;
            }));
            console.log("2")
            setdbUser(user)

    }
    const newUser = async () => {
        try {
            const user = await DataStore.save(new Usuario({ Usuario_Nombre, Usuario_Telefono: parseInt(Usuario_Telefono), Usuario_Correo, sub }))
            setdbUser(user)
            const basket2 = await DataStore.save(new Carrito({ usuarioID: user.id }))
            setBasket(basket2)
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
                    <Text style={styles.inputText}>Tu nombre:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNombre}
                        value={Usuario_Nombre}
                    />
                    <Text style={styles.inputText}>Tu Telefono:</Text>
                    <TextInput
                        style={styles.input}
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
    }
})