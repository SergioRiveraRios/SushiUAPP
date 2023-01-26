
import { View,Text,StyleSheet,Image, FlatList } from "react-native";

import orders from '../../../assets/data/orders.json'

import restarurants from '.././../../assets/data/restaurants.json'

import SushiListItem from '../../components/sushiListItem/index'

import BasketDishItem from '../../components/BasketDishItem'
const order =orders[0]

const OrderDetailsHeader =() =>{
    return(
        <View style={styles.restaurantContainer}>
             <Image source={{uri: order.Restaurant.image,}} style={styles.image}/>
        <View style={styles.row}>

          <View>
            <Text style={styles.Title}>{order.Restaurant.name}</Text>
            <Text style={styles.subTitle}>{order.status}  2 Days ago</Text>

            <Text style={styles}> Your order</Text>
          </View>
        </View>
      </View>
    )
}
const OrderDetails =()=>{
    return(
        
        <FlatList 
        ListHeaderComponent={OrderDetailsHeader}
        data={restarurants[0].dishes} 
                   renderItem={({item})=><BasketDishItem basketSushi={item}/> }/>
    )
}


export default OrderDetails

const styles = StyleSheet.create({
    
    image:{
      width:"100%",
      
      marginBottom:5
    },
    Title:{
      fontSize:20,
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
      backgroundColor:"#DCDCDC",
      width:25,
      height:25,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:20
    }
  });
  