import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, ResponsiveContainer } from 'recharts';
import ReactApexChart from 'react-apexcharts';
import './HomeGraph2.css';

// Sample data for BarChart and LineChart
const data = [
  { name: 'Jan', TimeToHire: 4000, QualityOfHire: 2400 },
  { name: 'Feb', TimeToHire: 3000, QualityOfHire: 1398 },
  { name: 'Mar', TimeToHire: 2000, QualityOfHire: 9800 },
  { name: 'Apr', TimeToHire: 2780, QualityOfHire: 3908 },
  { name: 'May', TimeToHire: 1890, QualityOfHire: 4800 },
  { name: 'Jun', TimeToHire: 2390, QualityOfHire: 3800 },
];

const data1 = [
  { name: 'Jan', Time: 4000, Performance: 2400 },
  { name: 'Feb', Time: 3000, Performance: 1398 },
  { name: 'Mar', Time: 2000, Performance: 9800 },
  { name: 'Apr', Time: 2780, Performance: 3908 },
  { name: 'May', Time: 1890, Performance: 4800 },
  { name: 'Jun', Time: 2390, Performance: 3800 },
];

// Support Desk Chart Options (Area Chart)
const supportOptions = {
  chart: {
    type: 'area',
    height: 250,
    toolbar: { show: false },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.6,
      opacityTo: 0.3,
    },
  },
  colors: ['#1D4FCC'],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    labels: { style: { colors: '#A0AEC0' } },
  },
  yaxis: {
    labels: { style: { colors: '#A0AEC0' } },
  },
};

// Sample data for the area chart
const supportSeries = [
  {
    name: 'Support Cases',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 120, 110, 90],
  },
];

const PerformanceSection = () => (
  <div className="performance-section py-6 my-2 shadow-sm">
    <h2 className=''>Performance Insights: Metrics Driving Our Success</h2>
    <p>Explore the key performance indicators that showcase our efficiency and impact. Each chart highlights how our solutions accelerate recruitment, enhance sales, and reduce problem-solving time.</p>

    <div className="grid md:grid-cols-3 gap-3">
      {/* Graph 1: Time to Hire vs. Quality of Hire */}
      <div className="graph-item">
        <h3>Time to Hire vs. Quality of Hire</h3>
        <p>Tracking the balance between swift recruitment and high-quality candidates for optimal hiring results.</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="QualityOfHire" fill="#1D4FCC" />
            <Bar dataKey="TimeToHire" fill="#FF9C83" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Graph 2: Sales Performance Improvement */}
      <div className="graph-item">
        <h3>Sales Performance Over Time</h3>
        <p>How our efforts have steadily increased performance metrics across the sales cycle.</p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data1}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Performance" stroke="#1D4FCC" />
            <Line type="monotone" dataKey="Time" stroke="#FF9C83" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Graph 3: Problem-Solving Time Reduction (Area Chart) */}
      <div className="graph-item">
        <h3>Reduction in Problem-Solving Time</h3>
        <p>Faster support resolutions reflect our dedication to efficiency and customer satisfaction.</p>
        <ReactApexChart options={supportOptions} series={supportSeries} type="area" height={250} />
      </div>
    </div>
  </div>
);

export default PerformanceSection;
