import { createContext, useContext, useEffect, useState } from 'react'
import { DataStore } from "aws-amplify";
import { useAuthContext } from './AuthContext';
import { Carrito } from '../models'
import { OrdenCarrito } from '../models';
const BasketContext = createContext({})

const BasketContextProvider = ({ children }) => {
    const { dbUser } = useAuthContext();

    const [basket, setBasket] = useState(null);
    const [basketOrder, setbasketOrder] = useState(null)

    useEffect(() => {
        console.log(dbUser)
        DataStore.query(Carrito, (c) => c.usuarioID.eq(dbUser.id)).then((baskets) => setBasket(baskets[0]))
        DataStore.query(Carrito, (c) => c.usuarioID.eq(dbUser.id)).then((baskets) => console.log(baskets[0]))
        const carritos=DataStore.query(OrdenCarrito)
        console.log(carritos)
    }, [dbUser])

    /*const addDishToBasket = async (dish, quantity) => {
        console.log("iniciado")
        console.log(dbUser)
        const carritito = await 
        setBasket(carritito)
        return carritito
        
    }*/


    const addtoBasketItem = async (dish, quantity) => {


        //let theBasket = basket || (await addDishToBasket(dish,quantity))
        console.log(basket, dish, quantity)
        const nuevo = await DataStore.save(new OrdenCarrito({ Item_id: dish, Item_Cantidad: parseInt(quantity), carritoID: basket.id }))
        console.log(nuevo)
        console.log("listo")

    }
    return (
        <BasketContext.Provider value={{ basket, setBasket, addtoBasketItem, setbasketOrder, basketOrder }}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext);