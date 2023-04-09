import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100 flex justify-between">
                <div>
                    <a className="btn btn-ghost normal-case text-xl">Hi Hackers</a>
                </div>
                
                <div className=''>
                    <Link className='m-2'to='/'>Home</Link>
                    <Link className='m-2' to='/statistics'>Statistics</Link>
                    <Link className='m-2'to='/appliedJobs'>Applied Jobs</Link>
                    <Link className='m-2'to='/qna'>QNA</Link>
                </div>
                <div>
                <button className='btn '>Start Applying</button>

                </div>

            
            </div>
            
        </div>
    );
};

export default Navbar;