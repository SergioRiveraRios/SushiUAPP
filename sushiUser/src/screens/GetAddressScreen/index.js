import { View, Text, StyleSheet, Image, FlatList, Button,Pressable } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import perfil from '../../../assets/data/dashboard/perfil.json'
import { useNavigation } from '@react-navigation/native';
import { useAuthContext } from '../../contexts/AuthContext'
import { useEffect, useState } from "react";
import { useRoute } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';

import AddressComponent from "../../components/AddressComponent";
const GetAddressScreenn = () => {
    const navigation = useNavigation()
    const db = SQLite.openDatabase('example.db')
    const { setUsuario, setAddress, adress, user } = useAuthContext()
    const [currentUser, setCurrentUser] = useState(null)
    const [direcciones, setDirecciones] = useState(null)
    const [currentBasket, setcurrentBasket] = useState(null)
    useEffect(() => {
        setCurrentUser(user[0])
        getAddress(user[0].cliente_Telefono)
    }, [])

    const getAddress = async (Usuario_Telefono) => {
        console.log(currentUser)
        db.transaction(tx => {
            // sending 4 arguments in executeSql
            tx.executeSql(`SELECT * FROM direccion INNER JOIN usuario ON direccion.cliente_Telefono='${Usuario_Telefono}'`, [],
                (txObj, result) => {
                    setDirecciones(result.rows._array)
                    setcurrentBasket(result.rows._array)
                },
                (txObj, error) => console.log('Error ', error)
            )
        })
    }
    const newAddress = () => {
        navigation.navigate('Maps', { id: user[0]?.cliente_Telefono })
    }
    return (
        <View style={styles.page}>
            <Text style={styles.title}>Tus Direcciones </Text>
            <FlatList
                data={direcciones}
                renderItem={({ item, index }) => <AddressComponent Address={item} index={index} />}
            />
            <Pressable style={styles.button}  onPress={newAddress}>
                <Text style={styles.text} >Nueva Direccion</Text>
            </Pressable>
        </View>

    )
}

export default GetAddressScreenn
const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 30,
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
      },text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      }
})
