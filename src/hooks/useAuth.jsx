import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"



export const useAuth = () =>{
    return useContext(ShopContext)
}