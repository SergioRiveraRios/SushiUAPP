import { View, Text, StyleSheet, Image } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import perfil from '../../../assets/data/dashboard/perfil.json'
import { useNavigation } from '@react-navigation/native';
import {useAuthContext} from '../../contexts/AuthContext'
import { useEffect, useState } from "react";

const perfiles = perfil[0]
const ProfileScreen = () => {
    const { setUsuario, user } = useAuthContext()
    const navigation = useNavigation()
    const [currentUser,setCurrentUser]=useState(null)
    useEffect(()=>{
        setCurrentUser(user[0])
    })
    const SignOut = () => {
        console.log("usuario",currentUser)
        console.log("nombre",currentUser?.cliente_Nombre)
    }

    const AccountScreen = () => {
        navigation.navigate("Account")
    }
    return (
        <View style={styles.page}>
            <Text style={styles.title}>Tu perfil</Text>
            <View style={styles.profileContainer}>
                {perfiles.perfil && (<Image source={{ uri: perfiles.perfil }} style={styles.image} />)}
                <Text style={styles.perfil}>{currentUser?.cliente_Nombre}</Text>
            </View>

            <View style={styles.separator} />
            <View style={styles.row}>

                <View style={styles.tucarrito} >
                <AntDesign name="user" size={36} color="black" />
                </View>
                <Text onPress={AccountScreen}> Mi cuenta</Text>
            </View>

            <View style={styles.row}>

                <View style={styles.tucarrito}>
                <Feather name="shopping-bag" size={36} color="black" />
                </View>
                <Text> Mis pedidos </Text>
            </View>
            <View style={styles.row}>

                <View style={styles.tucarrito}>
                <Feather name="help-circle" size={36} color="black" />
                </View>
                <Text> Ayuda </Text>
            </View>
            <View style={styles.separator} />

            <View style={styles.buttonContainer} onPress={SignOut}>
                <Text style={styles.cerrar} onPress={SignOut}> Cerrar sesion</Text>
            </View>
        </View>

    )
}

export default ProfileScreen
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
        marginTop: 50
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
    price: {
        marginLeft: "auto",
        paddingRight: 5
    },
    tucarrito: {
        paddingHorizontal: 5,
        marginRight: 10,
        borderRadius: 5
    },
    menuIcon: {
        height: 50,
        aspectRatio: 1,
        borderRadius: 50,
        paddingLeft: 5,
        justifyContent: "center",
        alignContent: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "600",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        marginBottom: 10
    },
    perfil: {
        marginTop: 20,
        fontWeight: "400",
        fontSize: 25
    },
    cerrar: {
        color: "red",
        fontWeight: "400",
        fontSize: 20
    },
    buttonContainer: {
        padding: 20,
        alignItems: "center",

        marginTop: "auto"
    },
})