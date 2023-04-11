import React from 'react';

const ShowCategoryList = ({list}) => {

   let {name, img, jobs}= list;
    return (
        <div>
            <div className='border p-10 bg-blue-100 rounded text-left my-3'>
                <img src={img} alt="" />
                <h4 className='font-semibold py-2'>Name: {name}</h4>
                <p>{jobs}</p>
            </div>
            
        </div>
    );
};

export default ShowCategoryList;