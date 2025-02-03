import React, { useState,useEffect } from 'react'
import getToken from './getToken.js';
import { jwtDecode } from "jwt-decode";
export const UserContext=React.createContext();
export default function Context({children}) {
    const [user, setUser] = useState(null)
    const [UserName,SetUserName]=useState(null)
    const [Results, SetResults] = useState([])
    const [show,SetShow]=useState(false)
    const [favourite,setfavorite] = useState(false)
    const [filteredResults, setFilteredResults] = useState([]);
    const [showModal, setShowModal]=useState(false)
    const [SelectedIndex,SetSelectedIndex]=useState(null)
    useEffect(()=>{
    const token=getToken();
    setUser(token);
    if(token)
    {
      const res=jwtDecode(token);
      SetUserName(res)
    }
  
  },[user,show])

    return (
      <UserContext.Provider value={{UserName,filteredResults, setFilteredResults,favourite,setfavorite,SetUserName,SelectedIndex,SetSelectedIndex,showModal, setShowModal, user,setUser,show,SetShow,Results, SetResults}}>
        {children}
      </UserContext.Provider>
    )
  }
  
