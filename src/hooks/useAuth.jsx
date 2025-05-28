import { useContext } from "react"
import { shopContext } from "../Context/ShopContext"


export const useAuth = () =>{
    return useContext(shopContext)
}