import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';
import TrendingJobs from '../TrendingJobs/TrendingJobs';
import { LoadTrendingJobs } from '../LoadData/LoadData';

const Landing = () => {

   let categoryList = useLoaderData();

   let [trendingJobs, setTrendingJobs]= useState([]);

   useEffect(()=>{
    
        fetch('TrendingJobs.json')
        .then(res=> res.json())
        .then(data=> setTrendingJobs(data))
},[]);

   
   console.log(trendingJobs);

   
    return (
        <div>
            <Header></Header>

            <JobCategory categoryList={categoryList}></JobCategory>

            <TrendingJobs trendingJobs={trendingJobs}></TrendingJobs>
            
            
        </div>
    );
};

export default Landing;