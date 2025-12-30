'use client';

import { getUserToken } from "@/app/Helpers/getUserToken";
import Loading from "@/app/loading";
import { AddressContext } from "@/components/addressContext/AddressContext";
import { Button } from "@/components/ui/button";
import { AddressesResponse, profiledetail } from "@/interfaces";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

export default  function UserAddresses() {
  const { addressData, isLoading,getAddresses ,setAddressData} = useContext(AddressContext);
  const [removingId, setRemovingId] = useState<null|string>(null)
async function removeAddress(addressId:string){
  setRemovingId(addressId)
  const token=await getUserToken()
 const response=await fetch(`https://ecommerce.routemisr.com/api/v1/addresses/${addressId}`,{
      method:'DELETE',
      headers:{
        token: token!
      }
    }
  )
   const data: AddressesResponse=await response.json()
    console.log(data)
  if(data.status=='success'){
    toast.success('Address removed successfully')
  setAddressData(data)
  }
  setRemovingId(null)
    }

  if (!addressData || !addressData.data || addressData.data.length===0) {
    return (<>
    <div className='flex min-h-[75vh] items-center justify-center flex-col'>
<h2 className='text-2xl my-4'>Your Address Is Empty...</h2>
<Link href={'/cart'}>
<Button >Go to Add Address</Button>
</Link>
</div> 
    
    
    
    </>
      
    );
  }

  return <>
 <Link href={'./cart'}><Button  variant={'outline'} className='mt-2 text-black flex'>
    Go to add Address</Button></Link> 
  {isLoading?<Loading/>:<div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 ">Addresses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addressData?.data.map((address) => (
        
         <div
            key={address?._id}
            className="border border-gray-300 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white"
          >
             <Link href={'/user-address/'+address._id}>
            <h3 className="font-bold text-xl mb-3">Name:{address.name}</h3>
            <p className="text-gray-700 mb-2"><span className="font-medium">Details:</span> {address.details}</p>
            <p className="text-gray-700 mb-2"><span className="font-medium">Phone:</span>{address.phone}</p>
            <p className="text-gray-600"><span className="font-medium">City:</span> {address.city || "Not Specified"}</p>
             </Link>
<Button aria-label='remove' onClick={()=>removeAddress(address._id)}  variant={'outline'} className='mt-2 text-black hover:text-red-600 flex'>
    {removingId==address._id &&<Loader className=' animate-spin'/>} Remove</Button>

          </div>
        
          
        ))}
      </div>
    </div>
    }  </>
  ;
}