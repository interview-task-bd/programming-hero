import  { Schema, model }  from 'mongoose';

const CourseSchema = new Schema({
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
   ],
   enrolls:[{
       type:Schema.Types.ObjectId,
       ref:'Enroll'
   }]
   
})


export default model('Course',CourseSchema);