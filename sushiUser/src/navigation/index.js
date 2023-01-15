import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { AntDesign } from '@expo/vector-icons'; 
//Import all screens 
import HomeScreen from '../screens/HomeScreen'
import BasketScreen from '../screens/basketScreen'
import OrderDetails from '../screens/orderDetailes'
import SushiDetailScreen from '../screens/sushiDetailScreen'
import SushiList from '../screens/sushiList'
import ProfileScreen from '../screens/profileScreen';
import { TabActions } from '@react-navigation/native'

const Stack= createNativeStackNavigator()
const homeStack=createNativeStackNavigator()
const bottomTab=createMaterialBottomTabNavigator()

const  RootNavigator=()=>{
    
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="Home" component={HomeTabs}/>
        </Stack.Navigator>
    )
}
const HomeTabs=()=>{
    return(
        <bottomTab.Navigator>
            <bottomTab.Screen name='Inicio' component={HomeStackNavigator} options={{tabBarIcon:()=><AntDesign name="home" size={24} color="black" />}}/>
            <bottomTab.Screen name='Carrito' component={BasketScreen} options={{tabBarIcon:()=><AntDesign name="shoppingcart" size={24} color="black" />}}/>
            <bottomTab.Screen name='Perfil' component={ProfileScreen} options={{tabBarIcon:()=><AntDesign name="profile" size={24} color="black" />}}/>
        </bottomTab.Navigator>
    )
}
const HomeStackNavigator=()=>{
    return(
        <homeStack.Navigator  >
            <homeStack.Screen name="Home" component={HomeScreen}></homeStack.Screen>
            <homeStack.Screen name="OrderDetails" component={OrderDetails}></homeStack.Screen>
            <homeStack.Screen name="SushiDetailScreen" component={SushiDetailScreen}></homeStack.Screen>
            <homeStack.Screen name="SushiList" component={SushiList} screenOptions={{headerShown:false}}></homeStack.Screen>
            <homeStack.Screen name="BasketScreen" component={BasketScreen}></homeStack.Screen>
        </homeStack.Navigator>
    )
}
export default RootNavigator
