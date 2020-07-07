download repo 
```git clone git@github.com:interview-task-bd/programming-hero.git```
run after download project
 ```yarn install or npm install``
 ```yarn start or npm start``

 This project made with typescript express,mongodb,mongoose,redux,redux-thunk also jwt authentication 


```schemas```

```
userSchema.ts
import {model,Schema} from 'mongoose';

const UserSchema = new Schema({
   name:{
      type:String,
      required:true,
   },
   email:{
       type:String,
       required:true,
   },
   phone:{
       type:String,
       required:true,
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

export default model('User',UserSchema)
```

```
CourseSchema.ts

import mongoose, { Schema }  from 'mongoose';

const CourseSchema = new mongoose.Schema({
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
         type: mongoose.Schema.Types.ObjectId,
         ref:'Milestone'
    }
   ],
   enrolls:[{
       type:Schema.Types.ObjectId,
       ref:'Enroll'
   }]
   
})


export default mongoose.model('Course',CourseSchema);
```

```
MilestoneSchema.ts

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

```


```
ModuleSchema.ts

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

```


```
CourseContentSchema.ts


const  {model,Schema} =require('mongoose');


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

```

