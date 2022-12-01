import React from 'react';

import {Navigate, Outlet} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './Dashboard';




const  ProtectedRoutes=({children}) =>{
const{isAuthenticated,user}=useAuth0();
const isUser=isAuthenticated &&user

if(!isUser){
    console.log("Coming not user")
   return <Navigate to="/login"/>
}
console.log("Coming user........................")
return children;

// console.log("authenticated#######################################################################",isAuthenticated,user)
//     // const isAuthenticated=true
//     // const auth=false;
//     return isUser?<Outlet/>:<Navigate to="/login"/>
}

export default ProtectedRoutes;