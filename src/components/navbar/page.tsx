'use client'
import React, { useContext } from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { HeartIcon, Loader, ShoppingCartIcon, UserIcon } from 'lucide-react'
import { CartContext } from '../cartContext/CartContext'
import { signOut, useSession } from 'next-auth/react'
import { WishListContext } from '../wishListContext/WishListContext'


export default function Navbar() {
  const session=useSession()
  console.log(session);
  const{isLoading,cartData}=useContext(CartContext)
  const{wishListData}=useContext(WishListContext)

  return (
    <>
    <nav className='bg-accent/90 py-3 text-2xl font-semibold sticky top-0 border-b border-muted shadow'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <h1>
            <span className="px-3 py-0.5 rounded-lg text-white bg-black me-2 ">S</span>

            <Link className='font-bold' href={'/'}>ShopMart</Link>
          </h1>
        <NavigationMenu>
  <NavigationMenuList>
     <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href="/products">Products</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
     <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href="/brands">Brands</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
     <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href="/categories">Categories</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
<div className='flex items-center gap-1'>
{session.status=='authenticated' && <h2>Hi {session.data.user.name}</h2>}
<DropdownMenu>
  <DropdownMenuTrigger><UserIcon/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {session.status == 'authenticated'?
    <>
    <Link href={'/user-address'}><DropdownMenuItem>Profile</DropdownMenuItem></Link>
    <Link href={'/profile/change-password'}><DropdownMenuItem>Change password</DropdownMenuItem></Link>
    <DropdownMenuItem onClick={()=>signOut({
      callbackUrl:'/'
    })}>Logout</DropdownMenuItem>
    </>:<>
    <Link href={'/login'}><DropdownMenuItem>Login</DropdownMenuItem></Link>
    <Link href={'/register'}><DropdownMenuItem>Register</DropdownMenuItem></Link>
  
    
    </>}
    
    
    
   
  </DropdownMenuContent>
</DropdownMenu>

{session.status == 'authenticated' && <div className='flex gap-3'> <div className='relative'>
 <Link href={'/cart'}>
 <ShoppingCartIcon/>
 <Badge className="h-5 absolute -top-3 -end-3 min-w-5 rounded-full px-1 font-mono tabular-nums ">
          {isLoading?<Loader className='animate-spin' />:cartData?.numOfCartItems}
        </Badge>
        </Link></div>
<div className='relative'>
<Link href={'/wishList'}>
  <HeartIcon/>
     <Badge className="h-5 absolute -top-3 -end-3 min-w-5 rounded-full px-1 font-mono tabular-nums ">
          {isLoading?<Loader className='animate-spin' />: wishListData?.count}
        </Badge>
 </Link>
</div>
 
</div>}
</div>

        </div>

      </div>

    </nav> 
    
    </>
  )
}
/***/