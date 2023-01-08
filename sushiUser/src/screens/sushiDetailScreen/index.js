import {View,Text,StyleSheet} from 'react-native'
import restarurants from '.././../../assets/data/restaurants.json'
import { AntDesign } from '@expo/vector-icons'; 
import { useState } from 'react';

const dish = restarurants[0].dishes[0]

const SushiDetailScreen = ()=>{
    const [quantity,setQuantity]= useState(1)
    const onMinus =() =>{if(quantity>1){setQuantity(quantity-1)}}
    const onPlus =() =>{setQuantity(quantity+1)}
    const getTotal=()=>{return (dish.price * quantity).toFixed(2)}
    return(
        <View style={styles.page}>
            <Text style={styles.title}>{dish.name}</Text>
            <Text style={styles.descrpition}>{dish.description}</Text>
            <View style={styles.separator}/>

            <View style={styles.iconContainer}>
                <AntDesign name="minuscircleo" size={24} color="black" onPress={onMinus}/>
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign name="pluscircleo" size={24} color="black" onPress={onPlus}/>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonAdd}> Add {quantity} to basket (${getTotal()}) </Text>
            </View>
        </View>
    )
}

export default SushiDetailScreen

const styles = StyleSheet.create({
    page:{
        flex:1,
        width:"100%",
        paddingVertical:30
    },
    title:{
        fontSize:30,
        fontWeight:"500"
    },
    description:{
        color:"grey"
    },
    separator:{
        height:1,
        backgroundColor:"#DCDCDC",
        marginVertical:10
    },
    iconContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
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
    }
})