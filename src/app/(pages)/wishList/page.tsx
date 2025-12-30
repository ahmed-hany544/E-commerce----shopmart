
'use client'

import { useContext, useState } from 'react'
import Loading from '@/app/loading'
import { WishListContext } from '@/components/wishListContext/WishListContext'
import Image from 'next/image'
import { WishListResponse } from '@/interfaces'
import toast from 'react-hot-toast'
import { getUserToken } from '@/app/Helpers/getUserToken'
import { Loader } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function WishList() {
  const { isLoading, wishListData,setWishListData,getWishList } = useContext(WishListContext)
  const [removingId, setRemovingId] = useState<null|string>(null)
async function removeCartItem(productId:string){
  
    setRemovingId(productId)
    const token=await getUserToken()
 const response=await fetch('https://ecommerce.routemisr.com/api/v1/wishlist/'+productId,{
      method:'DELETE',
      headers:{
        token: token!
      }
    }
  )
  const data: WishListResponse=await response.json()
  console.log(data)
if(data.status=='success'){
  toast.success('product deleted from wishList successfully')
await getWishList()
}
setRemovingId(null)
  }
  

  if (!wishListData || wishListData.count === 0) {
    return (
      <div className='container mx-auto py-20 gap-3 text-center text-muted-foreground h-[75vh] flex flex-col items-center justify-center'>
        Your wishlist is empty 🤍
        <Link href={'/products'}>
<Button>Add Products to wishList</Button>
</Link>
      </div>
    )
  }

  return (<>
  {isLoading ? <Loading/> :<div className='container mx-auto py-6 px-4'>
      <h1 className='text-3xl font-bold tracking-tight'>WishLists</h1>

      <p className='text-muted-foreground mt-1'>
        {wishListData.count} items in your wishlist
      </p>

      <div className='mt-6 space-y-4'>
        {wishListData?.data.map((item) => (
          <div
            key={item._id}
            className='flex gap-4 rounded-xl border p-4 shadow-sm bg-card'
          >
            <Image width={200} height={200}
              src={item.imageCover}
              className='w-24 h-24 rounded-lg object-cover'
              alt={item.title}
            />

            <div className='flex-1'>
              <div className='flex justify-between gap-3'>
                <div>
                  <h3 className='font-semibold text-lg line-clamp-2'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    {item.brand.name} · {item.category.name}
                  </p>
                </div>

                <span className='font-semibold whitespace-nowrap'>
                  {item.price} EGP
                </span>
              </div>

              <div className='mt-3 flex justify-end'>
                <button onClick={()=>removeCartItem(item._id)} aria-label='remove' className='text-sm cursor-pointer flex text-destructive hover:underline items-center'>
                   {removingId==item._id &&<Loader className=' animate-spin'/>}Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> }
  </>
    
    
  )
}
