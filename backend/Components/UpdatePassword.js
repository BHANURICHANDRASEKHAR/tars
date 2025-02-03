import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "../Database_Models/User.js";

const router = express.Router();

router.post('/UpdatePassword', async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10); 
    const UpdatedUser= await User.updateOne({ email },{$set:{ password: hashedPassword }});
    const user=await User.findOne({ email});
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1y' } 
    );

    res.send({
      status: true,
      token:token
    });

  } catch (e) {
    console.error(e.message); 
    res.status(500).send({ status: false, msg: 'Internal Server Error' });
  }
});

export default router;
