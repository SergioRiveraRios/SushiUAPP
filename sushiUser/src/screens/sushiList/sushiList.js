import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import restarurants from '../../../assets/data/restaurants.json'
import { AntDesign } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";


import { useEffect, useState } from 'react';

const SushiList = ({ menuItem }) => {
    const navigation = useNavigation()
    const route = useRoute()
    const menuImagen =route.params?.menuid
    const onPrress = () => {
        navigation.navigate("SushiDetailScreen", { menuItem: menuItem })
    }
    return (
        <View style={styles.page}>

            <Pressable onPress={onPrress}>

                <Text style={styles.title}>{menuItem.menuItemNombre}</Text>
                <View>
                    <View style={styles.insideContainer}>
                        <View style={{flex:1,width:"90%"}}>
                            <Text style={styles.inside} numberOfLines={2}>Por Dentro:</Text>
                            <Text style={styles.descrpition} >{menuItem.menuItemDentro} </Text>
                            <Text style={styles.inside}>Por fuera: </Text>
                            <Text style={styles.descrpition } >{menuItem.menuItemFuera}</Text>
                            <Text style={styles.price}>Precio: ${menuItem.menuItemPrecio}</Text>
                        </View>
                        {menuItem.menuItemImagen && (<Image source={{ uri: menuItem.menuItemImagen }} style={styles.image} />)}
                    </View>
                </View>
            </Pressable>
            <View style={styles.separator} />
        </View>
    )
}

export default SushiList

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    title: {
        fontSize: 30,
        fontWeight: "500"
    },
    description: {
        color: "grey"
    },
    separator: {
        height: 1,
        backgroundColor: "#DCDCDC",
        marginVertical: 8
    },
    insideContainer: {
        flexDirection: "row",
        padding:5,
        
        justifyContent:"center",
        alignContent:"center",
    },
    price:{
        fontWeight:"500"
    },
    inside: {
        color: "orange",
        fontWeight: "400"
    },
    image: {
        height: 90,
        aspectRatio: 1,
        borderRadius: 7,
        paddingLeft:5,
        justifyContent:"center",
        alignContent:"center",
    }
})