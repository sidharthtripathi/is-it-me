import { loginSchema } from "@/schema/account";
import { NextRequest, NextResponse } from "next/server";
import {db} from '@/lib/prisma'
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers";
import { ZodError } from "zod";

export async function POST(req:NextRequest){
    
    try {
        const {username,password} = loginSchema.parse(await req.json())
        const user = await db.user.findUnique({where : {username}})
        if(user && user.password===password){
            // create access token
            const accessToken = jwt.sign({username},process.env.JWT_SECRET as string)
            cookies().set("access-token",accessToken,{httpOnly:true,expires: Date.now() + 24 * 60 * 60 * 7 * 1000})
            return NextResponse.json({message : "user authenticated"})
        }
        else {
            return NextResponse.json({message : "wrong username or passwword"},{status : 401,statusText : "wrong username or password"})
        }
    } catch (error) {
            if(error instanceof ZodError) NextResponse.json({message : "invalid payload"},{status : 400,statusText : "Invalid payload"})
    }
    
}