import React from 'react';
import JobCategory from '../JobCategory/JobCategory';

const Header = () => {
    return (
        <div className=' w-full bg-blue-50'>
            <div className=' md:grid grid-cols-2 w-full p-4 rounded items-center bg-blue-50 '>
            <div>
                <div className='m-2'>
                    <h1>Take Your <br /> First step <br />  <span className='text-blue-600'>ASAP</span> </h1>

                </div>
                    
                <div className='m-2'>
                Welcome to our job hunting website! We connect job seekers with top employers across industries, offering a wide range of opportunities from entry to senior-level positions. Our personalized search tools and job alerts ensure you never miss a chance to find your dream job. Start your search today and let us help you take the next step in your career!
                </div>
                <div className='my-5'>
                    <button className='btn'>Get started</button>

                </div>

            </div>

            <div>
                <img src="./assets/All Images/P3OLGJ1 copy 1.png" alt="" />

            </div>
            
        </div>

       

        </div>
        
    );
};

export default Header;