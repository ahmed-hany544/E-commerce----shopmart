'use client'

import { Heart, HeartIcon, Loader } from 'lucide-react'
import toast from 'react-hot-toast'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { getUserToken } from '@/app/Helpers/getUserToken'
import { useContext, useState } from 'react'
import { WishListContext } from '../wishListContext/WishListContext'
import { addToWishListAction } from '@/app/(pages)/products/_action/addToWishList.action'


export default function AddToWishlist({productId}:{ productId:string}) {
  const [isLoading, setIsLoading] = useState(false)
  const{setWishListData,getWishList}=useContext(WishListContext)
  async function addToProductToWishList(){
    setIsLoading(true)
    const data=await addToWishListAction(productId)
    data.status === 'success' && toast.success('Product added to wishlist ❤️')
console.log(data)
await getWishList()
    setIsLoading(false)
  }
  return (<>
  {isLoading? <Loader className='animate-spin'/>  :<HeartIcon
      onClick={addToProductToWishList}
      className="cursor-pointer text-gray-500 hover:text-red-500 transition"
    />}
  </>
    
  )
}
{/**const router = useRouter()
const  session=useSession()
  async function addToWishlist() {
   
  } if (session.status === 'authenticated') {
      const data = await addToWishListAction(productId)

      if (data.status === 'success') {
        toast.success('Product added to wishlist ❤️')
      }
    } else {
      router.push('/login')
    } */}