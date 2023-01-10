import {View,Text,StyleSheet,Pressable} from 'react-native'
import restarurants from '.././../../assets/data/restaurants.json'
import { AntDesign } from '@expo/vector-icons'; 
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";


const SushiList = ({sushi})=>{
    const navigation=useNavigation()
    const onPrress=()=>{
        navigation.navigate("SushiDetailScreen",{id:sushi})
    }
    return(
        <View style={styles.page}>

            <Pressable onPress={onPrress}>
                <Text style={styles.title}>{sushi.name}</Text>
                <Text style={styles.descrpition}>{sushi.description}</Text>
            </Pressable>
            <View style={styles.separator}/>
        </View>
    )
}

export default SushiList

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