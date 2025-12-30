import { Loader } from 'lucide-react'
import React from 'react'

export default function Loading() {
  return (
    <>
     <div className='min-h-screen flex justify-center items-center animate-spin'><h1><Loader className='h-30 w-30'/></h1></div>
    
    </>
  )
}
