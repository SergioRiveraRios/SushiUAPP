import { View, Text, StyleSheet, Image, Pressable } from "react-native"
import { useRoute } from '@react-navigation/native';
import menu from '../../../assets/data/menu.json'
import dishes from '../../../assets/data/dishes.json'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const menus = menu[0]
const PendingOrders = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const id = route.params?.id
  const OnPress = () => {
    navigation.navigate("OrderDetails")
  }
  return (

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
    </Pressable>
    /*
            <FlatList 
              data={menu} 
              renderItem={ ({item})=> <OrderList menu={item} />}
              showsVerticalScrollIndicator={false}*/
  )
}

export default PendingOrders

const styles = StyleSheet.create({
  restaurantContainer: {
    width: "75%",
    flexDirection: 'row',
    backgroundColor: "red",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    marginTop: 20
  }, 
  pedido: {
    flexDirection: 'row',
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "green",
    alignItems:"center"
  },
  pedido2:{
    flexDirection: 'row',
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    alignItems:"center"
  },

  arrow: {
    marginLeft: "auto",
    marginRight: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center"
  },
  image: {
    height: 80,
    aspectRatio: 1,
    marginBottom: 5,
    borderRadius: 25,
    alignSelf: "center"
  },
  Title: {
    fontSize: 15,
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
    marginLeft: 15,
    alignSelf: "center"
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
