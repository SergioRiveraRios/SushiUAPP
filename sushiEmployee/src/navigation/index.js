import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Orders from '../screens/Orders'
import OrderDetails from '../screens/OrderDetails'
const Stack= createNativeStackNavigator()

const RootNavigator=()=>{
    
    return(
        <Stack.Navigator  >
            <Stack.Screen name="Home" component={Orders}/>
            <Stack.Screen name="OrderDetails" component={OrderDetails}/>
        </Stack.Navigator>
    )
}

export default RootNavigator