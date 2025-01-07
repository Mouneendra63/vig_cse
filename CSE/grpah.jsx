import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './gpah.css';

const placementData = [
  { year: "2019-20", totalStudents: 507, totalPlaced: 392, percentage: 77.31 },
  { year: "2020-21", totalStudents: 517, totalPlaced: 416, percentage: 80.46 },
  { year: "2021-22", totalStudents: 453, totalPlaced: 391, percentage: 86.31 },
  { year: "2022-23", totalStudents: 499, totalPlaced: 457, percentage: 91.58 },
];

const renderLineChart = (
  <LineChart width={600} height={300} data={placementData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
    {/* Line for Total Students */}
    <Line type="monotone" dataKey="totalStudents" stroke="#3b82f6" strokeWidth={3} />
    {/* Line for Total Placed */}
    <Line type="monotone" dataKey="totalPlaced" stroke="#10b981" strokeWidth={3} />
    {/* Line for Percentage */}
    <Line type="monotone" dataKey="percentage" stroke="#f97316" strokeWidth={3} />
    
    {/* Add Cartesian grid for better readability */}
    <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />
    
    {/* X and Y axes */}
    <XAxis dataKey="year" tick={{ fill: '#4b5563', fontSize: 12 }} />
    <YAxis tick={{ fill: '#4b5563', fontSize: 12 }} />
    
    {/* Tooltip to display data on hover */}
    <Tooltip wrapperStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '5px', padding: '10px' }} />
    
    {/* Legend to differentiate between lines */}
    <Legend wrapperStyle={{ paddingTop: '10px' }} />
  </LineChart>
);

export default function PlacementLineChart() {
  return (
    <div className="chart-container">
      {renderLineChart}
    </div>
  );
}