import { View,Text, StyleSheet, Image } from "react-native"

//Import restaurants change for sushis
import restaurants from '../../../assets/data/restaurants.json'
const restaurant =restaurants[0]

const SushiListItem = ({dish}) =>{
    return(
        <View>
            <Text  style={styles.title} >Ttile</Text>

        </View>
    )
}

export default SushiListItem

const styles = StyleSheet.create({})