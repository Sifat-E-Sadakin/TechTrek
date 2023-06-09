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
import { LoadAppliedJobs, LoadCategoryList, LoadJobDetails, LoadTrendingJobs } from './Components/LoadData/LoadData';
import JobDetails from './Components/JobDetails/JobDetails';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import AssignmentChart from './Components/AssignmentChart/AssignmentChart';
import QNA from './Components/QNA/QNA';
import NotFound from './Components/NotFound.jsx/NotFound';
import Footer from './Components/Footer/Footer';

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
      },
      {
        path: '/appliedJobs/jobDetails/:Id',
        element: <JobDetails></JobDetails>,
        loader: ({params})=>LoadJobDetails(params.Id)
      },
     
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
         loader: LoadAppliedJobs,
       
      },
      {
        path: '/statistics',
        element: <AssignmentChart></AssignmentChart>

      },
      {
        path: '/qna',
        element: <QNA></QNA>

      },
      {
        path: '/*',
        element: <NotFound>s</NotFound>
      }
     
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
