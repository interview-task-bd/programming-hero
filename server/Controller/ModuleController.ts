import {Response,Request} from 'express';
import ModuleSchema from '../model/ModuleSchema';
import MilestoneSchema from '../model/MilestoneSchema';

export default {
    
    index: async(req:Request,res:Response)=>{
        const module = await ModuleSchema.find().populate('milestone')
        if(module) 
         return res.send(module)
    },

    create:async (req:Request,res:Response)=>{
       try {
           await ModuleSchema.create(req.body).then(async(result)=>{
               const milestone = await MilestoneSchema.findOneAndUpdate({_id:req.body.milestone},{$push:{modules:result}} ,{new:true})
               if(milestone){
                   return res.send(result)
               }
           })
       } catch (error) {
           return res.send(error.message)
       }
    }
}