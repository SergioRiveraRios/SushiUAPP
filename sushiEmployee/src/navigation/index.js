import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Orders from '../screens/Orders'
import * as React from 'react';
const Stack= createNativeStackNavigator()
const Drawer=createDrawerNavigator()
import { AntDesign } from '@expo/vector-icons';

import { StyleSheet, Text, View, FlatList,Image } from 'react-native';
import NewOrders from '../screens/NewOrders';

const CustomDrawer=(props)=>{
    return(
        <DrawerContentScrollView screenOptions={{headerStyle:{ backgroundColor:"orange"}}} {...props}>
            <Image source={{uri:'https://images-uan.s3.us-east-2.amazonaws.com/imagenessushi/sushiuanlogo.png'}} style={styles.image}/>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}
export function DrawerNavigator(){
    return(
    <Drawer.Navigator  drawerContent={(props)=><CustomDrawer {...props}/> }>
        <Drawer.Screen name="Pedidos" component={NewOrders} options={{drawerIcon:()=><AntDesign name="shoppingcart" size={24} color="black" />}} />
        <Drawer.Screen name="Historial de pedidos" component={Orders} options={{drawerIcon:()=><AntDesign name="bars" size={24} color="black" />}}/>
        <Drawer.Screen name="Perfil" component={Orders} options={{drawerIcon:()=><AntDesign name="user" size={24} color="black" />}}/>
    </Drawer.Navigator>)
}
//export default RootNavigator

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    fontSize:50
  },
  image:{
    aspectRatio: 9/3,
    marginBottom:5,
    borderRadius:7
  },
});