import { View, Text, StyleSheet, Image,Pressable } from "react-native"
import { useRoute } from '@react-navigation/native';
import menu from '../../../assets/data/menu.json'
import dishes from '../../../assets/data/dishes.json'

import { useNavigation } from "@react-navigation/native";

const menus = menu[0]
const PendingOrders = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const id=route.params?.id
    const OnPress = () => {
      navigation.navigate("OrderDetails")
    }
    return (

        <Pressable onPress={OnPress}  style={styles.restaurantContainer}>
        <Image source={{uri:'https://images-uan.s3.us-east-2.amazonaws.com/imagenessushi/default.jpg'}} style={styles.image}/>
   <View style={styles.row}>
     <View>
       <Text style={styles.Title}>Pedido numero 12332</Text>
       <Text style={styles.underTitle}>Cliente: Sergio Rivera</Text>
       <Text style={styles.subTitle}>Tiempo de entrega - 14:15</Text>
       <Text style={styles.subTitle}>Fecha de entrega - 14/02/23</Text>
       <Text style={styles.subTotal}>Total: $12332</Text>
     </View>
   </View>
 </Pressable>
/*
        <Card title="Order details" style={styles.restaurantContainer}>
            <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
                <Descriptions.Item label="Customer">Sergio Rivera</Descriptions.Item>
                <Descriptions.Item label="Customer Address">{id.deliveryAddress} </Descriptions.Item>
            </Descriptions>
            <Divider />
            <List dataSource={dishes} renderItem={(dishitem) => (
                <List.Item>
                    <div>{dishitem.name} x{dishitem.quantity}</div>
                    <div>{dishitem.price}</div>
                </List.Item>
            )}></List>
            <Divider />
            <List>
                <List.Item>
                    <div>Total</div>
                    <div>123322</div>
                </List.Item>
            </List>

            <div style={styles.buttonContainer}>
                <Button block type="primary" style={styles.buttons}>Accept</Button>
                <Button block type="primary" danger style={styles.buttons}>Decline</Button>

            </div>
        </Card>*/
    )
}

export default PendingOrders

const styles = StyleSheet.create({
    restaurantContainer:{
        width:"100%",
        marginVertical:10,
        flexDirection:'row',
        marginLeft:15
      },
      image:{
        height:125,
        aspectRatio:1,
        marginBottom:5,
        borderRadius:7
      },
      Title:{
        fontSize:20,
        fontFamily: "bold",
        marginVertical:5
      },
      underTitle:{
        fontSize:15,
        ontFamily: "bold",
      },
      subTitle:{
        fontSize:15,
        color:"grey"
      },
      subTotal:{
        fontSize:20,
        marginVertical:15
      },
      row:{
        alignItems:"center",
        marginLeft:15
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
})
