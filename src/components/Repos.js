import React from "react";
import styled from "styled-components";
import { GithubContext, useGlobalContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const { repos } = useGlobalContext();
  // console.log(repos, "Checking....................");

  let language = repos.reduce((total, item) => {
    const { language,stargazers_count } = item;
    if (!language) {
      return total;
    }
    if (!total[language]) {
      total[language] = { label: language, value: 1,stars:1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars:total[language].stars+stargazers_count
      };
    }
    return total;
  }, {});
 
  language = Object.values(language);
  // console.log(language, "dfasscfvgggggggggggggggggggggggggggs");

  const mostUsed=Object.values(language).sort((a,b)=>{
    return b.value-a.value
  }).slice(0,5)

  const mostPopular=Object.values(language).sort((a,b)=>{
return b.stars-a.stars;
  }).map((item)=>{
    return{...item,value:item.stars}
  }).slice(0,5);
  // console.log(mostPopular,"Checkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")


let{stars,forks}=repos.reduce((total,item)=>{
const{stargazers_count,name,forks}=item;
total.stars[stargazers_count]={label:name,value:stargazers_count};

total.forks[forks]={label:name,value:forks};

return total;
},
{
  stars:{},
  forks:{},
}
);

stars=Object.values(stars).slice(-5).reverse()
forks=Object.values(forks).slice(-5).reverse()

// console.log(forks,stars,"forksjkggggggggggggggggggggggggg")

  const dataSource = [
    { label: "HTML", value: 50 },
    { label: "css", value: 16 },
    { label: "JS", value: 34 },
  ];
  return (
    <div className="row mx-5 ">
    <div className="col-md-6 " style={{paddingBottom :'15px'}}>
      <div className="card ">
        <div className="mb-3">
        <Pie3D data={dataSource} />
      </div>
      </div>
      </div>

      
      <div className="col-md-6  ">
        <div className="card align-items-center">
          <div className="mb-3">
        <Column3D data={mostUsed} />
      </div>
    </div>
    </div>

    <div className="col-md-6  ">
        <div className="card align-items-center">
          <div className="mb-3">
        <Doughnut2D data={mostPopular} />
      </div>
    </div>
    </div>

    <div className="col-md-6  ">
        <div className="card">
          <div className="mb-3">
        <Bar3D data={forks} />
      </div>
    </div>
    </div>
    </div>
  );
};

export default Repos;
