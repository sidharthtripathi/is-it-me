import {z} from 'zod'
export const loginSchema = z.object({
    username : z.string().min(1,"Identifier should have minimum 1 character"),
    password : z.string().min(8,"Password must be minimum 8 characters long")
})

export const signupSchema = z.object({
    username : z.string().min(1,"Minimum 1 character reuqired"),
    password : z.string().min(8,"Password must be 8 characters long")
})