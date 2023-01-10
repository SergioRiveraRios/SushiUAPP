
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View,Image,Pressable } from 'react-native';
import {restaurants } from '../../../assets/data/restaurants.json'

const RestaurantItem = ({restaurant})=>{
  const navigation = useNavigation()
  const onPress=()=>{
    navigation.navigate("SushiList",{id:restaurant})
  }
    return (
      
      <Pressable onPress={onPress}  style={styles.restaurantContainer}>
             <Image source={{uri:restaurant.image,}} style={styles.image}/>
        <View style={styles.row}>
          <View>
            <Text style={styles.Title}>{restaurant.name}</Text>
            <Text style={styles.subTitle}>{restaurant.deliveryFee}</Text>
          </View>

          <View style={styles.rating}>
            <Text>{restaurant.rating}</Text>
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
      marginBottom:5
    },
    Title:{
      fontSize:16,
      fontFamily: "bold",
      marginVertical:5
    },
    subTitle:{
      fontSize:12,
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
  