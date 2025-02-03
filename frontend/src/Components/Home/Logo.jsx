import React from 'react'
import { Items } from './LeftBar'
export default function Logo({collapsed}) {
  return (
    <div className='row'>
    <div  className="col-12 mb-2">
    <Items  name=<b>AI Notes</b> icon=<img src='https://internshala-uploads.internshala.com/logo%2F602d30df3d3831613574367.png.webp' className='' height='24' width='24' alt='Tars Logo' />
      collapsed={collapsed} />
    </div>
    <hr style={{fontSize:'20px'}}/>
    </div>
  )
}
