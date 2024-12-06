import React from 'react';
import Chart from 'react-apexcharts';
import { LineChartOutlined, FundOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';

// Marketing Process Data
const marketingProcessData = {
  series: [
    { name: 'ROI', data: [30, 50, 45, 60, 70, 85, 100] },
  ],
  options: {
    chart: { type: 'line', height: 350 },
    stroke: { curve: 'smooth', width: 3 },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
    title: { text: 'Marketing ROI', align: 'center', style: { fontSize: '20px', fontWeight: 'bold', color: '#3b3b3b' } },
    colors: ['#0a9396'],
    grid: { show: true, borderColor: '#e0e0e0' },
    tooltip: { theme: 'dark' },
  },
};

// Sales Process Data
const salesProcessData = {
  series: [
    { name: 'Leads Closed', data: [40, 60, 75, 50, 90, 100, 80] },
  ],
  options: {
    chart: { type: 'bar', height: 350 },
    xaxis: { categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'] },
    title: { text: 'Sales Process Performance', align: 'center', style: { fontSize: '20px', fontWeight: 'bold', color: '#3b3b3b' } },
    colors: ['#005f73'],
    plotOptions: { bar: { borderRadius: 4 } },
    grid: { show: true, borderColor: '#e0e0e0' },
    tooltip: { theme: 'dark' },
  },
};

function OrganizationalAssetBuilding() {
  return (
    <div className="w-full p-6 bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100">
      {/* Organizational Asset Building Section */}
      <div className="w-full mb-8">
        <h2 className="text-4xl font-extrabold flex items-center mb-6 text-indigo-700">
          <LineChartOutlined className="mr-3 text-blue-600 text-2xl" />
          Organizational Asset Building
        </h2>
        <div className="flex flex-col lg:flex-row items-start w-full mb-8 bg-white rounded-lg shadow-lg p-6">
          <div className="lg:w-1/2 w-full mb-4 lg:mb-0">
            <h4 className="text-xl font-semibold mb-4 text-gray-700">Marketing Process</h4>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Detail planning and strategy: How to generate leads, communicate with the audience, and build perception.</li>
              <li>Formal document detailing marketing goals, market research, risk analysis, ROI, KPIs & Metrics linked to financial projections.</li>
              <li>Detail KPI and KRA setup to measure the performance of the marketing team.</li>
              <li>Problem discovery and identification of bottlenecks in the marketing process.</li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-full">
            <Chart options={marketingProcessData.options} series={marketingProcessData.series} type="line" height={350} />
          </div>
        </div>
      </div>

      {/* Sales Process Section */}
      <div className="w-full mb-8">
        <div className="flex flex-col lg:flex-row items-start w-full mb-8 bg-white rounded-lg shadow-lg p-6">
          <div className="lg:w-1/2 w-full">
            <Chart options={salesProcessData.options} series={salesProcessData.series} type="bar" height={350} />
          </div>
          <div className="lg:w-1/2 w-full">
            <h4 className="text-xl font-semibold mb-4 text-gray-700">Sales Process Details</h4>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Detail planning and strategy: How to nurture leads after generating them from marketing efforts.</li>
              <li>Formal document detailing the process of nurturing leads, KPIs, CRM setup, and reporting formats.</li>
              <li>Sales recruitment process and how to effectively manage the sales team's performance.</li>
              <li>SPMS (Sales Performance Management Systems) for tracking and improving sales performance.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizationalAssetBuilding;
