
import { StyleSheet,FlatList, View } from 'react-native';
import RestaurantItem from '../../../src/components/RestaurantItem/index'
import restaurants from '../../../assets/data/restaurants.json'
import menu from '../../../assets/data/menu.json'

//Change Restaurant Item for Menu Items
const HomeScreen=()=> {
  return (
    <View style={styles.page}>
      <FlatList 
          data={menu} 
          renderItem={ ({item})=> <RestaurantItem menu={item} />}
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
