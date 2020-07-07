import {Document,Schema} from 'mongoose'

export default interface CourseContent extends Document{
    title:{
        type:String,
        required:true
    },
 
    content_url:{
        type:String,
        required:true
    },
    status:{
     type:String,
     enum:["PENDING","PROGRESS","COMPLETED"],
     required:true,
     default:"PENDING"
   },
    module:{
          type:Schema.Types.ObjectId,
          ref:'Module'
    }
}