import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';

//import restaurant(Sushi)
import RestaurantItem from './src/components/RestaurantItem';


import HomeScreen from './src/screens/HomeScreen';

//Import restaurantDetail (SushiDetail)
import SushiList from  './src/screens/sushiList'

export default function App() {
  return (
    <View style={styles.container}>
      <SushiList />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center"
  },
});
