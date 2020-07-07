import  {model,Schema} from 'mongoose';


const CourseContentSchema = new Schema({
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
   
});


export default model('CourseContent',CourseContentSchema)