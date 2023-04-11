import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLocationDot, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const ShowAppliedJobs = ({list}) => {

   

    // console.log(list);



    let {job_title, company, job_category, location,  salary, logo, id }= list

    return (
        <div>
             
             

            <div className='flex justify-between border p-5 items-center m-5'>

            <div className='md:flex '>
                <div className='md:bg-blue-100 md:p-10'>
                    <img src={logo} alt="" style={{width:'250px',height:''}} />
                </div>
                <div className='mx-3'>
                    <h2 className='text-2xl font-semibold'>{job_title}</h2>
                    <h2>{company}</h2>
                    <div className='flex py-2'>
                        <h5 className='mr-2 block border border-blue-400 bg-blue-50 rounded p-2 ' >{job_category[0]}</h5>
                        <h5 className='mr-2 block border border-blue-400 bg-blue-50 rounded p-2 ' >{job_category[1]}</h5>
                    </div>
                    <div className='flex gap-5 py-3'>
                <div>
                <FontAwesomeIcon icon={faLocationDot} />
                <span> {location}</span>

                </div>
                <div>
                <FontAwesomeIcon icon={faMoneyBill} />
                <span>  {salary}</span>
                    

                </div>
            </div>

                </div>
                
            </div>
            <div>
                    <button className='btn'><Link to={`jobDetails/${id}`}> View Details</Link></button>
                </div>

            </div>

        </div>
        
    );
};

export default ShowAppliedJobs;
