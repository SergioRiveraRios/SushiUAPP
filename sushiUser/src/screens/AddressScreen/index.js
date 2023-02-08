
import MapView, { Marker } from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Button, SafeAreaView, TextInput } from 'react-native';
import * as Location from 'expo-location';
import * as SQLite from 'expo-sqlite';
import { useRoute } from '@react-navigation/native';
const AddressScreen = () => {
    const db = SQLite.openDatabase('example.db')
    const route = useRoute()
    const id = route.params?.id
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [mapRegion, setmapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    useEffect(() => {
        getLocation()
        getCurrentUser()
    }, [])
    const getCurrentUser=()=>{
        db.transaction(tx => {
            tx.executeSql(`SELECT * FROM usuario WHERE cliente_Telefono='${id}'`, null,
                (txtObj, resulSet) => {
                    setCurrentUser(resulSet.rows._array)
                }
            )
        })
    }
    
    
    const getLocation = async () => {
        console.log(id)
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');

        }

        let location = await Location.getCurrentPositionAsync({});
        let address = await Location.reverseGeocodeAsync(location.coords)
        setmapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })
        setLocation(address[0].city+", "+address[0].district+", "+address[0].street+" #"+address[0].streetNumber+", C.P."+address[0].postalCode)
        console.log(mapRegion)
        console.log(address[0])
        console.log(location)
    }
    const getUser=()=>{
        console.log(currentUser[0].cliente_Telefono)
    }
    
    const getMarkerLocation=async (newCoord)=>{
        let address = await Location.reverseGeocodeAsync(newCoord)
        setLocation(address[0].city+", "+address[0].district+", "+address[0].street+" #"+address[0].streetNumber+", C.P."+address[0].postalCode)
    }
    const insertAddressUser=async()=>{
        let location = await Location.getCurrentPositionAsync({});
        let address = await Location.reverseGeocodeAsync(location.coords)
        db.transaction(tx => {
            tx.executeSql(`INSERT INTO direccion (direccionCiudad,DireccionColonia,direccionCalle,DireccionNum,direccionCP,cliente_Telefono) VALUES ('${address[0].city}','${address[0].district}','${address[0].street}','${address[0].streetNumber}','${address[0].postalCode}','${currentUser[0]?.cliente_Telefono}')`, null,
                (txtObj, resulSet) => {
                    setCurrentUser(resulSet.rows._array)
                    console.log("insertado")
                }
            )
        })
    }
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                region={mapRegion}>
                <Marker title='ola' coordinate={mapRegion} draggable onDragEnd={(e) => { getMarkerLocation(e.nativeEvent.coordinate),console.log('dragEnd',e.nativeEvent.coordinate ) }} />
            </MapView>
            <View>
                <Text>Ayudanos con tu direccion</Text>
                <SafeAreaView>
                    <Text style={styles.inputText}>Tu nombre:</Text>
                    <TextInput
                        style={styles.input}
                        numberOfLines={4}
                        multiline={true}
                        onChangeText={setLocation}
                        value={location}
                    />
                </SafeAreaView>
            </View>
            <Button title='Guardar' onPress={insertAddressUser}></Button>
        </View>
    );
}
export default AddressScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '70%',
    },input: {
        height: 60,
        margin: 12,
        borderWidth: 1,
        borderColor: "lightgrey",
        padding: 10,
        borderRadius: 6,
        textAlignVertical: "top"
    },
});