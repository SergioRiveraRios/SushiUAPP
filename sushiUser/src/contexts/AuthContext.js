import { Auth, DataStore } from 'aws-amplify'
import {createContext,useContext,useEffect,useState} from 'react'
import { Usuario } from '../models'

const AuthContext =createContext({})
const AuthContextProvider=({children})=>{

    const [authUser,setAuthUser]=useState(null)
    const [dbUser,setdbUser]=useState(null)
    const sub =authUser?.attributes?.sub
    useEffect(()=>{
        Auth.currentAuthenticatedUser({bypassCache:true}).then(setAuthUser)
    },[])

    useEffect(()=>{
        DataStore.query(Usuario,user=>user.sub.eq(sub)).then((users)=>setdbUser(users[0]))
    },[sub])
    
    return(
        <AuthContext.Provider value={{authUser,dbUser,sub,setdbUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
export const useAuthContext = ()=> useContext(AuthContext)