import React, { useContext } from 'react';
import { FaHome } from 'react-icons/fa';
import { IoStar } from 'react-icons/io5';
import UserProfile from './UserProfile';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import LoginButton from './LoginButton';
import { UserContext } from '../Context/Context';
export default function LeftBar({collapsed}) {
  const data = [
    {
      name: 'Home',
      icon: <FaHome size={24} />,
      path: '/',
    },
    {
      name: 'Favourite',
      icon: <IoStar size={24} />,
      path: '/favorite',
    },
  ];
  const {user}=useContext(UserContext)
  return (
    <div className="container-fluid " style={{height:'63vh'}}>
     <Logo collapsed={collapsed} />
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-12 mb-2">
            <NavLink to={item.path} className="left-bar-item d-flex align-items-center text-black">
            <Items name={item.name} icon={item.icon} collapsed={collapsed} />
            </NavLink>
          </div>
        ))}
      </div>
      <div className="row d-flex  h-100 align-items-end ">
        <div className="col-12">
           {user ?
            <UserProfile collapsed={collapsed} />
            :
            <LoginButton collapsed={collapsed}/>
         }
        
        </div>
      </div>
    </div>
  );
}
export const Items=({name,icon,collapsed})=>{
   return( <div className="left-bar-item  p-1 d-flex align-items-center text-black">
    <span className="me-2">{icon }</span>
   {!collapsed&&<span className="fs-6 mt-1 " >{name}</span>}
  </div>)
}