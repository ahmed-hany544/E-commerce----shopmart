import React, { useContext } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { jwtDecode } from "jwt-decode";
import { getUserToken } from '@/app/Helpers/getUserToken'
import { Order } from '@/interfaces'
import Image from 'next/image'
import OrderItemsDropdown from '@/components/orderItems/orderItems'
import { CartContext } from '@/components/cartContext/CartContext'
import { console } from 'inspector';
export default async function AllOrders() {
  const token= await getUserToken()
  if(!token){
    return <p>Please login first</p>
  }
  const decoded:any= jwtDecode(token);
  const userId= decoded.id
  console.log(userId)
  const response= await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`,{
    headers:{
      token:token!
      
    }
  })
  let data: Order[]  =await response.json()
  console.log(data)
data=data.reverse()
  
  return (<><h1 className='text-3xl font-bold tracking-tight mb-8 mt-8'>AllOrders</h1>
  {data?.map((order)=> <div className='flex flex-col ' key={order._id}>
<Card className="w-full mb-5">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Order # {order.id}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-2 text-sm">
        <p>
          <span className="font-medium text-accent-foreground">Order Date:{new Date(order.createdAt).toLocaleString('en-US', {
  month: 'numeric',   
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',    
  minute: '2-digit',
  second: '2-digit',
  hour12: true
})}</span>
          
        </p>

        <p>
          <span className="font-medium text-accent-foreground">Payment: {order.paymentMethodType} <span className='text-green-500'>{order.isPaid? "(paid)":"(notpaid)"}</span></span>
          <span className= "text-green-600 font-medium">
        
          </span>
        </p>

        <p>
          <span className="font-medium">Delivered: <span className='text-orange-300'>{order.isDelivered? "Yes":"No"}</span></span>
        
        </p>

        <p className="text-base font-semibold">
          Total: {order.totalOrderPrice}  EGP
        </p>

        <div className="pt-3">
          <p className="font-medium">Shipping Address</p>
          <p className="text-muted-foreground">Address:{order.shippingAddress?.details},{order.shippingAddress?.city}</p>
          <p className="text-muted-foreground">Phone:{order.shippingAddress?.phone} </p>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
      
        <OrderItemsDropdown order={order.cartItems} />
        

        <span className="text-xs text-muted-foreground">
          Last updated:{new Date(order.createdAt).toLocaleString('en-US', {
  month: 'numeric',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',    
  minute: '2-digit',
  second: '2-digit',
  hour12: true
})} 
  

        </span>
      </CardFooter>
    </Card>
  
  </div>
  
  )}
  
  </>
    
  )
}