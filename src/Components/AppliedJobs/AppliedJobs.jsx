import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAppliedJobs from '../ShowAppliedJobs/ShowAppliedJobs';
import { getShoppingCart } from '../../Utilities/LocalStorage';
import Footer from '../Footer/Footer';

const AppliedJobs = () => {



    
    let [listOfAppliedJobs, setAppliedJobs] = useState([])
    let [onsiteJobs, setOnsiteJobs] = useState([])
    let [remoteJobs, setRemoteJobs] = useState([])

    let fullList = useLoaderData();
    console.log(fullList);

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

    function filterOnsite(){

        let allList= listOfAppliedJobs;
        let onsite = allList.filter(job=> job.job_category[1]== "Onsite" | job.job_category[0] == "Onsite"  )
        setOnsiteJobs(onsite);

        let all = document.getElementById('allJobs');
        all.style.display='none';

        let remote= document.getElementById('remoteJobs');
        remote.style.display= 'none';
    
        let self= document.getElementById('onsiteJobs');
        self.style.display= 'block';
      
        






    }

   

    let filterRemote = ()=>{

        

        let allList= listOfAppliedJobs;
        let remote = allList.filter(job=> job.job_category[0]== 'Remote' | job.job_category[1]== 'Remote')
        setRemoteJobs(remote);

        let all = document.getElementById('allJobs');
        all.style.display='none';

        let onsite= document.getElementById('onsiteJobs');
        onsite.style.display= 'none';
       
        let self= document.getElementById('remoteJobs');
        self.style.display= 'block';



    }

    // if(listOfAppliedJobs != 5){
    //     setAppliedJobs(fullList)
    // }


    return (
        <div className=''>
            <div className='text-center py-10 bg-blue-50'>
                  <h1>Applied Jobs</h1>
            </div>


            <div className='container mx-auto'>
            

            <div className='flex justify-end'>
                <button onClick={filterOnsite} className='mr-2 block border border-blue-400 bg-blue-50 rounded p-2 ' >Onsite</button>
                <button onClick={filterRemote} className='mr-2 block border border-blue-400 bg-blue-50 rounded p-2 ' >Remote</button>
            </div>
          
           
            <div id='allJobs'>
                {
                    listOfAppliedJobs.map(job=> <ShowAppliedJobs list={job} key={job.id}></ShowAppliedJobs>)
                }

            </div>
            <div id='onsiteJobs'>
                {
                    onsiteJobs.map(job=> <ShowAppliedJobs list={job} key={job.id}></ShowAppliedJobs>)
                }

            </div>
            <div id='remoteJobs'>
                {
                    remoteJobs.map(job=> <ShowAppliedJobs list={job} key={job.id}></ShowAppliedJobs>)
                }

            </div>



          
        </div>
        <Footer></Footer>


            </div>

    

            
           
    );
};

export default AppliedJobs;