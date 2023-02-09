import { View, Text, StyleSheet, Image, Pressable } from "react-native"

import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

const OrdersScreen = () => {
  const navigation = useNavigation()
  const OnPress = () => {
    navigation.navigate("OrderDetails")
  }
  return (
    <Pressable onPress={OnPress} style={styles.restaurantContainer}>
      <Image source={{ uri: 'https://images-uan.s3.us-east-2.amazonaws.com/imagenessushi/default.jpg' }} style={styles.image} />
      <View style={styles.row}>
        <View>
          <Text style={styles.Title}>Pedido:#12332</Text>
          <Text style={styles.subTitle}>Tiempo de entrega - 14:15</Text>
          <Text style={styles.subTitle}>Fecha de entrega - 14/02/23</Text>
          <Text style={styles.subTotal}>Total: $12332</Text>
        </View>
      </View>
    </Pressable>
    /*
    <Pressable onPress={OnPress} style={styles.restaurantContainer}>
      <Image source={{ uri: 'https://images-uan.s3.us-east-2.amazonaws.com/imagenessushi/default.jpg' }} style={styles.image} />
      <View style={styles.pedido}>
        <View style={styles.pedido2}>
          <View>
            <Text style={styles.Title}>Pedido #12332</Text>
            <View style={styles.pedido2}>
              <Text style={styles.subTitle}>14:15 </Text>
              <Text style={styles.subTitle}>14/02/23</Text>
            </View>

            <Text style={styles.subTotal}>MX: $1232</Text>

          </View>
        </View>

      </View>
      <AntDesign name="rightcircleo" size={24} color="black" style={styles.arrow} />
    </Pressable>*/
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

export default OrdersScreen

const styles = StyleSheet.create({
  restaurantContainer: {
    width: "100%",
    marginVertical: 10,
    flexDirection: 'row',
    borderColor: "green",
    borderWidth:1,
    borderColor:"lightgrey",
    
  },
  image: {
    height: 125,
    aspectRatio: 1,
    marginBottom: 5,
    borderRadius: 7,
    marginLeft:10,
    alignSelf:"center"
  },
  Title: {
    fontSize: 20,
    fontFamily: "bold",
    marginVertical: 5
  },
  underTitle: {
    fontSize: 15,
    ontFamily: "bold",
  },
  subTitle: {
    fontSize: 15,
    color: "grey"
  },
  subTotal: {
    fontSize: 20,
    marginVertical: 15
  },
  row: {
    alignItems: "center",
    marginLeft: 15
  },
  rating: {
    marginLeft: "auto",
    backgroundColor: "lightgrey",
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  }
})
