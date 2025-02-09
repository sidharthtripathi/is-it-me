import {z} from 'zod'
export const thoughtSchema = z.object({
    thought : z.string().min(3)
})