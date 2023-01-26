import { View, Text, StyleSheet, Image, Pressable, FlatList } from "react-native"
import { useRoute } from '@react-navigation/native';
import menu from '../../../assets/data/menu.json'

import { useNavigation } from "@react-navigation/native";
import DetailedOrder from "../../components/DetailedOrder";
const menus = menu[3]

const OrderDetails = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const id = route.params?.id

    return (
        <View style={styles.page}>
            <FlatList data={menus.dishes} renderItem={({ item }) => <DetailedOrder basketSushi={item} />} />
            <View style={styles.buttons}>
                <View style={styles.buttonAccept}>
                    <Text style={styles.buttonAdd}> Aceptar Pedido </Text>
                </View>
                <View style={styles.buttonDecline}>
                    <Text style={styles.buttonAdd}> Aceptar Pedido </Text>
                </View>
            </View>

        </View>
        /*<Pressable style={styles.restaurantContainer}>
            <View style={styles.row}>
                <View>
                    <Text style={styles.Title}>Pedido numero 12332</Text>
                    <Text style={styles.underTitle}>Cliente: Sergio Rivera</Text>
                    <Text style={styles.subTitle}>Tiempo de entrega - 14:15</Text>
                    <Text style={styles.subTitle}>Fecha de entrega - 14/02/23</Text>
                    <Text style={styles.subTotal}>Total: $12332</Text>
                </View>
            </View>
        </Pressable>*/
    )
}

export default OrderDetails

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingVertical: 30
    },
    restaurantContainer: {
        width: "100%",
        marginVertical: 10,
        flexDirection: 'row',
        marginLeft: 15
    },
    image: {
        height: 125,
        aspectRatio: 1,
        marginBottom: 5,
        borderRadius: 7
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
    },
    buttons:{
       flexDirection:'row',
       padding:15,
       marginHorizontal:5
    },
    buttonAccept: {
        width: "50%",
        backgroundColor: "green",
        padding: 20,
        alignItems: "center",
        marginTop: "auto",
        borderRadius: 25
    },
    buttonDecline: {
        width: "50%",
        backgroundColor: "red",
        padding: 20,
        alignItems: "center",
        marginTop: "auto",
        paddingHorizontal: 15,
        borderRadius: 25
    },
    buttonAdd: {
        color: "white",
        fontWeight: "600"
    },
})
