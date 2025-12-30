import { NextResponse } from "next/server"

export async function GET(){
    const users={
        message:'success',
        users:[
            {id:3456,name:'ahmed',age:34},
 {id:3459,name:'ali',age:40},
  {id:3458,name:'khaled',age:30}
        ] }
        return NextResponse.json(users)
}