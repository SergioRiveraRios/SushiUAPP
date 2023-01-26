import { View, Text, StyleSheet, Image, Pressable } from "react-native"
import { useNavigation } from '@react-navigation/native';

const OrderList = ({ menu }) => {

    const navigation = useNavigation()
    const OnPress = () => {
        navigation.navigate("OrderDetails")
    }
    return (
        <Pressable onPress={OnPress} style={styles.restaurantContainer}>
            <Image source={{ uri: 'https://images-uan.s3.us-east-2.amazonaws.com/imagenessushi/default.jpg' }} style={styles.image} />
            <View style={styles.row}>
                <View>
                    <Text >{menu.name}</Text>
                    <Text >Cliente: Sergio Rivera</Text>
                    <Text>Tiempo de entrega - 14:15</Text>
                    <Text>Fecha de entrega - 14/02/23</Text>
                    <Text>Total: $12332</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default OrderList


const styles = StyleSheet.create({
    restaurantContainer: {
        width: "100%",
        marginVertical: 10,
        flexDirection: 'row',
        marginLeft: 15,
        borderColor: "green",
        border: 1
    },
    image: {
        height: 100,
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
    }
})
