import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header';
import JobCategory from './Components/JobCategory/JobCategory';
import Landing from './Components/Landing/Landing';
import { LoadCategoryList, LoadJobDetails, LoadTrendingJobs } from './Components/LoadData/LoadData';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Landing></Landing>,
        loader: LoadCategoryList,
       
      },
      {
        path: '/jobDetails/:Id',
        element: <JobDetails></JobDetails>,
        loader: ({params})=>LoadJobDetails(params.Id)
      }
     
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
