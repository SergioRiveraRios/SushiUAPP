import { View, Text, StyleSheet, Image, Pressable, FlatList } from "react-native"
import { useRoute } from '@react-navigation/native';
import menu from '../../../assets/data/menu.json'

import { useNavigation } from "@react-navigation/native";
import DetailedOrder from '../../components/DetailedOrder'
const menus = menu[3]

const OrderDetails = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const id = route.params?.id

    return (
        <View style={styles.page}>
            <View >
                <View style={styles.row}>
                    <Text style={styles.Title}>Sergio Rivera</Text>
                    <Text style={styles.subTitle}>#DF32343</Text>
                </View>
            </View>
            <View style={styles.separator} />
            <FlatList data={menus.dishes} renderItem={({ item }) => <DetailedOrder basketSushi={item} />} />
            <View style={styles.separator} />
            <View style={styles.total}>
                <View >
                    <View style={styles.row}>
                        <Text style={styles.Title}>Total:</Text>
                        <Text style={styles.subTitle}>$3231</Text>
                    </View>
                </View>
            </View>
            <View style={styles.separator} />
            <View style={styles.total}>
                <View >
                    <View style={styles.row}>
                        <Text style={styles.Title}>Direccion:</Text>
                        <Text style={styles.subTitle}>Helechos #130 Fracc. Villas de Zapopan C.P. 63036</Text>
                    </View>
                </View>
            </View>
            <View style={styles.separator} />

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
        paddingVertical: 10
    },
    row: {
        marginLeft: 15,
        flexDirection: "row",
        justifyContent: "center"
    },
    total: {    
        marginTop:"auto"
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
    },
    underTitle: {
        fontSize: 15,
    },
    subTitle: {
        fontSize: 15,
        color: "grey",
        paddingTop: 4,
        paddingLeft: 10
    },
    subTotal: {
        fontSize: 20,
        marginVertical: 15
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
    buttons: {
        flexDirection: 'row',
        padding: 15,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:"center",
        
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:"center",
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
        borderRadius: 25,
        alignSelf:"center",
        justifyContent:"center",
        
    },
    buttonAdd: {
        color: "white",
        fontWeight: "600",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:"center",
    },
    separator: {
        height: 1,
        backgroundColor: "#DCDCDC",
        marginVertical: 8,
        marginTop:20
    },
})
