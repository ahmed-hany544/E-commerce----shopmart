
import { getUserToken } from "@/app/Helpers/getUserToken"
import { AddressesResponse, CartResponse } from "@/interfaces"
import { NextResponse } from "next/server"

export async function GET(){
    const token=await getUserToken()
    const response=await fetch(`${process.env.API_URL}/addresses`,{
        headers:{
            token:token!
        }
    })
    const data: AddressesResponse =await response.json()
        return NextResponse.json(data)
}