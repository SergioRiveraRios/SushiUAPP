
import { StyleSheet, FlatList, View, Text, Item } from 'react-native';
import RestaurantItem from '../../../src/components/RestaurantItem/index'
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { ItemCategoria } from '../../models';
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
