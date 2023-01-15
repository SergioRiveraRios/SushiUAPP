
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View,Image,Pressable } from 'react-native';
import {restaurants } from '../../../assets/data/restaurants.json'
import menu from '../../../assets/data/menu.json'
const RestaurantItem = ({menu})=>{
  const navigation = useNavigation()
  const onPress=()=>{
    navigation.navigate("SushiList",{id:menu})
  }
    return (
      
      <Pressable onPress={onPress}  style={styles.restaurantContainer}>
             <Image source={{uri:menu.image,}} style={styles.image}/>
        <View style={styles.row}>
          <View>
            <Text style={styles.Title}>{menu.name}</Text>
            <Text style={styles.subTitle}>Tiempo: {menu.minDeliveryTime}min - {menu.maxDeliveryTime}min</Text>
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
  