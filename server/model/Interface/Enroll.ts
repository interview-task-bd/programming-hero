import { Document,Schema } from "mongoose";


export default interface Enroll extends Document{
    total_course:{
        type:Number,
        required:false,
        default:0
    },
    students:[{
      type:Schema.Types.ObjectId,
      ref:'Student'
    }],
    courses:[{
        type:Schema.Types.ObjectId,
        ref:"Course"
    }]
}