import React from 'react';
import Header from '../Header/Header';
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';

const Landing = () => {

   let categoryList = useLoaderData();

   
    return (
        <div>
            <Header></Header>

            <JobCategory categoryList={categoryList}></JobCategory>
            
            
        </div>
    );
};

export default Landing;