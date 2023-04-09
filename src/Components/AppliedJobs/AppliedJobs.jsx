import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {

    let appliedJobs= useLoaderData();
    console.log(appliedJobs);

    return (
        <div>
            <h1>Applied Jobs</h1>
            
        </div>
    );
};

export default AppliedJobs;