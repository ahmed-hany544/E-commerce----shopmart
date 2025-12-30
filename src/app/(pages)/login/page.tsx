"use client"
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {signIn} from "next-auth/react"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card } from '@/components/ui/card'
import { useSearchParams } from 'next/navigation'
import { Loader } from 'lucide-react'
import Link from 'next/link'
//.regex(/[A-Z]/, "Must contain at least one uppercase letter").regex(/[0-9]/, "Must contain at least one number"),
const formSchema = z.object({
  email: z.email("Invalid email format").trim().min(3, "Email is required").max(254, "Email is too long"),
  password:z.string()
  .min(8, "Password must be at least 8 characters long")
  .max(64, "Password must not exceed 64 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[@$!%*?&#]/, "Password must contain at least one special character").refine((val) => !val.includes(" "), {
    message: "Password must not contain spaces",
  }),
})
type FormFields=z.infer<typeof formSchema>
export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  let searchParams= useSearchParams()
  console.log(searchParams.get('error'))
const form = useForm<FormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    email:"",
    password:""
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values:FormFields ) {
    setIsLoading(true)
  const response= await signIn("credentials",{
    email: values.email,
    password: values.password,
    callbackUrl:'/',
    redirect: true
  })
    console.log(response)
    setIsLoading(false)
  }
  return (
    <>
    <div className='flex flex-col justify-center items-center min-h-[75vh]'>
        <h1 className='my-3 text-2xl'>Login Now</h1>
       <Card className='p-5 w-sm'>
         <Form {...form}>
          {searchParams.get('error') && <h1 className='text-red-400'>{searchParams.get('error')}</h1>}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="ahmed@example" {...field} />
              </FormControl>
         <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
         <FormMessage />
            </FormItem>
    )}
        />
                  <div className="text-left">
  <Link
    href="/forget-password"
    className="text-m text-blue-600 hover:underline"
  >
    Do you Forgot your password?
  </Link>
</div>
        
        <Button className='w-full  cursor-pointer' type="submit">{isLoading && <Loader className='animate-spin '/>}Submit</Button>
      </form>
    </Form>

       </Card>
       <p>If you don't have account please   <Link href={'/register'} className='text-blue-600 border border-b-blue-600 border-t-0 border-l-0 border-r-0'>Sign Up</Link> now</p>
    </div>

    </>
    
  )
}
