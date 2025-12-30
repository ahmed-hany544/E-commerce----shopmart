import { BrandI, ProductI } from '@/interfaces'
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
import AddToCart from '@/components/addToCart/AddToCart'
import MyStarIcon from '@/components/myStarIcon/myStarIcon'
import Link from 'next/link'
import Products from '../../products/page'
export default async function BrandDetails({params}:{params: Params}) {
    let {brandId}=await params
console.log(brandId )

   const response=await fetch('https://ecommerce.routemisr.com/api/v1/brands/'+brandId)
    const {data:brand}:{data: BrandI}=await response.json()
console.log(brand)
 const productsRes= await fetch(`https://ecommerce.routemisr.com/api/v1/products?brand[in]=${brandId}`,{ cache: "no-store" })
 const {data:products}:{data: ProductI[]}=await productsRes.json()
 console.log(products)
  return (
    <>
     <h1 className="text-3xl font-bold tracking-tight  mt-8">{brand.name}</h1>
     <p className='text-muted-foreground mb-8'>Products from this brand</p>
 {products.length>0? <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5 mb-7'>
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
 
     
 :<div className='flex justify-center items-center h-[50vh] '><span className="text-xl text-gray-500 block text-center mt-10">
    No products found from  this brand
  </span></div> }
     
    
    </>
  )
}
