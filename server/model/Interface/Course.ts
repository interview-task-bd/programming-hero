import {Document,Schema} from 'mongoose'

export default interface Course extends Document{
    title:{
        type: String,
        required:true,
    },
    price:{
        type: Number,
        required:true,
    },
    status:{
     type:String,
     enum:["PENDING","PROGRESS","COMPLETED"],
     required:true,
     default:"PENDING"
   },
    milestones:[
      {
          type: Schema.Types.ObjectId,
          ref:'Milestone'
     }
    ] | any,
    enrolls:[{
        type:Schema.Types.ObjectId,
        ref:'Enroll'
    }]
    
 }
