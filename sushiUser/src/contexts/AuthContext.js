import {  DataStore } from '@aws-amplify/datastore'
import {Auth} from 'aws-amplify'
import {createContext,useContext,useEffect,useState} from 'react'
import { Usuario } from '../models'

const AuthContext =createContext({})
const AuthContextProvider=({children})=>{

    const [authUser,setAuthUser]=useState(null)
    const [dbUser,setdbUser]=useState(null)
    const [usuario,setUsuario]=useState([])
    const sub =authUser?.attributes?.sub

    const fetchUser=async()=>{
        const currentUser= await DataStore.query(Usuario)
        setUsuario(currentUser)
    }
    useEffect(()=>{
        Auth.currentAuthenticatedUser({bypassCache:true}).then(setAuthUser)
    },[])
    
    useEffect(()=>{
        const subscrip= DataStore.observe(Usuario).subscribe(()=>fetchUser())
        DataStore.query(Usuario,(user)=>user.sub.eq(sub)).then((users)=>setdbUser(users[0]))
    },[authUser])
    return(
        <AuthContext.Provider value={{authUser,dbUser,sub,setdbUser,usuario,setUsuario}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
export const useAuthContext = ()=> useContext(AuthContext)