import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAppliedJobs from '../ShowAppliedJobs/ShowAppliedJobs';
import { getShoppingCart } from '../../Utilities/LocalStorage';

const AppliedJobs = () => {



    
    let [listOfAppliedJobs, setAppliedJobs] = useState([])

    useEffect(()=>{

        fetch('/TrendingJobs.json')
        .then(res=> res.json())
        .then(data=> processData(data))

        function processData(data){
            
            let appliedJobs= getShoppingCart();

            let appliedList =[];
            // console.log(appliedJobs);

            for (const id in appliedJobs) {

                let applied = data.find(job => job.id == id);
                if(applied){
                    appliedList.push(applied);
                }
                
            }
            console.log(appliedList);

            setAppliedJobs(appliedList);

        }



    },[])
    









    

    return (
        <div>
            <div className='text-center py-10'>
                  <h1>Applied Jobs</h1>
            </div>


            <div className='flex justify-end'>
                <button className='mr-2 block border border-blue-400 bg-blue-50 rounded p-2 ' >Onsite</button>
                <button className='mr-2 block border border-blue-400 bg-blue-50 rounded p-2 ' >Remote</button>
            </div>
          
            <div>
                {
                    listOfAppliedJobs.map(job=> <ShowAppliedJobs list={job} key={job.id}></ShowAppliedJobs>)
                }
            </div>



          
            
        </div>
    );
};

export default AppliedJobs;