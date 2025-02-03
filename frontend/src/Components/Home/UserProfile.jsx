import Dropdown from 'react-bootstrap/Dropdown';
import { FaUserAlt } from "react-icons/fa";
import {Items} from './LeftBar'
import { useContext } from 'react';
import { UserContext } from '../Context/Context';
import { RemoveToken } from '../Context/getToken';
function BasicExample({collapsed}) {
  const {UserName,setUser,SetUserName}=useContext(UserContext)
  function Logout()
  {
    RemoveToken();
    setUser(null)
  }
  return (
    <Dropdown>
      <Dropdown.Toggle className='bg-white border-0' id="dropdown-basic">
       <Items  name={UserName.name} icon=<FaUserAlt style={{color:'black'}} size={24} /> collapsed={collapsed} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <div className='p-2'>
      <p className='fw-bold'>{UserName.email}</p>
      <button className='btn btn-danger w-100' onClick={Logout}>Logout</button>
      </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;