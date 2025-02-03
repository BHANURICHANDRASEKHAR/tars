import axios from 'axios'
import { ApiLink } from '../../../../App'
import {UploadImage} from '../../Footer/helpers'
import { toast_fail, toast_success } from '../../../alert/alert'
export default async function UpdateNotes(SetLoader,SetResults,Results,Index,Data,Img)
{   
    SetLoader(true)
    if(Img.length!=''){
    
      var ImageLink=await UploadImage({img:Img})
      Data.Img.push(ImageLink)
    }
    try{
        const res=await axios.post(`${ApiLink}/notes/update`,{Data})
        if(res.data.status)
        {
            Results[Index]=Data;
            SetResults(Results)
            toast_success('Note Updated Successfully')
        }
        else{
            toast_fail('Failed to Update Note')
        }
    }
    catch(err){
        toast_fail('Failed to Update Note')
    }
}