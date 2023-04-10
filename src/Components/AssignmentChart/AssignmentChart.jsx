import React from 'react';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
 
  Legend,
  Scatter
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

      const data2 = [
        {
          name: "Assignment 01",
          expected_Marks: 50,
          marks: 60
        },
        {
          name: "Assignment 02",
          expected_Marks: 60,
          marks: 60
        },
        {
          name: "Assignment 03",
          expected_Marks: 55,
          marks: 60
        },
        {
          name: "Assignment 04",
          expected_Marks: 60,
          marks: 55
        },
        {
          name: "Assignment 05",
          expected_Marks: 60,
          marks: 60
        },
        {
          name: "Assignment 06",
          expected_Marks: 60,
          marks: 60
        },
        {
          name: "Assignment 07",
          expected_Marks: 60,
          marks: 60
        },
        {
          name: "Assignment 08",
          expected_Marks: 60,
          marks: 60
        }
      ];
      
  
     
      
      
    return (
        <div className='text-center py-10'>
            <h1>Assignment Marks</h1>

            <div>
            <ComposedChart
      width={1100}
      height={400}
      data={data2}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      
      <Bar dataKey="marks" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="expected_Marks" stroke="#ff7300" />
   
    </ComposedChart>
            </div>

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