import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    email:
     { type: String,
       required: true,
        unique: true },
    password: 
    { type: String },
    name: 
    { type: String,
       required: true 
     },
    RegistedAt:{
       type: Date,
       default: Date.now,
    }
});

export default mongoose.model('User', UserSchema);
