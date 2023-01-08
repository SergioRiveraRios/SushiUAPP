import {View,Text,StyleSheet, FlatList} from 'react-native'
import restarurants from '.././../../assets/data/restaurants.json'
import BasketDishItem from '../../components/BasketDishItem'
import { AntDesign } from '@expo/vector-icons'; 
import { useState } from 'react';
import { bool } from 'prop-types';

const dish = restarurants[0].dishes[0]
const restarurant= restarurants[0]


const BasketScreen = ()=>{
    const [quantity,setQuantity]= useState(1)
    const getTotal=()=>{return (dish.price * quantity).toFixed(2)}

    return(
        <View style={styles.page}>
            <AntDesign name="leftcircleo" size={30} color="black" />
            <Text style={styles.title}>Tu carrito</Text>

            <Text style={styles.descrpition}>{dish.description}</Text>

            <FlatList data={restarurant.dishes} renderItem={({item})  => <BasketDishItem basketSushi={item} />} />


            <View style={styles.separator}/>

            
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonAdd}> Add {quantity} to basket (${getTotal()}) </Text>
            </View>
        </View>
    )
}

export default BasketScreen

const styles = StyleSheet.create({
    page:{
        flex:1,
        width:"100%",
        paddingVertical:30,
        paddingLeft:15
    },
    title:{
        paddingLeft:15,
        fontSize:30,
        fontWeight:"500"
    },
    descrpition:{
        paddingLeft:15,
        color:"grey"
    },
    separator:{
        height:1,
        backgroundColor:"#DCDCDC",
        marginVertical:10
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:40
    },
    quantity:{
        fontSize:25,
        marginHorizontal:20
    },
    buttonContainer:{
        backgroundColor:"black",
        padding:20,
        alignItems:"center",
        marginTop:"auto"
    },
    buttonAdd:{
        color:"white",
        fontWeight:"600"
    },
    price:{
        marginLeft:"auto"
    },
    tucarrito:{
        backgroundColor:"grey",
        paddingHorizontal:5,
        paddingVertical:2,
        marginRight:10,
        borderRadius:5
    }
})