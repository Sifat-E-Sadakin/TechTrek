import React from 'react';
import ShowCategoryList from '../ShowCategoryList/ShowCategoryList';

const JobCategory = ({categoryList}) => {

    
    return (
        <div className='text-center m-20 container mx-auto'>
            <h1 className='m-4'>Job Category list</h1>
            <p>Find your job According to your background...</p>

            <div className='md:flex justify-between mt-5 gap-3 container mx-auto '>
            {
                categoryList.map(job=> <ShowCategoryList list={job} key={job.id} ></ShowCategoryList> )
            }

            </div>

            
        </div>
    );
};

export default JobCategory;