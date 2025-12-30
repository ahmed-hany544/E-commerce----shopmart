import { CategoryI } from '@/interfaces'
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
import Link from 'next/link'


 export default async function Categories() {
const response=await fetch('https://ecommerce.routemisr.com/api/v1/categories')
const {data:categories}:{data: CategoryI[]}=await response.json()
console.log(categories)
  return (<>
  <h1 className="text-3xl font-bold tracking-tight mb-8 mt-8">Categories</h1>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-5 mb-5'>
    {categories.map((category)=><div key={category._id}>
 <Link href={'/categories/'+category._id}>
 <Card className='hover:shadow-lg transition-shadow rounded-xl' >
  
  <CardHeader>
    <Image src={ category.image} alt='' width={300} height={250}/>
   <CardTitle className='mx-auto '><p>{category.name}</p></CardTitle>
  </CardHeader>
  
  </Card>
 
 </Link>
 
    </div> )}
  
</div>
</>
  )
}
