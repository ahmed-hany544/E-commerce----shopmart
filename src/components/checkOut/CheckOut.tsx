'use client'
import React, { useContext, useRef } from 'react'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '@radix-ui/react-dropdown-menu'
import { Input } from '../ui/input'
import { getUserToken } from '@/app/Helpers/getUserToken'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { CartContext } from '../cartContext/CartContext'

export default function CheckOut({cartId}:{cartId:string}) {
    let detailsInput=useRef<HTMLInputElement|null>(null)
     let cityInput=useRef<HTMLInputElement|null>(null)
      let phoneInput=useRef<HTMLInputElement|null>(null)
      const {setCartData}=useContext(CartContext)
      const router= useRouter()
    
 async function checkOutSession(){
  
const shippingAddress={
  details:detailsInput.current?.value,
  phone:phoneInput.current?.value,
  city:cityInput.current?.value
}
const token=await getUserToken()
const response=await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,{
  method:"POST",
  body:JSON.stringify({shippingAddress}),
  headers:{
        token:token! ,
        'content-type':'application/json'
      }
})
const data=await response.json()
console.log(data)
if(data.status=='success'){
    window.location.href=data.session.url
}
  }
async function checkCash() {
        const token = await getUserToken()

        const shippingAddress = {
            details: detailsInput.current?.value,
            phone: phoneInput.current?.value,
            city: cityInput.current?.value
        }
        const response = await fetch('https://ecommerce.routemisr.com/api/v1/orders/' + cartId, {
            method: 'POST',
            body: JSON.stringify({ shippingAddress }),
            headers: {
                token:token! ,
                
                'content-type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data);
        
        if (data.status == "success") {         
            toast.success('ordered is successfully')
            router.push('/allorders')
            setCartData(null)
            
          
            
        }

    }




  return (
    <>
    
<Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className='w-full text-lg mt-4' variant="outline">Proceed to Checkout</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Shipping Address</DialogTitle>
            <DialogDescription>
              Make Sure that your entered the correct address
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label>city</Label>
              <Input ref={cityInput} id="city"  />
            </div>
            <div className="grid gap-3">
              <Label>details</Label>
              <Input ref={detailsInput} id="details"  />
            </div>
            <div className="grid gap-3">
              <Label>phone</Label>
              <Input ref={phoneInput} id="phone"  />
            </div>
  
           
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={()=>checkOutSession()} type="submit">Visa</Button>
            <Button onClick={()=>checkCash()} type="submit">Cash</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>

    </>
  )
}
