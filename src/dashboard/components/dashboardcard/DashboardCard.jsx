import React from "react";

import './DashboardCard.css'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";
  
  const data = [
    {
      name: "Page A",
      value: 4000,
      
    },
    {
      name: "Page B",
      value: 3000,
      
    },
    {
      name: "Page C",
      value: 2000,
      
    },
    {
      name: "Page D",
      value: 2780,
      
    },
    {
      name: "Page E",
      value: 1890,
     
     
    },
    
 
  ];
function DashboardCard(props) {
    
    return (
        <div className="dashboardCard">
            <section className="cardHeading">
            <h1>{props.value}</h1>
            <span className="cardTitle">{props.title}</span>
            </section>
            <p><span>{props.percent}% </span>{props.time}</p>
            <ResponsiveContainer width="90%" height={150}>
            <BarChart className="chart"
     
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <Tooltip cursor={{fill: 'transparent'}}/>

      <Bar dataKey="value" fill="#82ca9d" />
    </BarChart>
    </ResponsiveContainer>    
        </div>
    )
}

export default DashboardCard
