import { toast_fail, toast_success } from "../alert/alert.js";
import axios from 'axios'
import { ApiLink } from "../../App.jsx";
import { storeCookie } from "./loginmod.js";
async function signup(data,setloading,changeAuthMode,SetFlag)
{  
    setloading(true)
   const flag=dataisValid(data);
  
   if(flag)
   {
    try{
      const res = await axios.post(`${ApiLink}/signup`, data);
      if(res.data.status){
        toast_success('Registration Successful');
        storeCookie(res.data.token,true)
        SetFlag(false)
      }
      else{
        toast_fail('User Already Registered');
        changeAuthMode('signin')
      }
    }
    catch(err){
     
      toast_fail('Registration Failed Internal Error');
      console.log(err)
    }
   }
  setloading(false)
}

function dataisValid(data)
{
   console.log(data)
   if(data.username.trim().length==0 || data.password.trim().length==0 || data.confirmPassword.trim().length==0 || data.email.trim().length==0 )
   {
     toast_fail('Please fill All required fields');
     return false;
   }
   else if(!mailtest(data.email))
   {
     return false;
   }
    if(data.password!=data.confirmPassword){
     toast_fail('Passwords do not match');
     return false;
   }
  return true;
}
export default signup;
export function mailtest(email)
{
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if (!(emailRegex.test(email))) {
  toast_fail('Invalid email address');
  return false;
} 
return true
}