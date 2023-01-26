import { View,Text, StyleSheet, Image,Pressable } from "react-native"
import { AntDesign } from '@expo/vector-icons'; 

import { useNavigation } from "@react-navigation/native";
//Import restaurants change for sushis
import restaurants from '../../../assets/data/restaurants.json'

//Import dishes change for sushi Ingredients 
import SushiListItem from "../../components/sushiListItem";
import { useRoute } from "@react-navigation/native";
const restaurant =restaurants[0]



const HeaderSushiList= () =>{
    const route = useRoute()
    const menucat=route.params?.menucat
    return(
        <View style={styles.page}>
            <Image source={{uri:menucat.Categoria_Image}} style={styles.image}/>
            <Text style={styles.title} >{menucat.Categoria}</Text>
            
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