import React, { useState } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const {
    // Auth state:
    error,
    isAuthenticated,
    isLoading,
    user,
    // Auth methods:

    loginWithRedirect,
    logout,
  } = useAuth0();
// console.log(isAuthenticated,isLoading,user)
let dispName=''

  // const dispName=user.name;
  if(isAuthenticated){
     dispName=user.name;
    // console.log(dispName,"Display name tagggg")
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      {/* <button onClick={loginWithRedirect}>login</button> */}
      {isLoading?<>Loading...</>: <h2>{dispName}</h2>}
      
      {/* <button onClick={logout}>logout</button> */}

      <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
    </nav>
  );
};

export default Navbar;
