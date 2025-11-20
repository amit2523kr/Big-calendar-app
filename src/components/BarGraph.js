import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './BarGraph.css';

const BarGraph = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="no-graph-data">No data available for graph</div>;
  }

  const chartData = data.map(item => ({
    name: item.user.replace('_', ' ').toUpperCase(),
    value: item.value,
  }));

  return (
    <div className="bar-graph-container">
      <h3>User Data Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis />
          <Tooltip 
            formatter={(value) => [`${value}`, 'Value']}
            labelFormatter={(label) => `User: ${label}`}
          />
          <Legend />
          <Bar 
            dataKey="value" 
            fill="#8884d8" 
            name="User Value"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;