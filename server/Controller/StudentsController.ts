import {Request,Response} from 'express';
import StudentsSchema from '../model/StudentsSchema';
import {hash, compare} from 'bcryptjs'
import CreateFailed from '../errors/CreateFailed';
import NotFound from '../errors/NotFound';
import { accessToken, refreshToken } from '../helper/jwt';
export default {
    register:async(req:Request,res:Response):Promise<void>=>{
        const {body} = req;
        const password = await hash(body.password,10)
        const data = {...body,password};
         try{
            const student = await StudentsSchema.create(data)
            if(!student) throw new CreateFailed('Registration Failed',500)
             res.status(200).json({
                message:"Register Successfully",
                success:true,
            })
         }catch(error){
              res.json({
                 ...error
             })
         }
    },
    login:async(req:Request,res:Response):Promise<void>=>{
        const {body}=req;
        try {
            const student:any = await StudentsSchema.findOne({email:body.email});
            if(!student) throw new NotFound('User not found',302);
            const passwordMatch= await compare(body.password,student.password)
            if(!passwordMatch) throw new Error('Password not match')
            if(passwordMatch){
                const token = await accessToken(student)
                const recoverToken = await refreshToken(student)
                res.status(200).send({ auth: true, token: token,recoverToken });
            }
        } catch (error) {
            console.log(error)
        }
    }
}