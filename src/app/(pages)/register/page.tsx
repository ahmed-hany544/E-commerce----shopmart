
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { email, z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Loader } from "lucide-react"
import { FailedRegisterResponse, SuccessRegisterResponse } from "@/interfaces/register"

const registerSchema = z.object({
  name: z.string().min(5,"The name must be at least 5 letters long "),
  email:z.email("Invalid email format").trim().min(3, "Email is required").max(254, "Email is too long"),
  password:z.string()
  .min(8, "Password must be at least 8 characters long")
  .max(64, "Password must not exceed 64 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[@$!%*?&#]/, "Password must contain at least one special character")
  .refine((val) => !val.includes(" "), {
    message: "Password must not contain spaces",
  }),
  rePassword: z.string(),
  phone: z.string().regex(/^01[0-2,5]{1}[0-9]{8}$/, "Invalid phone number"),
}).refine(data => data.password === data.rePassword, {
  message: " passwords do not match",
  path: ["rePassword"],
});

type RegisterFields = z.infer<typeof registerSchema>

export default function Register() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const form = useForm<RegisterFields>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
  })

  async function onSubmit(values: RegisterFields) {
    setLoading(true)

    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password,
          rePassword: values.rePassword,
          phone: values.phone,
        }),
      }
    )

    const data: SuccessRegisterResponse|FailedRegisterResponse = await res.json()
    setLoading(false)

    if (data.message === "success") {
      router.push("/login")
    } else {
      alert(data.message)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[75vh] mt-9 mb-9">
      <Card className="p-6 w-sm">
        <h1 className="text-xl mb-4 text-center">Register now and Join Us</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

            <FormField name="name" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>name</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField name="email" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>email</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField name="password" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl><Input type="password" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField name="rePassword" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel> rePassword</FormLabel>
                <FormControl><Input type="password" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField name="phone" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>phone</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <Button className="w-full" type="submit">
              {loading && <Loader className="animate-spin mr-2" />}
              Sign up
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  )
}





