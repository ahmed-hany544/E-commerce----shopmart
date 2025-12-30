import { ProductI } from '@/interfaces'
import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import MyStarIcon from '@/components/myStarIcon/myStarIcon'
import { Button } from '@/components/ui/button'
import { HeartIcon, ShoppingBagIcon, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import AddToCart from '@/components/addToCart/AddToCart'
export default async function Products() {
  const response= await fetch('https://ecommerce.routemisr.com/api/v1/products')
  const {data:products}:{data:ProductI[]}= await response.json()
  console.log(products)
  return (
    <>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-5 mb-7'>
 {products.map((product)=> <div key={product.id}>
<Card>
  <Link href={'/products/'+product.id}>
  <CardHeader>
    <Image src={product.imageCover} className='w-full' height={300} width={300} priority alt=''/>
    <CardDescription>{product.brand.name}</CardDescription>
    <CardTitle >{product.title.split(' ',2).join(' ')}</CardTitle>
    <CardDescription>{product.category.name}</CardDescription>
    
  </CardHeader>
  <CardContent>
    <div className='flex'>
    <MyStarIcon/>
    <MyStarIcon/>
    <MyStarIcon/>
    <MyStarIcon/>
    <MyStarIcon/>
<p >{product.ratingsAverage}</p>

    </div>
    <p>Price:<span className='font-bold'>{product.price}</span>EGP</p>
  </CardContent >
</Link>
  <AddToCart  productId={product._id}/>
</Card>
    </div>)}
    
  </div>
    </>
  )
}
