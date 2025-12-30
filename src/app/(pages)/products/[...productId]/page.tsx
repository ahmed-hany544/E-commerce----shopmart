import { ProductI } from '@/interfaces'
import { Params } from 'next/dist/server/request/params'
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
import { HeartIcon, ShoppingBagIcon } from 'lucide-react'
import ProductSlider from '@/components/productSlider/ProductSlider'
import AddToCart from '@/components/addToCart/AddToCart'

export default async function ProductDetails({params}:{params:Params}) {
let {productId}=await params
console.log(productId )
const response=await fetch('https://ecommerce.routemisr.com/api/v1/products/'+productId)
const {data:product}:{data:ProductI}=await response.json()
console.log(product)
  return (
<>
{/**<h1 className='font-bold text-black'>product details</h1>*/}
<Card className='grid md:grid-cols-2 items-center w-3/4 mx-auto my-28'>
<div className='p-3'>
<ProductSlider images={product.images} altContent={product.title} />
  
</div>


<div>
 <CardHeader>
  <CardDescription>{product.brand.name}</CardDescription>
    <CardTitle>{product.title}</CardTitle>
    <CardDescription>{product.description}</CardDescription>
  
  </CardHeader>
  <CardContent>
    <CardDescription>{product.category.name}</CardDescription>
    <div className='flex gap-1 mt-2'>
      <MyStarIcon/>
      <MyStarIcon/>
      <MyStarIcon/>
      <MyStarIcon/>
      <MyStarIcon/>
      <p>({product.ratingsQuantity})</p>
    </div>
    <div className='flex justify-between mt-3 mb-7'>
      <p className='font-bold'>Price:{product.price}EGP</p>
      <p className='font-bold'>Quantity:{product.quantity}</p>

    </div>
  </CardContent>
  <AddToCart productId={product._id}/>

</div>
 
</Card>

</>
  )
}
