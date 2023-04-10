import React from 'react';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";


const AssignmentChart = () => {

    const data = [
        {
          subject: "Assignment 01",
          A:60,
        
          fullMark: 60
        },
        {
          subject: "Assignment 02",
          A: 60,
         
          fullMark: 60
        },
        {
          subject:"Assignment 03",
          A: 60,
         
          fullMark: 60
        },
        {
          subject: "Assignment 04",
          A: 55,
         
          fullMark: 60
        },
        {
          subject: "Assignment 05",
          A: 60,
          
          fullMark: 60
        },
        {
          subject: "Assignment 06",
          A: 60,
          
          fullMark: 60
        },
        {
          subject: "Assignment 07",
          A: 60,
          
          fullMark: 60
        },
        {
          subject: "Assignment 08",
          A: 60,
          
          fullMark: 60
        }
      ];
      
    return (
        <div className='text-center py-10'>
            <h1>Assignment Marks</h1>

            <div className='flex justify-center'>
            <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={700}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
       
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>

            </div>
           
            
        </div>
    );
};

export default AssignmentChart;