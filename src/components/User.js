import React from "react";
import { useGlobalContext } from "../context/context";
import { FaBuilding, FaLocationArrow } from "react-icons/fa";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee, } from '@fortawesome/free-solid-svg-icons'

import Card from "./Card";
import Followers from "./Followers";
const User = () => {
  const { githubUser } = useGlobalContext();
  // console.log(githubUser.avatar_url);


  return (
   
      <div className="row mb-5 mx-5">
        <div className="col" style={{paddingBottom :'15px'}}>
          <div className="card p-4  position-relative">
            <div className="d-flex  m-2 mb-4">
              <img
                src={githubUser.avatar_url||'https://avatars.githubusercontent.com/u/75396460?v=4'}
                alt={githubUser.login||'Aravind'}
                className="  rounded-circle me-4 profilePic"
              />
              <div className="me-5">
                <h5>{githubUser.name||'Aravind Mende'}</h5>
                <p>@{githubUser.login||'aravindmende'}</p>
              </div>
              <button className="btn btn-outline-success  btnset  ">Follow</button>
            </div>
            <p>{githubUser.bio}</p>
            <p ><FaBuilding className="me-3"/>{githubUser.company||'TCS'}</p>
            <p><i className="fa fa-map-marker me-3 " aria-hidden="true"></i>{githubUser.location||'Chennai'}</p>
            <p> <i className="fa fa-link me-3" aria-hidden="true"></i>{githubUser.blog||'https://github.com/AravindMende259?tab=repositories'}</p>
          </div>
        </div>
        <div className="col ">
          <div className="card  overflow-auto " style={{height: "318px"}}>
            <Followers/>
          </div>
        </div>
      </div>
  
  );
};

export default User;
