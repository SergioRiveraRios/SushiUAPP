import { View, Text, StyleSheet, Image, Pressable, FlatList } from "react-native"
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";

import { useRoute } from '@react-navigation/native';
//Import restaurants change for sushis
import restaurants from '../../../assets/data/restaurants.json'
//Import dishes change for sushi Ingredients 
import SushiListItem from "../../components/sushiListItem";
import SushiDetailScreen from "../sushiDetailScreen";
import SushiList from "./sushiList";
import HeaderSushiList from './header'
import { useEffect, useState } from 'react';

const SushiList2 = () => {
    
    const route = useRoute()
    const id = route.params?.id
    const navigation = useNavigation()
    const [menu,setMenu]=useState(null)
    useEffect(()=>{
        setMenu(id)
    },[id])
    const onPress = () => {
        navigation.navigate("SushiDetailScreen", { id: id })
    }

    return (
        
        <Pressable style={styles.page} >
            <FlatList ListHeaderComponent={HeaderSushiList} data={menu}  renderItem={({ item }) => <SushiList menuItem={item} />} />
        </Pressable>
    )
}
export default SushiList2

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    iconContainer: {
        padding: 20,
        position: "absolute",
        top: 35,
        left: 10
    },
    image: {
        width: "100%",
        aspectRatio: 7 / 4,
        paddingHorizontal: 5
    },
    title: {
        fontSize: 35,
        fontWeight: "500"
    },
    subtitle: {
        color: "gray",
        fontSize: 15
    }
})