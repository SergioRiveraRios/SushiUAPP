import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NewOrders from './src/screens/NewOrders';
import Orders from './src/screens/Orders';
import {DrawerNavigator} from './src/navigation';
import {NavigationContainer} from '@react-navigation/native'
export default function App() {
  return (
    <NavigationContainer>
        <DrawerNavigator/>
    </NavigationContainer>
    //<View style={styles.container}>
    //  <Orders/>
    //  <StatusBar style="auto" />
   // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
