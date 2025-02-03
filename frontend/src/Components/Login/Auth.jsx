import React, { useState } from "react"
import './Auth.css'
import Login from "./Login"
import ForgotPassword from "./ForgotPassword"
import Signup from "./Signup"
export default function () {
  let [authMode, setAuthMode] = useState("signin")
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  if (authMode === "signin") {
    return (
     <Login authMode={authMode} changeAuthMode={changeAuthMode} setAuthMode={setAuthMode}/>
    )
  }
  else if(authMode === "signup") {
  return (
   <Signup setAuthMode={setAuthMode} changeAuthMode={changeAuthMode}/>
  )}
  else if(authMode === "ForgotPassWord") {
  return (
   <ForgotPassword setAuthMode={setAuthMode} changeAuthMode={changeAuthMode}/>
  )}
}