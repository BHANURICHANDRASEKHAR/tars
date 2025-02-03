import React, { useState,useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Input from './Input'
import { toast_fail } from '../alert/alert.js';
import UpdatePassword from './UpdatePassword.js'
import Timer from './Timer';
import { UserContext } from '../Context/Context.jsx';
import { FaArrowLeft } from "react-icons/fa";
export default function Otp({otp,data,setOtp,onHandler,setotpflag,setAuthMode}) {
    const [status,setstatus]=useState(false)
    const [loading,setloading]=useState(false)
    const [forgetdata,setforgetdata]=useState({
        password:'',
        confirmPassword:''
    })
    function verify(){
        if(otp==data.otp)
        {
            setstatus(true) 
        }
        else{
            toast_fail('Otp is Not Matched ')
        }
    }
    function onHandler1(e)
    {
        setforgetdata({...forgetdata,[e.target.name]:e.target.value})
    }
    const {SetShow}=useContext(UserContext)

    if(!status)
    {
        return (
            <div className='container'>
            <div className='row'>
           
            <div className='col mt-4 text-dark'>
            <FaArrowLeft className='flex' onClick={()=>{setotpflag(false)}}/>
                <h3 className='text-center'>Enter Otp</h3>
                <p>Verification code has been sent to your email, {data.email}, please enter the same here to complete the signup. Please Don't refresh the Page.</p>
                <Input value={data.otp}  lable='Confirm Otp' type='text' name='otp' handler={onHandler}/> 
                <Button variant="danger" className='w-100 text-white mt-3'  onClick={verify}>Procced</Button>
            </div>
            <div className='row mt-4'>
           <Timer setOtp={setOtp} data={data} />
           </div>
        </div></div>
          )
    }
    else{
      return( <React.Fragment>
        <Input lable='Password' placeholder='Password' type='password' handler={onHandler1} value={forgetdata.password} name='password'/>
         <Input lable='Confirm Password' placeholder='Password' type='password' handler={onHandler1} value={forgetdata.confirmPassword} name='confirmPassword'/>
         <Button variant="primary" className='w-100 text-white mt-3' disabled={loading}  onClick={()=>{UpdatePassword(setloading,data,forgetdata,SetShow)}}>{loading ? '...loading' : 'Update'}</Button>
 
        </React.Fragment>)
    }
}
