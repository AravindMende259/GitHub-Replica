import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { GithubContext, useGlobalContext } from '../context/context';
const Search = () => {


  const{handleSubmit,setSearch}=useGlobalContext();
  return  <form className='container'>
  <div className=" mt-5 d-flex input-group ">
    
    <input className="form-control input-sm" placeholder='Search' id="inputsm" type="text" onChange={e=>setSearch(e.target.value)} />
    
    <button type="button" onClick={handleSubmit} className="btn btn-outline-primary">Search</button>
  </div>
   
</form>
  
};


export default Search;
