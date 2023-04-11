import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Navbar = () => {
    return (
        <div className=' bg-blue-200   sticky top-0 '>
            <div>
                <div className="navbar container mx-auto ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <Link  to='/'>Home</Link> 
                                <Link  to='/statistics'>Statistics</Link>
                                <Link  to='/appliedJobs'>Applied Jobs</Link>
                                <Link  to='/qna'>QNA</Link>
                                <Link  to='/contact'>Contact</Link>
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl">TechTrek</a>
                    </div>
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1 ">
                            <div className='flex gap-2'>
                            <ActiveLink to='/'>  Home</ActiveLink>
                            <ActiveLink to='/statistics'>Statistics</ActiveLink>
                            <ActiveLink to='/appliedJobs'>Applied Jobs</ActiveLink>
                            <ActiveLink to='/qna'>QNA</ActiveLink>
                            <ActiveLink to='/contacts'>Contacts</ActiveLink>

                            </div>
                            
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Start Applying</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;