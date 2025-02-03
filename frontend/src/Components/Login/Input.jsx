import React from 'react'

export default function Input({lable,handler,value,type,placeholder,name}) {
  return (
    <div className="form-group mt-3">
    {lable&&<label>{lable}&ensp;<b className='text-danger fs-5'>*</b></label>}
    <input
      type={type}
      name={name}
      className="form-control mt-1"
      placeholder={placeholder}
      value={value}
      onChange={handler}
    />
  </div>
  )
}
