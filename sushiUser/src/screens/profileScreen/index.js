import { View, Text, StyleSheet, Image } from "react-native"


import restarurants from '.././../../assets/data/restaurants.json'
const restarurant = restarurants[0]
const ProfileScreen = () => {
    return (
        <View>
            <View style={styles.profileContainer}>
                {restarurant.image && (<Image source={{ uri: restarurant.image }} style={styles.image} />)}
                <Text>Sergio Rivera Rios</Text>
            </View>

            <View style={styles.separator} />
            <View style={styles.row}>
                
                <View style={styles.tucarrito}>
                    <Text>1</Text>
                </View>
                <Text>{restarurant.name}</Text>
                <Text style={styles.price}>{restarurant.rating}</Text>
            </View>
            <View style={styles.row}>
                
                <View style={styles.tucarrito}>
                    <Text>1</Text>
                </View>
                <Text>{restarurant.name}</Text>
                <Text style={styles.price}>{restarurant.rating}</Text>
            </View>
            <View style={styles.row}>
                
                <View style={styles.tucarrito}>
                    <Text>1</Text>
                </View>
                <Text>{restarurant.name}</Text>
                <Text style={styles.price}>{restarurant.rating}</Text>
            </View>
            <View style={styles.separator} />
        </View>
        
    )
}

export default ProfileScreen
const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        alignItems: "center"
    },
    image: {
        height: 150,
        aspectRatio: 1,
        borderRadius: 7,
        paddingLeft: 5,
        marginTop:20,
        justifyContent: "center",
        alignContent: "center",
    },
    separator: {
        height: 1,
        backgroundColor: "#DCDCDC",
        marginVertical: 8
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40,
        paddingLeft: 15,
        paddingRight: 15
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 20
    },
    price: {
        marginLeft: "auto",
        paddingRight: 5
    },
    tucarrito: {
        backgroundColor: "grey",
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 5
    },
})