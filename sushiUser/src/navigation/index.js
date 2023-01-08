import {createNativeStackNavigator} from '@react-navigation/native-stack'

//Import all screens 
import HomeScreen from '../screens/HomeScreen'
import BasketScreen from '../screens/basketScreen'
import OrderDetails from '../screens/orderDetailes'
import SushiDetailScreen from '../screens/sushiDetailScreen'
import SushiList from '../screens/sushiList'

const Stack= createNativeStackNavigator()

const  RootNavigator=()=>{
    return(
        <Stack.Navigator initialRouteName='Sushi'>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Sushi" component={SushiDetailScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default RootNavigator