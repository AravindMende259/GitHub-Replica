import React from "react";

import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="text-center min-vh-100 bg-danger text-white d-flex align-items-center ">
      <div className=" h-100 w-100 ">
        <h1>404</h1>
        <h3>Sorry, The Page You Tried Cannot Be Found</h3>

        <Link to="/">
          <button>Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
