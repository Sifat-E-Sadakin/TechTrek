import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {

    let jobDetails= useLoaderData();
    // console.log(jobDetails);

    let {job_description,job_responsibility,educational_requirement, experience, phone,email , salary, job_title, location }=jobDetails;

    return (
        <div>
            <div className='text-center py-10 bg-blue-100'>
                <h1>Job Details</h1>
            </div>

            <div className='py-10' style={{display:'grid', gridTemplateColumns:'2fr 1fr', gap:"50px"}}>
                 <div>
                    <h2 className='my-5'><span className='font-semibold'>Job Description: </span> {job_description}</h2>
                    <h2 className='my-5'><span className='font-semibold'>Job Responsibility: </span> {job_responsibility}</h2>
                    <h2 className='my-5'><span className='font-semibold'>Educational Requirement: </span> <br /> {educational_requirement}</h2>
                    <h2 className='my-5'><span className='font-semibold'>Experience: </span> <br /> {experience}</h2>


                 </div>
                 <div className='bg-blue-200 p-5'>
                    <h2 className='font-bold my-2'>Job Details</h2>
                    <hr />
                    <div className='my-2 mt-5'>
                        <h2><span className='font-semibold  '>Salary: </span>{salary}</h2>
                    </div>
                    <div className='my-2'>
                        <h2><span className='font-semibold  '>Job Title: </span>{job_title}</h2>
                    </div>
                    
                    

                    <h2 className='font-bold my-2 mt-10'>Contact Information</h2>
                    <hr />
                    <h2 className='py-1 pt-5'><span className='font-semibold '>Phone: </span>{phone}</h2>
                    <h2 className='py-1'><span className='font-semibold '>Email: </span>{email}</h2>
                    <h2 className='py-1'><span className='font-semibold '>Address: </span>{location}</h2>

                    <button className='btn relative top-20 w-full'>Apply Now</button>
                </div>
                

            </div>
            
           
        </div>
    );
};

export default JobDetails;