import { StyleSheet, FlatList, View, Text, Item, Button } from 'react-native';
import RestaurantItem from '../../../src/components/RestaurantItem/index'
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { Categoria } from '../../models';

import { createTable} from "../../components/databaseQuery";
const HomeScreen = () => {

  const [menu, setMenu] = useState([])
  useEffect(() => {
    DataStore.query(Categoria).then((results) => setMenu(results))
  })

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