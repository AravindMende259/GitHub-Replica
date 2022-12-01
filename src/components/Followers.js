import React from "react";
import { GithubContext, useGlobalContext } from "../context/context";
import styled from "styled-components";

const Followers = () => {
  const { followers,loading } = useGlobalContext();
  return (
    
      <div className="flex-column  m-2 mb-4">
        {loading?<h3>Loading...</h3>:followers.map((follower,index) => {
          return (
            <div className="d-flex  m-2 mb-4" key={index}>
              <img className="rounded-circle" style={{height:50,width:50}} src={follower.avatar_url} alt={follower.login} />
              <div className="ms-4 p-0">
              <p className="paddingP ">{follower.login}</p>
              <a className="text-decoration-none text-dark" href={follower.html_url}>{follower.url}</a>
              </div>
              
            </div>
          );
        })}
      </div>
   
  );
};

export default Followers;
