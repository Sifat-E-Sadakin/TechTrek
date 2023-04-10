import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLocationDot, faMoneyBill } from '@fortawesome/free-solid-svg-icons'


const ShowTrendingJobs = ({jobs}) => {
    let {job_title, company, job_category, location,  salary, logo, id }= jobs;

    return (
        <div className='border border-blue-500 bg-blue-50 m-5 p-16'>
            <div className='py-5'>
                <img src={logo} alt="" id='logo' style={{width:'250px'}} />
            </div>

            <div>
                <h3 className='font-semibold text-2xl py-3'>{job_title}</h3>
                
            </div>
            <div>
                <h4 className='py-2'>{company}</h4>

            </div>
            <div className='flex py-4 ' >
                <h5 className='mx-1 block border border-blue-400 bg-blue-700 text-white rounded p-2 ' >{job_category[0]}</h5>
                <h5 className='mx-1 block border border-blue-400 bg-blue-700 text-white rounded p-2 ' >{job_category[1]}</h5>

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
            <button className='btn btn-sm'>
               <Link to={`./jobDetails/${id}`}>View Details</Link> 
            </button>
        </div>
    );
};

export default ShowTrendingJobs;