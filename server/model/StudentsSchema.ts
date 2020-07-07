import {model,Schema} from 'mongoose';

const StudentsSchema = new Schema({
   name:{
      type:String,
      required:true,
   },
   email:{
       type:String,
       required:true,
       unique:true,
   },
   phone:{
       type:String,
       required:true,
       unique:true,
   },
   password:{
       type:String,
       required:true
   },
   enrolls:[{
       type:Schema.Types.ObjectId,
       ref:"Enroll"
   }],
   status:{
       type:String,
       required:true,
       enum:['ACTIVE','INACTIVE'],
       default:'INACTIVE'
   }
})

export default model('Student',StudentsSchema)
