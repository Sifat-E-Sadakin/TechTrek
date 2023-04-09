let LoadCategoryList = async()=>{

    let listRaw= await fetch('jobCategory.json');
    let list = await listRaw.json();

    return list;

}


export {LoadCategoryList}