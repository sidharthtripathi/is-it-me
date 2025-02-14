
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export function ProtectedPage({children} : {children : ReactNode}){
    const username = headers().get("username")
    if(!username) redirect("/join")
    return (
        <div>
            {children}
        </div>
    )
        
}