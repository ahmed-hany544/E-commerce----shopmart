'use client'
import { getUserToken } from "@/app/Helpers/getUserToken";
import {  AddressesResponse, WishListResponse } from "@/interfaces";
import { useSession } from "next-auth/react";
import { createContext, ReactNode, useEffect, useState } from "react";

export const AddressContext =createContext<{
    addressData : AddressesResponse|null,
        setAddressData:(value: AddressesResponse | null)=>void,
        isLoading:boolean,
        setIsLoading:(value:boolean)=>void,
        getAddresses:()=>void,
        
}>({
    addressData:null,
        setAddressData:()=>{ },
        isLoading:false,
        setIsLoading:()=>{},
          getAddresses:()=>{},
})
export default function AddressContextProvider({children}:{children: ReactNode}){
    const [isLoading, setIsLoading] = useState(false)
    const [addressData, setAddressData] = useState<AddressesResponse | null>(null)
    const session =useSession()
       
        async function getAddresses() {
             setIsLoading(true)
    const token= await getUserToken()
     /**const response=await fetch('http://localhost:3000/api/get-address')*/
     const response=await fetch('/api/get-address')
   const data: AddressesResponse=await response.json()
    setAddressData(data)
    console.log(data)
    
    setIsLoading(false)
}
useEffect (()=>{
getAddresses()
},[])
    
return <AddressContext.Provider value={{addressData,setAddressData,setIsLoading,isLoading,getAddresses}}>
{children}
</AddressContext.Provider>
}