import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/Context'
import { IoLogIn } from "react-icons/io5";
export default function LoginButton({collapsed}) {
  const {show,SetShow}=useContext(UserContext)
  const handleClick=()=>{
    SetShow(true)
  }
  return (
   <React.Fragment>
   {
    collapsed ? (
      <IoLogIn size={24} onClick={handleClick}/>
    ) : (
      <button className='btn btn-primary w-100' onClick={handleClick}>Login</button>

    )


  }
  </React.Fragment>
  )
}
