import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Orders from '../screens/Orders'
import * as React from 'react';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import NewOrders from '../screens/NewOrders';
import PendingOrders from '../screens/PendingOrders';
import OrderDetails from '../screens/OrderDetails';
import ProfileScreen from '../screens/Profile';

const NewOrderStack = createNativeStackNavigator()
const PendingOrdersStack = createNativeStackNavigator()
const HistoryOrdersStack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()



const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView screenOptions={{ headerStyle: { backgroundColor: "orange" } }} {...props}>
      <Image source={{ uri: 'https://images-uan.s3.us-east-2.amazonaws.com/imagenessushi/sushiuanlogo.png' }} style={styles.image} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}
export function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Pedidos Nuevos" component={NewOrderStacks} options={{ drawerIcon: () => <AntDesign name="shoppingcart" size={24} color="black" /> }} />
      <Drawer.Screen name="Pedidos Pendientes" component={PendingOrdersStacks} options={{ drawerIcon: () => <MaterialIcons name="pending-actions" size={24} color="black" /> }} />
      <Drawer.Screen name="Historial Pedidos" component={HistoryOrdersStacks} options={{ drawerIcon: () => <AntDesign name="bars" size={24} color="black" /> }} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} options={{ drawerIcon: () => <AntDesign name="user" size={24} color="black" /> }} />
    </Drawer.Navigator>)
}
//export default RootNavigator
const NewOrderStacks = () => {
  return (
    <NewOrderStack.Navigator>
      <NewOrderStack.Screen name='New Orders' component={NewOrders}></NewOrderStack.Screen>
      <NewOrderStack.Screen name='OrderDetails' component={OrderDetails}></NewOrderStack.Screen>
    </NewOrderStack.Navigator>
  )
}
const PendingOrdersStacks = () => {
  return (
    <PendingOrdersStack.Navigator>
      <PendingOrdersStack.Screen name='Pending Orders' component={PendingOrders}></PendingOrdersStack.Screen>
      <PendingOrdersStack.Screen name='OrderDetails' component={OrderDetails}></PendingOrdersStack.Screen>
    </PendingOrdersStack.Navigator>
  )
}

const HistoryOrdersStacks = () => {
  return (
    <HistoryOrdersStack.Navigator>
      <HistoryOrdersStack.Screen name='History Orders' component={Orders}></HistoryOrdersStack.Screen>
      <HistoryOrdersStack.Screen name='OrderDetails' component={OrderDetails}></HistoryOrdersStack.Screen>
    </HistoryOrdersStack.Navigator>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 50
  },
  image: {
    aspectRatio: 9 / 3,
    marginBottom: 5,
    borderRadius: 7
  },
});