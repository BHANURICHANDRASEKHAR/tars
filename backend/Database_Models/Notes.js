import mongoose from "mongoose";

const FeedSchema = new mongoose.Schema({
   userId: {
           type: mongoose.Schema.Types.ObjectId,
           required: true,
       },
    caption: {
        type: String,
        required: true,
    },
   description: {
     type: String,
     
   },
    Img: {
        type: [],
        
    },
   createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date, 
    },
    important:{
        type: Boolean,
        default: false,
    }
});

export default mongoose.model("Feeds", FeedSchema);
