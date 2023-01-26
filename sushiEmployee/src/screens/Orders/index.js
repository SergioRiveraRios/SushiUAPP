import { View, Text, StyleSheet, Image,Pressable } from "react-native"

import { useNavigation } from '@react-navigation/native';
const Orders = () => {
    //const navigation = useNavigation()
    
    return (
        <Pressable   style={styles.restaurantContainer}>
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
        <Card title="new Orders" style={styles.container}>
            <Table
                dataSource={orders}
                columns={tableColumns}
                rowKey="orderID"
                onRow={(orderItem)=>({
                   onClick:()=>{navigation.navigate("OrderDetails",{id:orderItem})} 
                })}>
            </Table>
        </Card>*/
    )
}

export default Orders

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
