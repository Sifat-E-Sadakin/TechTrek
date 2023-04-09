import React from 'react';
import Header from '../Header/Header';
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';

const Landing = () => {

   
    return (
        <div>
            <Header></Header>

            <JobCategory></JobCategory>
            
            
        </div>
    );
};

export default Landing;