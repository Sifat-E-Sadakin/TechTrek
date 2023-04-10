import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAppliedJobs from '../ShowAppliedJobs/ShowAppliedJobs';

const AppliedJobs = () => {

    let appliedJobs= useLoaderData();
    console.log(appliedJobs);

    return (
        <div>
            <div className='text-center py-10'>
                  <h1>Applied Jobs</h1>
            </div>


            <div className='flex justify-end'>
                <button className='mr-2 block border border-blue-400 bg-blue-50 rounded p-2 ' >Full time</button>
                <button className='mr-2 block border border-blue-400 bg-blue-50 rounded p-2 ' >Remote</button>
            </div>
          
            <div>
                {
                    appliedJobs.map(job=> <ShowAppliedJobs list={job} key={job.id}></ShowAppliedJobs>)
                }
            </div>



          
            
        </div>
    );
};

export default AppliedJobs;