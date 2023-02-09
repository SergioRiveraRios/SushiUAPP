import { View, Text, StyleSheet, Image, Pressable } from "react-native"


const DetailedOrder = ({ basketSushi }) => {
    return (

        <View>
            <View style={styles.row}>
                <Text style={styles.quantity}>3x</Text>
                <Text style={styles.name}>{basketSushi.name}</Text>
                <Text style={styles.price}>${basketSushi.price}</Text>
            </View>

        </View>
    )
}

export default DetailedOrder

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 30,
        paddingLeft: 15
    },

    separator: {
        height: 1,
        backgroundColor: "#DCDCDC",
        marginVertical: 8,
        paddingLeft: 10
    },
    row: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10
    },
    quantity: {
        fontSize: 20,
        marginHorizontal: 20
    },
    price: {
        marginLeft: "auto",
        paddingRight: 5,
        fontWeight: "500"
    },
    tucarrito: {
        backgroundColor: "grey",
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 5
    },
    name: {
        marginLeft: 20
    },
    image: {
        height: 70,
        aspectRatio: 1,
        borderRadius: 7,
        paddingLeft: 5,
        justifyContent: "center",
        alignContent: "center",
    },
})