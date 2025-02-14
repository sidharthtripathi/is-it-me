import { CreateThoughtForm } from "@/components/CreateThoughtForm";
import { ProtectedPage } from "@/components/ProtectedPage";


export default function CreatePage(){
 
    return (
        <ProtectedPage>
        <div>
        create anonymous post here
        <CreateThoughtForm/>
        </div>
        </ProtectedPage>
        
    )
}