import React, { useContext, useState } from 'react';
import Input from './Input';
import login from './loginmod.js';
import { UserContext } from '../Context/Context.jsx';
export default function Login({ authMode, changeAuthMode,setAuthMode }) {
    const initialState = {
        email: '',
        password: ''
    };
    const {SetShow}=useContext(UserContext)
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(false);

    function onHandler(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

   
     function handleSubmit(e) {
        e.preventDefault();
       
        login(data,setLoading,SetShow);
       
    }

    return (
        <div className="Auth-form-container">
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">
                    {authMode === 'signin' ? 'Sign In' : 'Sign Up'}
                </h3>
                <div className="text-center">
                    Not registered yet?{" "}
                    <span className="link-primary" onClick={changeAuthMode}>
                        Sign Up
                    </span>
                </div>
                <form onSubmit={handleSubmit}>
                    <Input
                     lable='Email Address'
                        placeholder='e.g Abc.com'
                        name='email'
                        type='email'
                        handler={onHandler}
                        value={data.email}
                    />
                    <Input
                       lable='Password'
                        placeholder='Enter Password'
                        name='password'
                        type='password'
                        handler={onHandler}
                        value={data.password}
                    />
                    <div className="d-grid gap-2 mt-3">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={loading}
                            onClick={()=>login(data,setLoading,SetShow)}
                        >
                            {loading ? 'Loading...' : 'Submit'}
                        </button>
                    </div>
                     <p className="text-left mt-2">
                         Forgot <span className='text-primary' onClick={()=>{setAuthMode('ForgotPassWord')}}>password?</span>
                     </p>
                </form>
            </div>
        </div>
    );
}
/** // <p className="text-center mt-2">
                    //     Forgot <span className='text-primary' onClick={()=>{setAuthMode('ForgotPassWord')}}>password?</span>
                    // </p> */