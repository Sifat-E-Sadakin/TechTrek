import React from 'react';
import ShowTrendingJobs from '../ShowTrendingJobs/ShowTrendingJobs';

const TrendingJobs = ({trendingJobs}) => {

    
    return (
        <div className='container mx-auto' >
            <div className='text-center'>
                <h1 className='my-4'>Trending Jobs</h1>
                <p>The jobs Listed Below are the most attractive jobs now a days...</p>

            </div>
            <div className='sm:grid grid-cols-2 '>
                {
                    trendingJobs.map(job=> <ShowTrendingJobs jobs={job} key={job.id}></ShowTrendingJobs>)
                }

            </div>
           
        </div>
    );
};

export default TrendingJobs;