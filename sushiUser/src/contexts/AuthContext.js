import {  DataStore } from '@aws-amplify/datastore'
import {Auth} from 'aws-amplify'
import {createContext,useContext,useEffect,useState} from 'react'
import { Usuario } from '../models'
import {readTable,createTable,createCategoria,createMenuItem} from '../components/databaseQuery/index'
const AuthContext =createContext({})
const AuthContextProvider=({children})=>{

    const [authUser,setAuthUser]=useState(null)
    const [dbUser,setdbUser]=useState(null)
    const [user,setUsuario]=useState(null)

    
    useEffect(()=>{
        readTable()
        //Brochetas", "idCategoria": 1
        //Rollos de especialidad", "idCategoria": 2
        //"categoriaNombre": "Entradas", "idCategoria": 3
        //"categoriaNombre": "Bolas de Fuego", "idCategoria": 4
        //"categoriaNombre": "Cocteles", "idCategoria": 5}
        //createMenuItem = (menuItemNombre, menuItemPrecio, menuItemRating, menuItemImagen,menuItemDentro,menuItemFuera,categoriaID)
    })
    
    return(
        <AuthContext.Provider value={{user,setUsuario}}> 
            {children}
        </AuthContext.Provider>
    )

}
export default AuthContextProvider
export const useAuthContext = ()=> useContext(AuthContext)