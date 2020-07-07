import CourseSchema from  '../model/CourseSchema' 
import NotFound from  '../errors/NotFound' 
import FoundEmpty from  '../errors/FoundEmpty' 
import { Request, Response} from 'express'
import CreateFailed from '../errors/CreateFailed'
export default {
   index: async(req:Request,res:Response)=>{
     try {
        const course = await CourseSchema.find().populate('milestones');
        if(!course) throw new NotFound('Course not found',401);
        if(course.length===0) throw new FoundEmpty('Course Table is empty',204)
        return res.send(course);
     } catch (error) {
         return res.send(error.message)
     }
   },
   create: async (req:Request,res:Response)=>{
    try {
      const course = await CourseSchema.create({...req.body})
      if(!course) throw new CreateFailed('Could not created',401)
      return res.send(course)
    } catch (error) {
       return res.send(error.message)
    }
   }
}