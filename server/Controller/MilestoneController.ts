
import  Milestone from "../model/MilestoneSchema"
import  NotFound from "../errors/NotFound"
import  CreateFailed from "../errors/CreateFailed"
import  Course from "../model/CourseSchema"
import {Request,Response} from 'express'
export default {
    index:async (req: any,res: { send: (arg0: any) => void }):Promise<void>=>{
       try {
           const milestone = await Milestone.find()
           if(!milestone) throw new NotFound("Milestone not found",401)
           if(milestone.length===0) throw new Error("Milestone is empty");
           res.send(milestone)
       } catch (error) {
           res.send(error.message)
       }
    },

    create:async(req:Request,res:Response)=>{
     
        try {
            await Milestone.create({...req.body}).then(async(result):Promise<void>=>{

                const course = await Course.findOneAndUpdate({_id:req.body.course},{ $push: { milestones:result}},{new: true})
                if(course)
                    res.send(result)
            });
        } catch (error) {
            return res.send(error.message)
        }

    }
}

