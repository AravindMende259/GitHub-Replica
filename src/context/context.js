import React, { useState, useEffect, useContext } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const userUrl='https://api.github.com/users/'

const GitHubContext=React.createContext();

const GitHubProvider=({children})=>{

    const[githubUser,setGithubUser]=useState('');
    const[repos,setRepos]=useState(mockRepos);
    const[followers,setFollowers]=useState(mockFollowers);
const[search,setSearch]=useState('');
const[loading,setLoading]=useState(false)
// const[data,setData]=useState('')

const fetchUser=async()=>{
   const finalUserUrl=`${userUrl}${search}`
const resp=await fetch(finalUserUrl);
const data=await resp.json();
setGithubUser(data);
console.log(data,"Values check for followers")
//data.followers_url


console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%",data)
// setFollowers(result.followers_url)
console.log(data.followers_url)

const selectedFollowersDetail=await fetch(data.followers_url)
const selectedFollowersDetailData=await selectedFollowersDetail.json()
console.log(selectedFollowersDetailData)
setFollowers(selectedFollowersDetailData)
const selectedRepos=await fetch(data.repos_url)
const selectedReposData=await selectedRepos.json()
console.log(selectedReposData,"Repos data")
setRepos(selectedReposData);

}

// useEffect(()=>{
//    fetchUser();
// },[handleSubmit])

const handleSubmit=()=>{
   fetchUser();
   console.log("search handle submit",search)
}

   return <GitHubContext.Provider value={{githubUser,repos,followers,setGithubUser,setRepos,setFollowers,handleSubmit,setSearch,loading,setLoading}}>{children}</GitHubContext.Provider>
}
export const useGlobalContext=()=>{
   return useContext(GitHubContext);
}

export  {GitHubProvider}