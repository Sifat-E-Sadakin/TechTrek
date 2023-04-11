import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';
import TrendingJobs from '../TrendingJobs/TrendingJobs';
import { LoadTrendingJobs } from '../LoadData/LoadData';
import { data } from 'autoprefixer';
import Footer from '../Footer/Footer';

const Landing = () => {

   let categoryList = useLoaderData();

   let [trendingJobs, setTrendingJobs]= useState([]);

  let [allJobList, setAllJobList]= useState([]);

 

   useEffect(()=>{
    
        fetch('TrendingJobs.json')
        .then(res=> res.json())
        .then(data=> processData(data))

        function processData(data){

            setAllJobList(data);
            
            
            let processedData=  data.slice(0,4);

            setTrendingJobs(processedData);
        }

        
},[]);

function showAll(){
    console.log(allJobList);
    setTrendingJobs(allJobList);

    let btn= document.getElementById('show-all');
     btn.style.display= 'none';


}






   
 

   
    return (
        <div>
            <Header></Header>

            <JobCategory categoryList={categoryList}></JobCategory>

            <TrendingJobs trendingJobs={trendingJobs}></TrendingJobs>

            <div className='flex justify-center'>
                 <button className='btn' onClick={showAll} id='show-all'>Show All Jobs</button>

            </div>

            <Footer></Footer>

            
            
            
        </div>
    );
};

export default Landing;