
import { StyleSheet, Text, View,Image } from 'react-native';


const RestaurantItem = ({restaurant})=>{
  
    return (
      <View style={styles.restaurantContainer}>
             <Image source={{uri:restaurant.image,}} style={styles.image}/>
             <Text style={styles.Title}>{restaurant.name}</Text>
             <Text style={styles.subTitle}>{restaurant.deliveryFee}</Text>
        </View>
    )
  }

  export default RestaurantItem
  const styles = StyleSheet.create({
    restaurantContainer:{
      padding: 8
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
    }
  });
  