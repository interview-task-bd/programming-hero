import express from 'express';
import {connect} from 'mongoose';
import router from './routes';
import fileUpload from 'express-fileupload';
import {config} from 'dotenv';
config({path:'.env'});

const port = process.env.PORT || 5002;

const app = express();

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

connect(`mongodb://localhost:27017/programming-hero`,
{ useUnifiedTopology: true,useNewUrlParser: true }).then(() => {
  console.log('Database connection successful')
})
.catch(err => {
  console.error('Database connection error')
})

app.get('/',(req,res)=>{
  res.send("Welcome")
})

app.use('/',router)

app.listen(port,()=>console.log(`Server is running on port ${port} server url http://localhost:${port}`))