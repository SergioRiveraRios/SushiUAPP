import { createContext, useState, useEffect, useContext } from "react";
import {Alert} from 'react-native'
import { DataStore } from "aws-amplify";
import { useAuthContext } from './AuthContext';
const BasketContext = createContext({});

const BasketContextProvider = ({ children }) => {
    const { dbUser } = useAuthContext();

    const [basket, setBasket] = useState(null);
    const [basketDishes, setBasketDishes] = useState([]);

    useEffect(() => {
        //DataStore.query(Carrito,(c)=>c.usuarioID.eq(dbUser.id)).then((result)=>setBasket(result[0]))

        //DataStore.query(Carrito,(b)=>b.usuarioID("eq",dbUser.id)).then((carrito)=>setBasket(carrito[0]))
       
    }, [dbUser])

    /*const addDishToBasket = async (dish, quantity) => {
        console.log("iniciado")
        console.log(dbUser)
        const carritito = await 
        setBasket(carritito)
        return carritito
        
    }*/

    const  addtoBasketItem = async (dish, quantity) => {
        try{
            console.log("Carrito",basket)
            
            console.log(basket.id, dish.id, quantity)
            const nuevo = DataStore.save(new OrdenCarrito({ MenuItem: dish, Item_Cantidad: quantity, carritoID: basket.id }))
            console.log(nuevo)
        }
       
        catch (e) { Alert.alert("error", e.message) }
    }
    return (
        <BasketContext.Provider
        value={{
            addtoBasketItem,
          basket,
          basketDishes,setBasket,setBasketDishes
        }}
      >
        {children}
      </BasketContext.Provider>
    )
}

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext);