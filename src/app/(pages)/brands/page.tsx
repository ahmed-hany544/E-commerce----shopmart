import React from 'react'
import {BrandI  } from '@/interfaces'
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
export default async function Brands () {
  const response=await fetch('https://ecommerce.routemisr.com/api/v1/brands')
  const {data:brands}:{data: BrandI[]}=await response.json()
  console.log(brands)
  return(
    <>
    <h1 className="text-3xl font-bold tracking-tight mb-8 mt-8">Brands</h1>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5 mb-5'>
    {brands.map((brand)=><div key={brand._id}   >
 <Link href={'/brands/'+brand._id} >
 <Card className='min-h-[300px] w-full hover:shadow-lg transition-shadow rounded-xl' >
  
  <CardHeader >
    <Image src={ brand.image} alt=''  height={250} width={350} className="object-cover rounded-t-lg"/>
  
  </CardHeader>
  <CardContent className=' flex justify-center'>
    <span className='font-semibold  text-lg'>{brand.name}</span>
  </CardContent>
  </Card>
 
 </Link>
 
 
 
 </div> )}
  
</div>
 
    </>
  )
}
{/** 
 <Link href={'/brands/'+brand._id}>
      <Card className="h-[320px] w-full hover:shadow-lg transition-shadow rounded-xl">
        <CardContent className="flex items-center justify-center h-[240px]">
          <Image
            src={brand.image}
            alt={brand.name}
            width={400}
            height={200}
            className="w-full max-w-[350px] h-auto object-contain"
          />
        </CardContent>

        <CardFooter className="justify-center">
          <p className="text-base font-medium">{brand.name}</p>
        </CardFooter>
      </Card>
    </Link>
 
    
 
 */}