import  {Schema,model} from 'mongoose';


const ModuleSchema = new Schema({
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
})

export default model('Module',ModuleSchema)