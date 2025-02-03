import React, { useState } from 'react'
import Input from './Input';
import mailfunction from './Mailfunction.js';
import Otp from './Otp.jsx';
import { FaArrowLeft } from "react-icons/fa";
 function ForgetPassword({authMode, setAuthMode}) {
    const initialState = {
        email: '',
        otp: '',
    };
    const [otpflag,setotpflag]=useState(false);
    const [otp,setOtp]=useState('');
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(false);
    function onHandler(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    function sendmail(e)
    {
        e.preventDefault();
        mailfunction(setLoading,setotpflag,setOtp,data)
    }
   if(otpflag)
   {
    return(<Otp otp={otp} setOtp={setOtp} data={data} setotpflag={setotpflag} onHandler={onHandler} setAuthMode={setAuthMode}/>)
   }
   else{
    return (
        <div className="Auth-form-container">
            <div className="Auth-form-content">
              <FaArrowLeft onClick={()=>setAuthMode('signin')}/>
                <h3 className="Auth-form-title">
                    Forget Password
                </h3>

                <form>
                    <Input
                     lable='Email Address'
                        placeholder='e.g Abc.com'
                        name='email'
                        type='email'
                        handler={onHandler}
                        value={data.email}
                    />

                    <div className="d-grid gap-2 mt-3">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={loading}
                            onClick={sendmail}
                        >
                            {loading ? 'Loading...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
   }
}
export default React.memo(ForgetPassword);
