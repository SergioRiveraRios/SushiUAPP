
import { StyleSheet, FlatList, View, Text, Item } from 'react-native';
import RestaurantItem from '../../../src/components/RestaurantItem/index'
import restaurants from '../../../assets/data/restaurants.json'
import menu from '../../../assets/data/menu.json'
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { MenuItem } from '../../models';
import { ItemCategoria } from '../../models';
//Change Restaurant Item for Menu Items


const HomeScreen = () => {
  const [menu, setMenu] = useState([])
  useEffect(() => {
    DataStore.query(ItemCategoria).then((results) => setMenu(results))
  })
  
  return (
    <View style={styles.page}>
      <FlatList 
          data={menu} 
          renderItem={ ({item,index})=> <RestaurantItem menu={item} index={index} />}
          showsVerticalScrollIndicator={false}
      />
    </View>

  );
}
export default HomeScreen


const styles = StyleSheet.create({
  page: {
    padding: 10
  },
});
