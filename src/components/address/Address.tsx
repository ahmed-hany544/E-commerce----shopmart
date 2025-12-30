'use client'

import React, { useContext, useRef } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { getUserToken } from "@/app/Helpers/getUserToken";
import { AddressContext } from "../addressContext/AddressContext";
import { AddressesResponse } from "@/interfaces";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

export default function AddAddress() {
  const nameRef = useRef<HTMLInputElement>(null);
  const detailsRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
const cityRef= useRef<HTMLInputElement>(null)
const{getAddresses,setAddressData}= useContext(AddressContext)
const session=useSession()
  async function addAddress() {
    
const token= await getUserToken()
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/addresses", {
      method: "POST",
      headers: {
        token:token!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
      {  name: nameRef.current?.value,
      details: detailsRef.current?.value,
      phone: phoneRef.current?.value,
      city: cityRef.current?.value,
    }),
    });

    const data: AddressesResponse = await res.json();

    if (session.status === "authenticated") {
    data.status=='success' && toast.success('New address added successfully')
      await getAddresses()
 
    }
  }

  return (
    <Dialog>
      <form>
        <DialogTrigger  asChild>
          <Button className="w-full mt-5  ">
            Add New Address
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Address</DialogTitle>
            <DialogDescription>
              Enter your shipping address
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label>Name</Label>
              <Input ref={nameRef} />
            </div>

            <div className="grid gap-2">
              <Label>Details</Label>
              <Input ref={detailsRef} />
            </div>

            <div className="grid gap-2">
              <Label>Phone</Label>
              <Input ref={phoneRef} />
            </div>
            <div className="grid gap-2">
              <Label>City</Label>
              <Input ref={cityRef} />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

           <Link href='./user-address'><Button type="button" onClick={addAddress} >
              Save Address
            </Button></Link> 
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
