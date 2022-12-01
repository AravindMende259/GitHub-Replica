import React from 'react';
import { Route, Navigate,Routes } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ( { children, ...rest }) => {
  const {
    // Auth state:
    error,
    isAuthenticated,
    isLoading,
    user,
    // Auth methods:
    getAccessTokenSilently,
    getAccessTokenWithPopup,
    getIdTokenClaims,
    loginWithRedirect,
    loginWithPopup,
    logout,
  } = useAuth0();

  const isUser=isAuthenticated && user;
  console.log(isUser,user,"Valllll");

  

return (
  // <h1>{isUser}</h1>
<Routes >
  <Route 
  {...rest}
  render={()=>{
return isUser?<Navigate to="/dashboard"></Navigate>:<Navigate to="/login"></Navigate>
  }}
  >

</Route>
</Routes> 

)

}

  

export default PrivateRoute;
