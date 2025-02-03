import React from 'react'

export default function ImageUpload({SetData,PostData}) {
    // const onHandler=(e)=>{
    //     const {name,value}=e.target
    //     SetData({...feedData,[name]:value})
    // }
    const handleFileChange=(e)=>{
       
        SetData({...PostData,'img':e.target.files[0]})
      
    }
  return (
    <div className='mt-2'>
      <label className='mb-2'>Upload a Image</label>
      <input type="file" className='w-100' onChange={(e)=>{handleFileChange(e)}} /></div>
  )
}
