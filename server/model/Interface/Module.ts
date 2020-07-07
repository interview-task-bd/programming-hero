import { Document,Schema } from "mongoose";


export default interface Module extends Document{
    title:{
        type:String,
        required:true,
      },
      milestone:{
         type:Schema.Types.ObjectId,
         ref:'Milestone'
      },
      status:{
        type:String,
        enum:["PENDING","PROGRESS","COMPLETED"],
        required:true,
        default:"PENDING"
      },
      course_contents:[{
          type:Schema.Types.ObjectId,
          ref:"CourseContent"
      }]
}