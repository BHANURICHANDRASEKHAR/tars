import axios from "axios";
import { toast_success, toast_fail } from "../alert/alert.js";
import { ApiLink } from "../../App.jsx";
import { mailtest } from './Submit.js';
import Cookie from 'js-cookie';

export default async function login(data, setloading,setFlag) {
    const flag = check(data);
    console.log(setFlag)
    if (flag) {
        setloading(true);
        try {
            const response = await axios.get(`${ApiLink}/login`, {
               params:{
                email: data.email,
                password: data.password
               }
            });

            if (response.data.status) {
                storeCookie(response.data.token,true)
                setFlag(false)
            } else {
                toast_fail(response.data.msg);
            }
        } catch (error) {
            toast_fail(error.msg);
            console.error('Error during login:', error);
        } finally {
            setloading(false);
        }
    }
}

function check(data) {
    if (data.password.length === 0 || data.email.length === 0) {
        toast_fail("Please enter valid details");
        return false;
    } else if (!mailtest(data.email)) {
        return false;
    }
    return true;
}
// this is for Store cookies for sake of the assignment i have give 1 year lifetime to cookie
export function storeCookie(token,flag)
{
      const date = new Date();
                date.setDate(date.getDate() + 365); 
                Cookie.set('tars-user-token', token, { 
                    secure: true, 
                    sameSite: 'strict', 
                    expires: date 
                });
                if(flag)
                {
                    toast_success(`Login Successfully `);
                
                }
            }