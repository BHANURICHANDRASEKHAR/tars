import express from 'express';
import middleware_function from './middleware.js'
import Notes from '../Database_Models/Notes.js';
const app = express.Router();
//middleware_function is used to check the user token whether user is logged in or not
export default app.post('/post',middleware_function,async(req,res)=>{
   
     const {caption,ImageLink,description}=req.body
     try{
         const New_Feed=new Notes({
            caption,
            Img:ImageLink=='' ? null: ImageLink ,
           description,
            userId:req.user.id
         })
         await New_Feed.save()
         res.status(201).send({msg:'Note added successfully',status:true,data:New_Feed})
     }
     catch(e)
         {
            console.log(e.message)
            res.status(500).send({msg:'Note failed',status:false})
         }
})
app.get('/get',middleware_function,async(req,res)=>{
    try{
        console.log(req.user)   
        const Feed= await Notes.find({userId:req.user.id})
        console.log(Feed)
        res.send({data:Feed,status:true})
    }
    catch(e)
        {
            res.status(500).send({msg:'Failed to fetch tasks',status:false})
        }
});
app.post('/update',async(req,res)=>{
    const {Data} = req.body
    try{
        const updatedFeed= await Notes.findByIdAndUpdate(Data._id,Data,{new:true})
        res.send({msg:'Note updated successfully',status:true})
    }
    catch(e){
        console.log(e.message)
        res.status(500).send({msg:'Failed to update note',status:false})
    }
})
app.post('/delete', async(req, res)=> {
    const {id} = req.body
    try{
        await Notes.findByIdAndDelete(id)
        res.send({msg:'Note deleted successfully',status:true})
    }
    catch(e){
        console.log(e.message)
        res.status(500).send({msg:'Failed to delete note',status:false})
    }
})