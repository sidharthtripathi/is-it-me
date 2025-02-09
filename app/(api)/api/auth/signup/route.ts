import { signupSchema } from "@/schema/account";
import { NextRequest, NextResponse } from "next/server";
import {db} from '@/lib/prisma'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function POST(req:NextRequest){
    
    try {
        const {username,password} = signupSchema.parse(await req.json())
        await db.user.create({data:{username,password}})
        return NextResponse.json({message : "user authenticated"})
    } catch (error) {
            if(error instanceof PrismaClientKnownRequestError)
            return NextResponse.json({message : "username already taken"},{status : 409,statusText : "username already taken"})
            else return NextResponse.json({message : "invalid payload"},{status : 400,statusText : "invalid payload"})
    }
    
}