import React from 'react';
import Chart from 'react-apexcharts';
import { TeamOutlined, CheckCircleOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';

// Sales Training and Support Data
const salesTrainingData = {
  series: [
    {
      name: 'Training Sessions Completed',
      data: [5, 8, 12, 15, 20, 25, 30],
    },
    {
      name: 'Performance Improvement (%)',
      data: [10, 20, 30, 35, 40, 50, 60],
    },
  ],
  options: {
    chart: { type: 'line', height: 350 },
    stroke: { curve: 'smooth', width: 3 },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
    title: { text: 'Sales Training & Coaching Progress', align: 'center' },
    colors: ['#f59e0b', '#10b981'],
    grid: { borderColor: '#e5e7eb' },
    tooltip: { theme: 'dark' },
  },
};

function A2Service3() {
  return (
    <div className="w-full p-6 bg-gradient-to-r from-blue-50 to-green-50">
      
      {/* Sales Training & Coaching Header */}
      <div className="w-full mb-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 flex justify-center items-center mb-6">
          <TeamOutlined className="mr-2 text-yellow-400 text-4xl" />
          <span className="text-blue-600">Continuous Support, Training, and Coaching to Sales Team</span>
        </h2>
        <p className="text-lg text-gray-600 mb-6 mx-auto max-w-2xl">
          We provide ongoing training, coaching, and support to our sales team to enhance their performance and achieve business goals. 
          Stay ahead with our expert-led programs and personalized coaching!
        </p>
      </div>

      {/* Continuous Support & Training Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-8 gap-6">
        
        {/* Left Column: Icons and List */}
        <div className="lg:w-1/2 w-full p-4">
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center">
              <CheckCircleOutlined className="text-yellow-400 mr-3" />
              Monthly training sessions to improve sales techniques and customer handling skills.
            </li>
            <li className="flex items-center">
              <CheckCircleOutlined className="text-yellow-400 mr-3" />
              Continuous support and guidance to help the team overcome challenges in real-time.
            </li>
            <li className="flex items-center">
              <CheckCircleOutlined className="text-yellow-400 mr-3" />
              Regular coaching sessions to identify and work on individual strengths and weaknesses.
            </li>
            <li className="flex items-center">
              <CheckCircleOutlined className="text-yellow-400 mr-3" />
              Tracking performance improvements through KPIs and personalized feedback.
            </li>
          </ul>
        </div>

        {/* Right Column: Chart */}
        <div className="lg:w-1/2 w-full p-4 bg-white rounded-lg shadow-md">
          <Chart options={salesTrainingData.options} series={salesTrainingData.series} type="line" height={350} />
        </div>
      </div>
    </div>
  );
}

export default A2Service3;
