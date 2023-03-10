import { View, Text, StyleSheet, Image } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import perfil from '../../../assets/data/dashboard/perfil.json'
import { useNavigation } from '@react-navigation/native';
import { useAuthContext } from '../../contexts/AuthContext'
import { useEffect, useState } from "react";
import { useRoute } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';
const perfiles = perfil[0]
const ProfileScreen = () => {
    const db = SQLite.openDatabase('example.db')
    const { setUsuario, user } = useAuthContext()
    const navigation = useNavigation()
    const [currentUser, setCurrentUser] = useState(null)
    const route = useRoute()
    const id = route.params?.id
    useEffect(() => {
        console.log(id)
        if (id === undefined) {
            setCurrentUser(user[0])
        } else { getCurrentUser() }


    }, [user])
    const getCurrentUser = () => {
        db.transaction(tx => {
            tx.executeSql(`SELECT * FROM usuario WHERE cliente_Telefono='${id}'`, null,
                (txtObj, resulSet) => {
                    setCurrentUser(resulSet.rows._array)
                }
            )
        })
    }
    const SignOut = () => {
        console.log("usuario", user)
        console.log("nombre", currentUser?.cliente_Nombre)
    }

    const AccountScreen = () => {
        navigation.navigate("Account")
    }
    const GetAddressScreen=()=>{
        navigation.navigate("GetAddressScreen")
    }
    const OrdersScreen=()=>{
        navigation.navigate("OrdersScreen")
    }
    return (
        <View style={styles.page}>
            <Text style={styles.title}>Tu perfil</Text>
            <View style={styles.profileContainer}>
                {currentUser?.cliente_Imagen && (<Image source={{ uri: currentUser?.cliente_Imagen }} style={styles.image} />)}
                <Text style={styles.perfil}>{currentUser?.cliente_Nombre}</Text>
            </View>

            <View style={styles.separator} />
            <View style={styles.profileContainer2}>
            <View style={styles.row}>

                <View style={styles.tucarrito} >
                    <AntDesign name="user" size={36} color="black" />
                </View>
                <Text onPress={AccountScreen}> Mi cuenta</Text>
            </View>
            <View style={styles.row}>

                <View style={styles.tucarrito} >
                    <AntDesign name="book" size={36} color="black" />
                </View>
                <Text onPress={GetAddressScreen}> Mis Direcciones</Text>
            </View>
            <View style={styles.row}>

                <View style={styles.tucarrito}>
                    <Feather name="shopping-bag" size={36} color="black" />
                </View>
                <Text onPress={OrdersScreen}> Mis pedidos </Text>
            </View>
            <View style={styles.row}>

                <View style={styles.tucarrito}>
                    <Feather name="help-circle" size={36} color="black" />
                </View>
                <Text> Ayuda </Text>
            </View>
            </View>
            <View style={styles.separator} />
            <View>
            <View style={styles.buttonContainer} onPress={SignOut}>
                <Text style={styles.cerrar} onPress={SignOut}> Cerrar sesion</Text>
            </View>
            </View>
            
        </View>

    )
}

export default ProfileScreen
const styles = StyleSheet.create({
    page: {
        flex:1,
        width: "100%",
    },
    profileContainer: {
        alignItems: "center",
    },
    profileContainer2: {
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
        marginTop: 20
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
        marginBottom: 10,
        marginTop:10
    },
    perfil: {
        marginTop: 10,
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
        marginTop: "auto",
    },
})