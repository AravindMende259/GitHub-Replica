import React from "react";
import { useGlobalContext } from "../context/context";

import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

const UserInfo = () => {
  const { githubUser } = useGlobalContext();

  // console.log(githubUser.followers, "Length....................");
  return (
    <div className="row m-5">
      <div className="col-md-3 pb-4">
        <div className="card">
          <div className="card-body d-flex align-items-center">
            <div className="rounded-circle bgdesign1 me-4">
            <h2><GoRepo /></h2> 
            </div>
         <div>
                      <h4 className="card-text">{githubUser.public_repos}</h4>
                      <h6>Repos</h6>
         </div>

           
          </div>
        </div>
      </div>

      <div className="col-md-3 pb-4">
        <div className="card">
          <div className="card-body d-flex align-items-center">
          <div className="rounded-circle bgdesign2  me-4">
         <h2> <FiUsers/></h2>
          </div>
          <div>
            <h2 className="card-text">{githubUser.followers}</h2>
            <h6>Followers</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card">
          <div className="card-body d-flex align-items-center">
          <div className="rounded-circle bgdesign3 me-4">
          <h2>    <FiUserPlus/></h2>
           </div>
           <div>
            <h2 className="card-text">{githubUser.following}</h2>
            <h6>Following</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card">
          <div className="card-body d-flex align-items-center">
          <div className="rounded-circle bgdesign4 me-4">
           <h2> <GoGist /></h2>
            </div>
            <div>            <h2 className="card-text">{githubUser.public_gists}</h2>
            <h6>Gists</h6>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default UserInfo;
