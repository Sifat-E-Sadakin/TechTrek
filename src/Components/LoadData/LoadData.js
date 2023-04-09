let LoadCategoryList = async()=>{

    let listRaw= await fetch('jobCategory.json');
    let list = await listRaw.json();

    return list;

}

let LoadTrendingJobs = async()=>{
    let listRaw = await fetch('TrendingJobs.json');
    let list = listRaw.json();

    return list;
}

export {
    LoadCategoryList,
    LoadTrendingJobs
}