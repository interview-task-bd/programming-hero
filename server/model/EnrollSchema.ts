import {model,Schema} from 'mongoose';

const EnrollSchema = new Schema({
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
})

export default model('Enroll',EnrollSchema)