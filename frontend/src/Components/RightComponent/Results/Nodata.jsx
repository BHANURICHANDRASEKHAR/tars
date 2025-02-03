import React from 'react'
import NodataImg from '../../../assets/nodata.gif'
export default function Nodata() {
  return (
    <div className='row d-flex justify-content-center align-items-center'>
     <img src={NodataImg} alt="No Data" className='w-50'/> 
    </div>
  )
}
