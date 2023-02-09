import { View, Text, StyleSheet, FlatList, Image,RefreshControl } from 'react-native'
import restarurants from '.././../../assets/data/restaurants.json'
import BasketDishItem from '../../components/BasketDishItem'
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState,useCallback } from 'react';
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
    const [currentBasket,setcurrentBasket]=useState(null)
    const [refreshing, setRefreshing] = useState(false);
    
    const [currentUser,setCurrentUser]=useState(null)
    const db = SQLite.openDatabase('example.db')
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 1000);
      }, []);
    
    useEffect(()=>{
        setCurrentUser(user[0])
    },[user])
    useEffect(()=>{
        getOrdenCarrito(currentUser?.cliente_Telefono)
    },[user])

    const getCarrito= async()=>{
        db.transaction(tx => {
            // sending 4 arguments in executeSql
            tx.executeSql(`SELECT idCarrito FROM carrito INNER JOIN usuario ON carrito.cliente_Telefono=usuario.cliente_Telefono WHERE usuario.cliente_Telefono='${currentUser?.cliente_Telefono}' `, [],
                (txObj, result) => {
                    //setcurrentBasket(result.rows._array),
                    if(result.rows._array.length===0){
                        insertCarrito(currentUser?.cliente_Telefono)
                        console.log()
                    }else{
                        getOrdenCarrito(currentUser?.cliente_Telefono)
                    }
                    console.log("resultadop",result.rows._array.length)
                },
                (txObj, error) => console.log('Error ', error)
            )
        })
    }
    const insertCarrito= async(Usuario_Telefono)=>{
        db.transaction(tx => {
            // sending 4 arguments in executeSql
            tx.executeSql(`INSERT INTO carrito (cliente_Telefono) VALUES ('${Usuario_Telefono}')`, [],
                (txObj, result) => {
                    setcurrentBasket(result.rows._array)
                    getOrdenCarrito(Usuario_Telefono)
                },
                (txObj, error) => console.log('Error ', error.message)
            )
        })
    }
    const getOrdenCarrito= async(Usuario_Telefono)=>{
        db.transaction(tx => {
            // sending 4 arguments in executeSql
            tx.executeSql(`SELECT *  FROM ordenCarrito INNER JOIN  menuItem On menuItem.idMenuItem=ordenCarrito.idMenuItem INNER JOIN carrito ON carrito.idCarrito=ordenCarrito.idCarrito WHERE carrito.cliente_Telefono='${Usuario_Telefono}'`, [],
                (txObj, result) => {
                    setcurrentBasket(result.rows._array),
                    console.log(currentBasket)
                },
                (txObj, error) => console.log('Error ', error)
            )
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

            <FlatList data={currentBasket} renderItem={({ item }) => <BasketDishItem basketSushi={item} refreshing={refreshing} onRefresh={onRefresh}/>} />
            <View style={styles.total}>
                <Text>asdasd</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonAdd} onPress={getCarrito}> Comprar elemento(s)  </Text>
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
        marginTop:30,
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