import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { AntDesign } from '@expo/vector-icons';
//Import all screens 
import HomeScreen from '../screens/HomeScreen'
import BasketScreen from '../screens/basketScreen'
import OrderDetails from '../screens/orderDetailes'
import SushiDetailScreen from '../screens/sushiDetailScreen'
import SushiList from '../screens/sushiList'
import ProfileScreen from '../screens/profileScreen';
import AccountScreen from '../screens/AccountScreen'
import newUserAccount from '../screens/newUserScreen';
import LoginScreen from '../screens/loginScreen'
import DirectionScreen from '../screens/AddressScreen';
const Stack = createNativeStackNavigator()
const homeStack = createNativeStackNavigator()
const ProfileStack = createNativeStackNavigator()
const bottomTab = createMaterialBottomTabNavigator()

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name ='Login' component={LoginScreen}/>
            <Stack.Screen name ='Home' component={HomeTabs}/>
            <Stack.Screen name ='Maps' component={DirectionScreen}/>
            <Stack.Screen name ='NewAccount' component={newUserAccount}/>
        </Stack.Navigator>
    )
}
const HomeTabs = () => {
    return (
        <bottomTab.Navigator>
            <bottomTab.Screen name='Inicio' component={HomeStackNavigator} options={{ tabBarIcon: () => <AntDesign name="home" size={24} color="black" /> }} />
            <bottomTab.Screen name='Carrito' component={BasketScreen} options={{ headerTitle:"Tu carrito", tabBarIcon: () => <AntDesign name="shoppingcart" size={24} color="black" /> }} />
            <bottomTab.Screen name='Profile ' component={ProfileStackNavigator} options={{ tabBarIcon: () => <AntDesign name="profile" size={24} color="black" /> }} />
        </bottomTab.Navigator>
    )
}
const HomeStackNavigator = () => {
    return (
        <homeStack.Navigator  >
            <homeStack.Screen name="Home" component={HomeScreen} screenOptions={{ headerBackButtonMenuEnabled: false }}options={{headerBackButtonMenuEnabled:false}}></homeStack.Screen>
            <homeStack.Screen name="OrderDetails" component={OrderDetails}></homeStack.Screen>
            <homeStack.Screen name="SushiDetailScreen" component={SushiDetailScreen} options={{headerTitle:"Platillo detalle"}} ></homeStack.Screen>
            <homeStack.Screen name="SushiList" component={SushiList} screenOptions={{ headerShown: false }} options={{
                headerTitle: "Menu"

            }}></homeStack.Screen>
            <homeStack.Screen name="BasketScreen" component={BasketScreen}  options={{headerTitle:"Tu Carrito"}}></homeStack.Screen>
        </homeStack.Navigator>
    )
}
const ProfileStackNavigator = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name='Perfil' component={ProfileScreen}></ProfileStack.Screen>
            <ProfileStack.Screen name='Account' component={AccountScreen}></ProfileStack.Screen>
        </ProfileStack.Navigator>
    )
}
export default RootNavigator
