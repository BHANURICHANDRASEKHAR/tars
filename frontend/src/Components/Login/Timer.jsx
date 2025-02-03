import React,{useState,useEffect} from 'react'
import mailfunction from './Mailfunction.js';
 function Timer({setOtp,data}) {
    const [time, setTime] = useState(30);
    const [loading,setloading]=useState(false)
    const [otpflag,setotpflag]=useState(false)
    const [isActive, setIsActive] = useState(false);
   function resendmail()
   {
    mailfunction(setloading,setotpflag,setOtp,data)
   }
    useEffect(() => {
        let interval = null;
        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            clearInterval(interval);
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, time]);
    useEffect(() => {
        startFunction(); 
    }, []);

    const startFunction = () => {
        setIsActive(true);
    }
    const resetTimer = () => {
        setTime(30);
        setIsActive(true);
        
    };

    return (
        <div className='col'>
            <h1 className='text-center'>00:{time < 10 ? `0${time}` : time}</h1>
            <p className='text-center mt-1 '>Didn't receive OTP? <button onClick={()=>{resendmail(),resetTimer()}} className='resentbtn text-gray btn btn-primary'  style={{color:setIsActive && time>0?'gray' : 'red'}} disabled={setIsActive && time>0}>Resend</button></p>
        </div>
    );
};
export default React.memo(Timer)