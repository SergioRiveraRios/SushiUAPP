import { View, Text, StyleSheet, Image, Pressable } from "react-native"
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";
//Import restaurants change for sushis
import restaurants from '../../../assets/data/restaurants.json'

//Import dishes change for sushi Ingredients 
import SushiListItem from "../../components/sushiListItem";
import { useRoute } from "@react-navigation/native";
const restaurant = restaurants[0]



const HeaderSushiList = () => {
    const route = useRoute()
    const menucat = route.params?.menucat
    return (
        <View style={styles.page}>
            <Image source={{ uri: menucat.Categoria_Imagen }} style={styles.image} />
            <Text style={styles.title} >{menucat.Categoria}</Text>
            <View>
                <Text style={styles.subTitle}>Tiempo: {menucat.Categoria_MinDelivery}min - {menucat.Categoria_MaxDelivery}min</Text>
            </View>
            <View style={styles.separator} />
        </View>
    )
}

export default HeaderSushiList

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingTop: 10
    },
    image: {
        width: "100%",
        aspectRatio: 7 / 4,
        paddingHorizontal: 5,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7
    },
    title: {
        fontSize: 35,
        fontWeight: "500",
        paddingLeft: 10
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "300",
        paddingLeft: 10
    },
    separator: {
        height: 1,
        backgroundColor: "#DCDCDC",
        marginVertical: 8
    },
})