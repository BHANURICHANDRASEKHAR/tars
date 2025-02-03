import React, { useContext, useState } from 'react'
import ImageUpload from './ImageUpload'
import Input from '../../Login/Input'
import Voice from './Voice'
import Upload_posts from './helpers'
import { UserContext } from '../../Context/Context'
export default function main() {
    const [SpeechData,SetSpeechData] = useState({
       caption:'',
       description:'',
       img:''
    })
    const [Loader,SetLoader]=useState(false)
    function onHandler(e)
    {
        SetSpeechData({...SpeechData,[e.target.name]:e.target.value})
    }
    const {user,Results, SetResults} =useContext(UserContext)
    function submitForm(e)
    {
        e.preventDefault()
        Upload_posts(SetLoader,SpeechData,user,Results, SetResults)
 
    }
  return (
    <div className="container  rounded rounded-3 position-fixed bottom-0 start-5 w-100  p-2" style={{backgroundColor:'#F5F5F5'}}>
    <div className="row d-flex justify-content-center">
      <div className="col-md-2 mb-3">
        <ImageUpload SetData={SetSpeechData} PostData={SpeechData}/>
      </div>
      <div className="col-md-4 mt-2">
        <Input
          placeholder="Enter a Caption for Voice"
          name="caption"
          type="text"
          handler={onHandler}
          value={SpeechData.caption}
        />
      </div>
      <div className="col-md-3 mt-2 ">
        <Voice SetSpeechData={SetSpeechData}/>
      </div>
      <div className="col-md-3 mt-4">
      <button className='btn btn-outline-success' onClick={(e)=>submitForm(e)}>{Loader ?'Submiting...' :'Submit'}</button>
    </div>
    </div>
  </div>
    
  )
}
