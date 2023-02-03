import { createContext, useState, useEffect, useContext } from "react";
import {Alert} from 'react-native'
import { DataStore } from "aws-amplify";
import { useAuthContext } from './AuthContext';
const BasketContext = createContext({});

const BasketContextProvider = ({ children }) => {
    const { user,setUsuario } = useAuthContext();

    const [basket, setBasket] = useState(null);
    const [basketDishes, setBasketDishes] = useState([]);

    useEffect(() => {
        //DataStore.query(Carrito,(c)=>c.usuarioID.eq(dbUser.id)).then((result)=>setBasket(result[0]))

        //DataStore.query(Carrito,(b)=>b.usuarioID("eq",dbUser.id)).then((carrito)=>setBasket(carrito[0]))
       
    }, [dbUser])
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