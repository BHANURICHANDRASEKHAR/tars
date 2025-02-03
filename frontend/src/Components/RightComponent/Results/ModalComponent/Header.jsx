import React,{useContext} from 'react';
import { BsArrowsAngleExpand } from "react-icons/bs";
import { TbArrowsCross } from "react-icons/tb";
import { CiStar } from "react-icons/ci";
import { UserContext } from '../../../Context/Context';
export default function Header({ handleClose, isFullScreen, setIsFullScreen,SetSelectedData,SelectedData,setIsEditable }) {
  function SetStar(){
    SetSelectedData((prev)=>{
      return {...prev, important:true}
    })
    setIsEditable(true)
  } 
  return (
    <div className="d-flex align-items-center bg-light px-3 py-2 w-100">
      
      <BsArrowsAngleExpand 
        size={25} 
        className='fw-bold' 
        style={{ cursor: "pointer" }} 
        onClick={() => setIsFullScreen(!isFullScreen)} 
      />

      <div className="ms-auto d-flex gap-3">
        <CiStar size={25} style={{ cursor: "pointer", background: SelectedData['important'] ? 'gold' : 'inherit' }}
        onClick={()=>{SetStar()}}/>
        <TbArrowsCross 
          onClick={handleClose} 
          size={25} 
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
