'use client'
import { getUserToken } from "@/app/Helpers/getUserToken";
import { WishListResponse } from "@/interfaces";
import { createContext, ReactNode, useEffect, useState } from "react";

export const WishListContext =createContext<{
    wishListData : WishListResponse|null,
        setWishListData:(value: WishListResponse | null)=>void,
        isLoading:boolean,
        setIsLoading:(value:boolean)=>void,
        getWishList:()=>void,
        
}>({
        wishListData:null,
        setWishListData:()=>{ },
        isLoading:false,
        setIsLoading:()=>{},
          getWishList:()=>{},
})
export default function WishListContextProvider({children}:{children: ReactNode}){
    const [isLoading, setIsLoading] = useState(false)
    const [wishListData, setWishListData] = useState<WishListResponse | null>(null)
    async function getWishList(){
        setIsLoading(true)
        /**const response=await fetch('http://localhost:3000/api/get-wishList')*/
        const response=await fetch('/api/get-wishList')
   const data:WishListResponse=await response.json()
    setWishListData(data)
    console.log(data)
    setIsLoading(false)
}
useEffect (()=>{
getWishList()
},[])
    
return <WishListContext.Provider value={{wishListData,setWishListData,setIsLoading,isLoading,getWishList}}>
{children}
</WishListContext.Provider>
}