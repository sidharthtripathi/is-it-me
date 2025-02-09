import {JWTPayload, jwtVerify, SignJWT} from 'jose'
export async function verifyJWT(token:string,secret:string){
    try {
        const {payload} = await jwtVerify(token,new TextEncoder().encode(secret))
        return payload
    } catch (error) {
        throw error
    }
}

export async function createJWT(payload : JWTPayload,secret : string) {
    const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256',time:Date.now() })
    .sign(new TextEncoder().encode(secret));
    return token
}