import { Request, Response } from "express";
import CourseContentSchema from "../model/CourseContentSchema";
import ModuleSchema from "../model/ModuleSchema";

export default {
    index:async(req:Request,res:Response)=>{
         const courseContent= await CourseContentSchema.find().populate('modules');
         if(courseContent)
           return res.send(courseContent)
    },
    create:async(req:Request,res:Response)=>{
        await CourseContentSchema.create(req.body).then(async(result: any)=>{
            const module = await ModuleSchema.findOneAndUpdate({_id:req.body.module},{$push:{course_contents:result}},{new:true})
            if(module)
            return res.send(module)
        })
    }
}