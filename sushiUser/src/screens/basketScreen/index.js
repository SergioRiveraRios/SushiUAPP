import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import restarurants from '.././../../assets/data/restaurants.json'
import BasketDishItem from '../../components/BasketDishItem'
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { bool } from 'prop-types';
import menu from '../../../assets/data/menu.json'
import { useRoute } from '@react-navigation/native';
import {useAuthContext} from '../../contexts/AuthContext'
const dish = menu[0].dishes[0]
const restarurant = menu[1]
import * as SQLite from 'expo-sqlite';

const BasketScreen = () => {
    const [quantity, setQuantity] = useState(1)
    const getTotal = () => { return (dish.price * quantity).toFixed(2) }
    const { setUsuario, user } = useAuthContext()
    const [currentUser,setCurrentUser]=useState(null)
    const [currentBasket,setcurrentBasket]=useState(null)

    const db = SQLite.openDatabase('example.db')
    useEffect(()=>{
        setCurrentUser(user[0])
    },[user])
    useEffect(()=>{
        console.log(currentUser?.cliente_Telefono)
        getOrdenCarrito(currentUser?.cliente_Telefono)
        
    },[currentUser])
    const getOrdenCarrito= async(Usuario_Telefono)=>{
        db.transaction(tx => {
            // sending 4 arguments in executeSql
            tx.executeSql(`SELECT *  FROM ordenCarrito INNER JOIN  menuItem On menuItem.idMenuItem=ordenCarrito.idMenuItem`, [],
                (txObj, result) => {
                    setcurrentBasket(result.rows._array),
                    console.log(currentBasket)
                },
                (txObj, error) => console.log('Error ', error)
            )
        })
    }
    const setBasket=()=>{
        console.log('entre')
        return currentBasket.map((platillo, index)=>{
            console.log(platillo)
        })
    }
    const createOrdenCarrito = (carritoID, menuItemId, cantidadMenuItem) => {
        db.transaction(tx => {
            tx.executeSql(`INSERT INTO ordenCarrito (idCarrito,idMenuItem,cantidadMenutItem) SELECT (select idCarrito FROM carrito where idCarrito='${carritoID}') as idCarrito , (select menuItemNombre FROM menuitem where idMenuItem='${menuItemId}'), '${cantidadMenuItem}' `, null,
                (txtObj, resulSet) => {
                    console.log("CREADO")
                }
            )
        })
    
    }
    const getCarritos=()=>{
        getOrdenCarrito(currentUser?.cliente_Telefono)
    }
    return (
        <View style={styles.page}>
            <Text style={styles.title}>Tu carrito</Text>

            <FlatList data={currentBasket} renderItem={({ item }) => <BasketDishItem basketSushi={item} />} />

            
            <View style={styles.total}>
            </View>



            <View style={styles.buttonContainer}>
                <Text style={styles.buttonAdd} onPress={getCarritos}> Comprar elemento(s) - $1,215 </Text>
            </View>
        </View>
    )
}

export default BasketScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 30
    },
    title: {
        fontSize: 30,
        fontWeight: "600",
        justifyContent:"center",
        alignContent:"center",
        textAlign:"center",
        marginBottom:10
    },
    descrpition: {
        paddingLeft: 15,
        color: "grey"
    },
    separator: {
        height: 1,
        backgroundColor: "#DCDCDC",
        marginVertical: 10
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 20
    },
    buttonContainer: {
        backgroundColor: "black",
        padding: 20,
        alignItems: "center",
        marginTop: "auto"
    },
    buttonAdd: {
        color: "white",
        fontWeight: "600"
    },
    price: {
        marginLeft: "auto"
    },
    tucarrito: {
        backgroundColor: "grey",
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 5
    },
    total:{
        marginLeft:20,
        marginTop:15
    }
})