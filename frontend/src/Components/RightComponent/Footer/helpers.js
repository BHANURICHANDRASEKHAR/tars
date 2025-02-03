import axios from "axios";
import { toast_fail,toast_success } from '../../alert/alert'
import { ApiLink } from "../../../App";
export default async function Upload_posts(setLoader,data,token,PostsData,SetPostsData)
{ 
  if(token)
  {
    var ImageLink=''
  if(check(data))
   {
    setLoader(true)
     if(data.img!='')
     {
        ImageLink+=await UploadImage(data)
     }
    try{
        const res=await axios.post(`${ApiLink}/notes/post`,{caption:data.caption,ImageLink:ImageLink,description:data.description},{
            headers: {
               'user-access-token':token
            },
        })
        if(res.data.status)
        {
            toast_success('Post uploaded successfully')
            const New_Feed =[...PostsData,res.data.data]
          
            SetPostsData(New_Feed)
            setLoader(false)
        }
        else
        {
            
            toast_fail('Failed to upload post')
            setLoader(false)
        }
    }
    catch(err)
    {
        console.log(err.message)
        toast_fail('Failed to upload post')
        setLoader(false)
    }
   }
  }
  else{
    toast_fail('User not authenticated Please login')
  }
}
function check(data){
    if(data.caption.trim().length==0)
    {
        toast_fail('Please Validate caption')
        return false;
    }
    return true;
}
export async function UploadImage(data) {
    if (!data.img) {
        console.error("No image file provided");
        return;
    }
    const formData = new FormData();
    formData.append('file', data.img); 
    formData.append('upload_preset', 'chandu_tars'); 
    formData.append('cloud_name', 'dbz5isrvx');  
    
    try {
        const res = await axios.post('https://api.cloudinary.com/v1_1/dbz5isrvx/image/upload', formData);
        
        return res.data.secure_url;  
    } catch (err) {
        console.error('Upload error:', err);
        return null;
    }
}
// export async function GetFeeds(SetLoading,SetFeeds)
// {
//     SetLoading(true)
//     try{
//         const res=await axios.get(`${ApiLink}/feeds/get`)
//         SetFeeds(res.data.data)
//         SetLoading(false)
//     }
//     catch(err)
//     {
//         SetLoading(false)
//         toast_fail('Failed to fetch feeds')
//     }
// }
export  async function Get_posts(setLoader,token,SetPostsData)
{
  if(token)
   {  

    setLoader(true)
    try{
        const res=await axios.get(`${ApiLink}/notes/get`,{
            headers: {
               'user-access-token':token
            },
        })
       
        if(res.data.status)
        {
           
            SetPostsData(res.data.data)
            setLoader(false)
        }
        else
        {
           
            toast_fail('Failed to load posts')
            setLoader(false)
        }
    }
    catch(err)
    {
        console.log(err.message)
        toast_fail('Failed to load post')
        setLoader(false)
    }
   }
}
export  async function Delete_post(setLoader,id,index,SetPostsData,PostsData)
{
    setLoader(true)
    try{
        const res=await axios.post(`${ApiLink}/notes/delete`,{
            id:id,
        })
        if(res.data.status)
        {
            const newData=PostsData.splice(index, 1)
            SetPostsData(newData)
            toast_success('Post deleted successfully')
        }
       
    }
    catch(err)
    {
        console.log(err.message)
        toast_fail('Failed to load post')
        setLoader(false)
    }
}