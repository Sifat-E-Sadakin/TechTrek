import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLocation, faLocationDot, faMailBulk, faMoneyBill, faMoneyBill1, faMoneyBill1Wave, faPhone, faUser, faUserAlt, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { addToDb, getShoppingCart } from '../../Utilities/LocalStorage';
import Footer from '../Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';
import './JobDetails.css'

const JobDetails = () => {

    let jobDetails= useLoaderData();
    // console.log(jobDetails);

    let {id, job_description,job_responsibility,educational_requirement, experience, phone,email , salary, job_title, location }=jobDetails;


    const notify = () => toast('Applied Successfully');

    let apply = (id)=>{

        let check = getShoppingCart();
        console.log(check);

        for (const iterator in check) {

            if(iterator == id){
                console.log("allready in");
                toast('Already Applied ')
                return;
            }

            
        }

        // console.log('applied',id);
        addToDb(id);
        notify();

    }

    useEffect(()=>{
        window.scroll(0,0);
    },[])

    

    return (
        <div>
            <div className='text-center py-10 bg-blue-100'>
                <h1>Job Details</h1>
            </div>

            <div className='py-10 container mx-auto' id='jobDetails' >
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
                        <h2><FontAwesomeIcon icon={faMoneyBill1Wave} /><span className='font-semibold  '> Salary: </span>{salary}</h2>
                    </div>
                    <div className='my-2'>
                        <h2><FontAwesomeIcon icon={faUserGraduate} /><span className='font-semibold  '> Job Title: </span>{job_title}</h2>
                    </div>
                    
                    

                    <h2 className='font-bold my-2 mt-10'>Contact Information</h2>
                    <hr />
                    <h2 className='py-1 pt-5'><FontAwesomeIcon icon={faPhone} /><span className='font-semibold '> Phone: </span>{phone}</h2>
                    <h2 className='py-1'><FontAwesomeIcon icon={faMailBulk} /><span className='font-semibold '>  Email: </span>{email}</h2>
                    <h2 className='py-1'><FontAwesomeIcon icon={faLocation} /><span className='font-semibold '> Address: </span>{location}</h2>

                    <button className='btn relative top-20 w-full' onClick={()=>apply(id)}>Apply Now</button>
                </div>
                

            </div>

            <Toaster></Toaster>
            
           <Footer></Footer>
        </div>
    );
};

export default JobDetails;