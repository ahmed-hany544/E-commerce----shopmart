'use client'
import React,{useContext, useState} from 'react'
import { CardFooter } from '../ui/card'
import { HeartIcon, Loader, ShoppingBagIcon, ShoppingCart } from 'lucide-react'
import { Button } from '../ui/button'
import toast from 'react-hot-toast'
import { CartContext } from '../cartContext/CartContext'
import { addToCartAction } from '@/app/(pages)/products/_action/addToCart.action'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import AddToWishlist from '../addToWishList/AddToWishList'
/***/
export default function AddToCart({productId}:{productId:string}) {
  let{getCart,setCartData}=useContext(CartContext)
    const [isLoading, setIsLoading] = useState(false)
    const session=useSession()
    const router= useRouter()
async function addProductToCart(){
  if(session.status =='authenticated'){
 setIsLoading(true)
  const data=await addToCartAction(productId)
    data.status=='success' && toast.success('product addaed successfully')
   //await getCart()
setCartData(data)
    console.log(data)
      setIsLoading(false)  
  }else{
    router.push('/login')

  }
   
    }


  return (
    <>
    <CardFooter className='gap-2'>
    <Button onClick={addProductToCart} className='grow cursor-pointer'>Add to cart{isLoading?<Loader className='animate-spin'/>:<ShoppingCart/>}</Button>
    <AddToWishlist productId={productId} />
  </CardFooter>
    
    </>
  )
}
