import axios from 'axios'
import {ApiLink} from '../../../App'
import { toast_fail } from '../../alert/alert'
export default async function GetData(SetLoader,SetData,token)
{
    if(token){
        SetLoader(true)
     try{
        const res=await axios.get(`${ApiLink}/getData`,{
            headers:{
               'user-access-token':token,
            }})
            if(res.data.status)
               {
                   SetData(res.data.data)
               }
           else{
               toast_fail('Failed to get data')
           }
     }
     catch(err)
     {
         toast_fail('Failed to get data')
     }
     finally{
        SetLoader(false)
     }
    }
    
}
