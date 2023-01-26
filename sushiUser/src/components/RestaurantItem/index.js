
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View,Image,Pressable } from 'react-native';
import {restaurants } from '../../../assets/data/restaurants.json'
import menu from '../../../assets/data/menu.json'
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { MenuItem } from '../../models';

const RestaurantItem = ({menu,index})=>{
  const navigation = useNavigation()
  const [sushiList, sushiMenu] = useState([])
  const [entradasList, entradasMenu] = useState([])
  const [especialidadList, especialidadMenu] = useState([])
  const [bolasList, bolasMenu] = useState([])
  const [brochetasList, brochetasMenu] = useState([])
  const [coctelesList, coctelesMenu] = useState([])
  useEffect(() => {
    DataStore.query(MenuItem,c=>c.itemcategoriaID.eq("8d6c61bb-04f9-41d5-a4b0-7ddff00fdc02")).then((results) => sushiMenu(results))
    DataStore.query(MenuItem,c=>c.itemcategoriaID.eq("57bf874e-417b-4de1-afaa-bc86fca3596c")).then((results) => especialidadMenu(results))
    DataStore.query(MenuItem,c=>c.itemcategoriaID.eq("a2f0fdde-4258-4bf0-8b19-1da4946b93d9")).then((results) => brochetasMenu(results))
    DataStore.query(MenuItem,c=>c.itemcategoriaID.eq("9c9fbbb3-7026-41d6-8548-77e0016ccda8")).then((results) => bolasMenu(results))
    DataStore.query(MenuItem,c=>c.itemcategoriaID.eq("fb04672d-124b-4e86-a0f1-40d44deb812c")).then((results) => entradasMenu(results))
    DataStore.query(MenuItem,c=>c.itemcategoriaID.eq("3e8c0f8a-f773-4c8c-a4f2-239684455c98")).then((results) => coctelesMenu(results))
  })
  
  const onPress=()=>{
    switch(index){
      case 0:
        navigation.navigate("SushiList",{id:brochetasList,menucat:menu})
      break;
      case 1:
        navigation.navigate("SushiList",{id:sushiList,menucat:menu},)
      break;
      case 2:
        navigation.navigate("SushiList",{id:especialidadList,menucat:menu})
      break;
      case 3:
        navigation.navigate("SushiList",{id:entradasList,menucat:menu})
      break;
      case 4:
        navigation.navigate("SushiList",{id:coctelesList,menucat:menu})
      break;
      case 5:
        navigation.navigate("SushiList",{id:bolasList,menucat:menu})
      break;
    }
    //console.log()
  }
    return (
      
      <Pressable onPress={onPress}  style={styles.restaurantContainer}>
             <Image source={{uri:menu.Categoria_Image,}} style={styles.image}/>
        <View style={styles.row}>
          <View>
            <Text style={styles.Title}>{menu.Categoria}</Text>
            <Text style={styles.subTitle}>Tiempo: 20min - 20min</Text>
          </View>
        </View>
      </Pressable>
        
        
    );
  };

  export default RestaurantItem
  const styles = StyleSheet.create({
    restaurantContainer:{
      width:"100%",
      marginVertical:10
    },
    image:{
      width:"100%",
      aspectRatio: 5/3,
      marginBottom:5,
      borderRadius:7
    },
    Title:{
      fontSize:20,
      fontFamily: "bold",
      marginVertical:5
    },
    subTitle:{
      fontSize:14,
      color:"grey"
    },
    row:{
      flexDirection:'row',
      alignItems:"center"
    },
    rating:{
      marginLeft:"auto",
      backgroundColor:"lightgrey",
      width:25,
      height:25,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:20
    }
  });
  