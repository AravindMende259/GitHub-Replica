import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';
const Login = () => {

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

  console.log("coming here.......",loginWithRedirect,user)

  return <div className='text-center'> 
  
  <div className='text-center min-vh-100  d-flex align-items-center' >
<div className="h-100 w-100">
<img className='size' src={loginImg} alt="loginImg" />

<h1>Github user</h1>
<button className='btn btn-info' onClick={loginWithRedirect}>LOGIN/SIGN UP</button>
</div>


</div>

  </div>

};
// const Wrapper = styled.section`
//   min-height: 100vh;
//   display: grid;
//   place-items: center;
//   .container {
//     width: 90vw;
//     max-width: 600px;
//     text-align: center;
//   }
//   img {
//     margin-bottom: 2rem;
//   }
//   h1 {
//     margin-bottom: 1.5rem;
//   }
// `;
export default Login;
