import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'


const bottomTab=createMaterialBottomTabNavigator()

const HomeTabs=()=>{
    return(
        <bottomTab.Navigator>
            <bottomTab.Screen name='Inicio' component={HomeStackNavigator} options={{tabBarIcon:()=><AntDesign name="home" size={24} color="black" />}}/>
            <bottomTab.Screen name='Carrito' component={BasketScreen} options={{tabBarIcon:()=><AntDesign name="shoppingcart" size={24} color="black" />}}/>
            <bottomTab.Screen name='Perfil' component={ProfileScreen} options={{tabBarIcon:()=><AntDesign name="profile" size={24} color="black" />}}/>
        </bottomTab.Navigator>
    )
}

export default HomeTabs