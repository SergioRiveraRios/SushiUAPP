
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { restaurants } from '../../../assets/data/restaurants.json'
import menu from '../../../assets/data/menu.json'
import { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import * as SQLite from 'expo-sqlite';
const RestaurantItem = ({ menu, index }) => {
  const navigation = useNavigation()
  const route = useRoute()

  const db = SQLite.openDatabase('example.db')
  const [sushiList, sushiMenu] = useState([])
  const [entradasList, entradasMenu] = useState([])
  const [especialidadList, especialidadMenu] = useState([])
  const [bolasList, bolasMenu] = useState([])
  const [brochetasList, brochetasMenu] = useState([])
  const [coctelesList, coctelesMenu] = useState([])
  const getBrochetas2 =async()=>{
    await getBrochetas()
  }
  const getBrochetas = async () => {
     db.transaction(tx => {
      // sending 4 arguments in executeSql
      tx.executeSql(`SELECT * FROM MenuItem WHERE idCategoria='${1}'`, [],
        (txObj, result) => {
          brochetasMenu(result.rows._array),
          console.log(brochetasList)
        },
        (txObj, error) => console.log('Error ', error)
      )
    })
  }
  const getEspecialidad = () => {
    db.transaction(tx => {
      // sending 4 arguments in executeSql
      tx.executeSql(`SELECT * FROM MenuItem WHERE idCategoria='${2}'`, [],
        (txObj, result) => {
          especialidadMenu(result.rows._array)
        },
        (txObj, error) => console.log('Error ', error)
      )
    })
  }
  const getEntradas = () => {
    db.transaction(tx => {
      // sending 4 arguments in executeSql
      tx.executeSql(`SELECT * FROM MenuItem WHERE idCategoria='${3}'`, [],
        (txObj, result) => {
          entradasMenu(result.rows._array)
        },
        (txObj, error) => console.log('Error ', error)
      )
    })
  }
  const getBolas = () => {
    db.transaction(tx => {
      // sending 4 arguments in executeSql
      tx.executeSql(`SELECT * FROM MenuItem WHERE idCategoria='${4}'`, [],
        (txObj, result) => {
          bolasMenu(result.rows._array)
        },
        (txObj, error) => console.log('Error ', error)
      )
    })
  }
  const getCocteles = () => {
    db.transaction(tx => {
      // sending 4 arguments in executeSql
      tx.executeSql(`SELECT * FROM MenuItem WHERE idCategoria='${5}'`, [],
        (txObj, result) => {
          coctelesMenu(result.rows._array)
        },
        (txObj, error) => console.log('Error ', error)
      )
    })
  }

  useEffect(() => {
    /*DataStore.query(MenuItem,c=>c.categoriaID.eq("160ab474-d08d-4865-9c8d-79e1d080b429")).then((results) => sushiMenu(results))
    DataStore.query(MenuItem,c=>c.categoriaID.eq("7f3270db-6c0d-416f-8ffb-7a48c3b21921")).then((results) => especialidadMenu(results))
    DataStore.query(MenuItem,c=>c.categoriaID.eq("67230697-6b8d-4dd2-b7de-ac14055e0122")).then((results) => brochetasMenu(results))
    DataStore.query(MenuItem,c=>c.categoriaID.eq("21db12cb-1c18-4011-a1cf-307ff76267f1")).then((results) => bolasMenu(results))
    DataStore.query(MenuItem,c=>c.categoriaID.eq("d018a94d-a359-41ec-9b2f-adf5e5ff344e")).then((results) => entradasMenu(results))
    DataStore.query(MenuItem,c=>c.categoriaID.eq("ce475b91-f3ec-4532-8c91-83ca5805f5d9")).then((results) => coctelesMenu(results))
*/
  })


  const onPress = () => {
    switch (index) {
      case 0:
        getBrochetas2()
        navigation.navigate("SushiList", { id: brochetasList, menucat: menu })
        break;
      case 1:
        getEspecialidad()
        
        navigation.navigate("SushiList", { id: especialidadList, menucat: menu })
        break;
      case 2:
        getEntradas()
        navigation.navigate("SushiList", { id: entradasList, menucat: menu })
        break;
      case 3:
        getBolas()
        navigation.navigate("SushiList", { id: bolasList, menucat: menu })
        break;
      case 4:
        getCocteles()
        navigation.navigate("SushiList", { id: coctelesList, menucat: menu })
        break;
    }
    //console.log()
  }
  return (

    <Pressable onPress={onPress} style={styles.restaurantContainer}>
      <Image source={{ uri: menu?.categoriaImagen, }} style={styles.image} />
      <View style={styles.row}>
        <View>
          <Text style={styles.Title}>{menu?.categoriaNombre}</Text>
          <Text style={styles.subTitle}>Tiempo: 20min - 20min</Text>
        </View>
      </View>
    </Pressable>


  );
};

export default RestaurantItem
const styles = StyleSheet.create({
  restaurantContainer: {
    width: "100%",
    marginVertical: 10
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
    borderRadius: 7
  },
  Title: {
    fontSize: 20,
    fontFamily: "bold",
    marginVertical: 5
  },
  subTitle: {
    fontSize: 14,
    color: "grey"
  },
  row: {
    flexDirection: 'row',
    alignItems: "center"
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
});
