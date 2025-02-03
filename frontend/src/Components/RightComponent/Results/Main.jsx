import React, { useContext, useEffect, useState } from 'react';
import CardContent from './Card';
import { Get_posts } from '../Footer/helpers';
import { UserContext } from '../../Context/Context';
import Nodata from './Nodata';
import { useLocation } from 'react-router-dom';

export default function Main() {
    const { user, Results, setfavorite, SetResults } = useContext(UserContext);
    const [Loader, SetLoader] = useState(false);
    const location = useLocation();
    
    useEffect(() => {
        if (Results.length === 0) {
            Get_posts(SetLoader, user, SetResults);
        }
    }, [user]); 

    useEffect(() => {
       
        if (location.pathname === "/favorite") {
          setfavorite(true);
      } else {
          setfavorite(false);
      }
    }, [location.pathname]);

    return (
        <div className="row" style={{ minHeight: '40vh', overflowY: 'scroll' }}>
            {(!Loader && Results.length === 0) ? <Nodata /> : <CardContent loader={Loader} />}
        </div>
    );
}
