import { StyleSheet, FlatList, View, Text, Item, Button } from 'react-native';
import RestaurantItem from '../../../src/components/RestaurantItem/index'
import { useEffect, useState } from 'react';

import { useRoute } from '@react-navigation/native';
import { readTable } from "../../components/databaseQuery/index";

import * as SQLite from 'expo-sqlite';
const HomeScreen = () => {
  const [menu, setMenu] = useState([])
  const db = SQLite.openDatabase('example.db')
  useEffect(() => {
    //DataStore.query(Categoria).then((results) => setMenu(results))
    readTable()
  })
  const readTable =  () => {
    let x = []
    db.transaction(tx => {
        // sending 4 arguments in executeSql
        tx.executeSql('SELECT * FROM categoria ', [],
            (txObj, result) => {setMenu(result.rows._array)
            },
            (txObj, error) => console.log('Error ', error)
        )
    })
}
  
  return (

    <FlatList style={styles.page}
      data={menu}
      renderItem={({ item, index }) => <RestaurantItem menu={item} index={index} />}
    />

  );
}
export default HomeScreen


const styles = StyleSheet.create({
  page: {
    padding: 10
  },
});