import {model,Schema} from 'mongoose';

const MilestoneSchema = new Schema({
     title:{
        type: String,
        required: true,
     },
     
     module_length:{
        type:Number,
        required:true
     },
     course:{
      type:Schema.Types.ObjectId,
      ref:'Course'
     },
     status:{
      type:String,
      enum:["PENDING","PROGRESS","COMPLETED"],
      required:true,
      default:"PENDING"
     },
     modules:[
        {
           type:Schema.Types.ObjectId,
           ref:'Module'
        }
     ]
     
})

export default model('Milestone',MilestoneSchema)

