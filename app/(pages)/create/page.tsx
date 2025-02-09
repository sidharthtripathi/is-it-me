"use client"
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { thoughtSchema } from '@/schema/thought';
import { zodResolver } from '@hookform/resolvers/zod';
import { server } from '@/lib/axios';
import { AxiosError } from 'axios';
import { useToast } from '@/hooks/use-toast';
type ThoughtType = z.infer<typeof thoughtSchema>
export default function CreatePage(){
    const {toast} = useToast()
    const {register,handleSubmit,formState : {errors},reset} = useForm<ThoughtType>({
        resolver : zodResolver(thoughtSchema)
    })
    async function handleFormSubmit(data : ThoughtType) {
        try {
            server.post('/api/thought',data)
            reset()
        } catch (error) {
            if (error instanceof AxiosError) toast({title : error.response?.statusText,variant:"destructive"})
        }
    }
    return (
        <div>
        create anonymous post here
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <textarea {...register("thought")} />
            {
                errors.thought && <p className='text-destructive text-xs'>Thoughts can not be this small</p>
            }
            <button>submit</button>
        </form>
        </div>
    )
}