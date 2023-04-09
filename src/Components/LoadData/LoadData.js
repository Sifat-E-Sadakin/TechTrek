import { getShoppingCart } from "../../Utilities/LocalStorage";

let LoadCategoryList = async()=>{

    let listRaw= await fetch('/jobCategory.json');
    let list = await listRaw.json();

    return list;

}

let LoadTrendingJobs = async()=>{
    let listRaw = await fetch('TrendingJobs.json');
    let list = listRaw.json();

    return list;
}

let LoadJobDetails= async(id)=>{

    let listRaw = await fetch('/TrendingJobs.json');
    let list = await listRaw.json();

    let getDetails= list.find(job=> job.id==id);
    // console.log(getDetails);

    return getDetails;

}

let LoadAppliedJobs= async()=>{

    let listRaw = await fetch('/TrendingJobs.json');
    let list = await listRaw.json();

    let appliedJobs = getShoppingCart();
   
    let appliedJobList = [];

    for (const id in appliedJobs) {

        let jobList = list.find(job=> job.id==id);

        if(jobList){
            appliedJobList.push(jobList);
        }


        
    }
    
  
    return appliedJobList;

}

export {
    LoadCategoryList,
    LoadTrendingJobs,
    LoadJobDetails,
    LoadAppliedJobs
}