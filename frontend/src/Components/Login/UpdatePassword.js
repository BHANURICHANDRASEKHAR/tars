import axios from "axios";
import { toast_success,toast_fail } from "../alert/alert";
import { storeCookie } from "./loginmod";
import { ApiLink } from "../../App";
export default async function UpdatePassword(setloading,data,resenddata,setShow)
{
 if(checkPassword(resenddata))
 {
    console.log(resenddata);
    setloading(true);
   try{
    const res=await axios.post(`${ApiLink}/UpdatePassword`,{
        email:data.email,
        password:resenddata.password
        })
        if(res.data.status)
        {
            toast_success(res.data.msg);
            storeCookie(res.data.token);
            setShow(false)
        }
        else{
            toast_fail(res.data.msg);
        }
   }
   catch(e)
   {
    toast_fail('Internal error Please try again');
     
   }
   finally{
    setloading(false);
   }
 }
 else{
    toast_fail('Passwords do not match');
 }
 }

 function checkPassword(data)
 {
    if(data.password==data.confirmPassword)
    {
        return true;
    }
    return false;
 }
 
 
