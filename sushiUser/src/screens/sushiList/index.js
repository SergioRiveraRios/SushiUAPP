import { View,Text, StyleSheet, Image } from "react-native"
import { AntDesign } from '@expo/vector-icons'; 
//Import restaurants change for sushis
import restaurants from '../../../assets/data/restaurants.json'
const restaurant =restaurants[0]

const sushiList= () =>{
    return(
        <View style={styles.page}>
            <Image source={{uri:restaurant.image}} style={styles.image}/>
            <View style={styles.iconContainer}>
            <AntDesign name="leftcircleo" size={30} color="white" />
            </View>
            <Text style={styles.title} >{restaurant.name}</Text>
            <Text style={styles.subtitle}> ${restaurant.deliveryFee}</Text>
        </View>
    )
}

export default sushiList

const styles = StyleSheet.create({
    page:{
        flex:1
    },
    iconContainer:{
        padding:20,
        position:"absolute",
        top:35,
        left:10
    },
    image:{
        width:"100%",
        aspectRatio:5/4
    },
    title:{
        fontSize:35,
        fontWeight:"500"
    },
    subtitle:{
        color:"gray",
        fontSize:15
    }
})