import { View,Text, StyleSheet, Image,Pressable } from "react-native"
import { AntDesign } from '@expo/vector-icons'; 

import { useNavigation } from "@react-navigation/native";
//Import restaurants change for sushis
import restaurants from '../../../assets/data/restaurants.json'

//Import dishes change for sushi Ingredients 
import SushiListItem from "../../components/sushiListItem";
import { useRoute } from "@react-navigation/native";
const restaurant =restaurants[0]



const sushiList= () =>{
    const route = useRoute()
    const id=route.params.id
    console.log(id)

    const navigation=useNavigation()
    const onPress=()=>{
        navigation.navigate("SushiDetailScreen",
        {id:restaurant.id})
    }

    return(
        <View style={styles.page} onPress={onPress}>
            <Image source={{uri:restaurant.image}} style={styles.image}/>
            <View style={styles.iconContainer}>
                <AntDesign name="leftcircleo" size={30} color="white" />
            </View>
            <Pressable>
            <Text style={styles.title} >{restaurant.name}</Text>
                <Text style={styles.subtitle}> ${restaurant.deliveryFee}</Text>
                <SushiListItem dish={restaurant.dishes[0]}/>
            </Pressable>
                
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
        aspectRatio:7/4,
        paddingHorizontal:5
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