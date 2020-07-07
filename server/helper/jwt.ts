import { sign } from "jsonwebtoken";

export const accessToken = async(user:any)=>{
    const token = sign({user}, `${process.env.SECRET_KEY}`, {expiresIn: 86400});
    return token
}
export const refreshToken = async(user:any)=>{
    const token = sign({user}, `${process.env.SECRET_KEY}`, {expiresIn: 86400*7});
    return token
}