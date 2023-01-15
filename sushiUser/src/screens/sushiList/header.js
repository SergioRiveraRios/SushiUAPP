import { View,Text, StyleSheet, Image,Pressable } from "react-native"
import { AntDesign } from '@expo/vector-icons'; 

import { useNavigation } from "@react-navigation/native";
//Import restaurants change for sushis
import restaurants from '../../../assets/data/restaurants.json'

//Import dishes change for sushi Ingredients 
import SushiListItem from "../../components/SushiListItem";
import { useRoute } from "@react-navigation/native";
const restaurant =restaurants[0]



const HeaderSushiList= () =>{
    const route = useRoute()
    const id=route.params.id
    console.log(id)

    const navigation=useNavigation()

    return(
        <View style={styles.page}>
            <Image source={{uri:id.image}} style={styles.image}/>
            <Text style={styles.title} >{id.name}</Text>
            <Text style={styles.subTitle}>Tiempo: {id.minDeliveryTime}min - {id.maxDeliveryTime}min</Text>
        </View>
    )
}

export default HeaderSushiList

const styles = StyleSheet.create({
    page:{
        flex:1,
        padding:10
    },
    image:{
        width:"100%",
        aspectRatio:7/4,
        paddingHorizontal:5,
        borderRadius:7
    },
    title:{
        fontSize:35,
        fontWeight:"500",
        paddingLeft:10
    },
    subTitle:{
        fontSize:20,
        fontWeight:"300",
        paddingLeft:10
    }
})