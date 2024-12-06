import React from 'react';
import Chart from 'react-apexcharts';
import { FileTextOutlined, GlobalOutlined, SearchOutlined, BarChartOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';

// Content Marketing Data
const contentMarketingData = {
  series: [
    { name: 'Engagement Rate', data: [65, 80, 75, 90, 85, 95, 100] },
  ],
  options: {
    chart: { type: 'line', height: 350 },
    stroke: { curve: 'smooth', width: 2 },
    xaxis: { categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'] },
    title: { text: 'Content Marketing Engagement Rate', align: 'center' },
    colors: ['#4c9eff'], // Updated color
    grid: { borderColor: '#e5e7eb' },
  },
};

// Digital Marketing Data
const digitalMarketingData = {
  series: [
    { name: 'Conversions', data: [40, 55, 70, 80, 95, 120, 130] },
  ],
  options: {
    chart: { type: 'bar', height: 350 },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
    title: { text: 'Digital Marketing Conversions', align: 'center' },
    colors: ['#48bb78'], // Updated color
    plotOptions: { bar: { borderRadius: 8 } }, // Smooth bar edges
    grid: { borderColor: '#e5e7eb' },
  },
};

function A2Service2() {
  return (
    <div className="w-full p-6 bg-gradient-to-r from-teal-100 to-blue-50"> {/* Gradient Background */}
      
      {/* Marketing Section Header */}
      <div className="w-full mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mb-6">
          <FileTextOutlined className="mr-2 text-blue-500 text-4xl" />
          Marketing – Outsource to Us for End-to-End Delivery
        </h2>
      </div>

      {/* Content Marketing Section */}
      <div className="w-full mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <SearchOutlined className="mr-3 text-teal-500 text-xl" />
          Content Marketing
        </h3>
        <div className="flex flex-col lg:flex-row items-start w-full mb-8">
          {/* Icon List for Content Marketing */}
          <div className="lg:w-1/2 w-full mb-4 lg:mb-0">
            <ul className="space-y-4">
              <li className="flex items-center text-lg text-gray-700">
                <GlobalOutlined className="text-teal-500 mr-3" />
                Focus on creating and distributing valuable, relevant, and consistent content.
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <BarChartOutlined className="text-teal-500 mr-3" />
                Content marketing builds trust and establishes the brand as an expert in its field.
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <FileTextOutlined className="text-teal-500 mr-3" />
                Content addresses audience needs, solves problems, and educates customers.
              </li>
            </ul>
          </div>
          {/* Chart for Content Marketing */}
          <div className="lg:w-1/2 w-full">
            <Chart options={contentMarketingData.options} series={contentMarketingData.series} type="line" height={350} />
          </div>
        </div>
      </div>

      {/* Digital Marketing Section */}
      <div className="w-full mb-8">
       
        <div className="flex flex-col lg:flex-row items-start w-full mb-8">
          {/* Chart for Digital Marketing */}
          <div className="lg:w-1/2 w-full">
            <Chart options={digitalMarketingData.options} series={digitalMarketingData.series} type="bar" height={350} />
          </div>
          {/* Icon List for Digital Marketing */}
          <div className="lg:w-1/2 w-full"> <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <SearchOutlined className="mr-3 text-teal-500 text-xl" />
          Digital Marketing
        </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-lg text-gray-700">
                <GlobalOutlined className="text-teal-500 mr-3" />
                Uses various digital channels to promote a brand, drive traffic, and generate leads.
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <BarChartOutlined className="text-teal-500 mr-3" />
                Content is central to digital marketing but is more direct in promoting products or services.
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <FileTextOutlined className="text-teal-500 mr-3" />
                Strategies are designed to target specific audiences for conversions and growth.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default A2Service2;
