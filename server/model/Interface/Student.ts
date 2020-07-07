import { Document,Schema} from 'mongoose';

export default interface Students extends Document{
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
     }
