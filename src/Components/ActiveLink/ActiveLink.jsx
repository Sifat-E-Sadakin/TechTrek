import React, { Children } from 'react';
import {
    Outlet,
    NavLink,
    useLoaderData,
    Form,
    redirect,
  } from "react-router-dom";

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isActive
            ? "text-black"
            
            : "text-blue-500 hover:text-blue-900"
        }
      >
        {children}
        {/* other code */}
      </NavLink>
    );
};

export default ActiveLink;