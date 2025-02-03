import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import NotesManagement from './Components/NotesManagement.js';
configDotenv();
import DataBaseConnection from './DataBaseConnection.js'
DataBaseConnection();
import Login from './Components/Login.js'
import Signup from './Components/signup.js'
const app=express();
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(cors({
    origin: '*',
    credentials: true
}))
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.use(Signup)
app.use(Login)
app.use('/notes',NotesManagement)
app.listen(process.env.PORT || 3000 ,()=>{
    console.log('Server is running on port',process.env.PORT)  
})