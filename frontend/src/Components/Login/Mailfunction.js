import axios  from "axios";
import { mailtest } from './Submit.js';

import { toast_fail,toast_success } from "../alert/alert";
import { ApiLink } from "../../App";
export default async function  mailfunction(setLoading,setotpflag,setOtp,data)
{
    if(data.email.length>0)
    {
      console.log(`${ApiLink}/forgotPassword`)
       if(mailtest(data.email))
      {
        try{
          setLoading(true);
        const res=await axios.post(`${ApiLink}/forgotPassword`,{
           email: data.email,
       })
       if(res.data.status)
       {
        setOtp(res.data.otp)
        toast_success(res.data.msg)
         setotpflag(true)
       }
       else{
       
       toast_fail(res.data.msg)
      }
        }
        catch(err){
          toast_fail('Server Error')
          
        }
      finally{
        setLoading(false);
      }
      }
    }
    else{
      toast_fail('Please enter email')
    }
}
