import { db } from "@/lib/prisma";
import { thoughtSchema } from "@/schema/thought";
import { searchClient } from "@/services/meilisearch";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const username = req.headers.get("username")
    if(!username) return NextResponse.json({message : "unauthenticated user"},{status : 401,statusText : "unauthenticated user"})
    try {
        const {thought}  = thoughtSchema.parse(await req.json())
        const newThought = await db.thought.create({
            data : {thought,authorID:username}
        })
        console.log(newThought)
        await searchClient.index("thoughts").addDocuments([newThought],{primaryKey : "id"})
        return NextResponse.json({message : "created"},{status : 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({},{statusText:"invalid payload",status: 400})
    }
    
}