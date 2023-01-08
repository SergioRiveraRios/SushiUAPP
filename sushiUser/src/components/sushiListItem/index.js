import { View,Text, StyleSheet, Image } from "react-native"

//Import restaurants change for sushis
import restaurants from '../../../assets/data/restaurants.json'
const restaurant =restaurants[0]

const SushiListItem = ({dish}) =>{
    return(
        <View style={styles.container}>
            <Text  style={styles.title} >{dish.name}</Text>
            <Text  style={styles.description} >{dish.description}</Text>
            <Text  style={styles.price} >{dish.price}</Text>
        </View>
    )
}

export default SushiListItem

const styles = StyleSheet.create({
    container:{
        paddingVertical:20,
        paddingHorizontal:20,
        borderBottomColor:"#DCDCDC",
        borderBottomWidth:1
    },
    title:{
        fontWeight:"500",
        fontSize:15,
        letterSpacing:0.5
    },
    description:{
        color:"grey",
        marginVertical:5
    },
    price:{
        fontSize:15
    }
})