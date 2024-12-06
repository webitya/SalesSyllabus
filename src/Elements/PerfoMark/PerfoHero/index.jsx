import React from 'react';
import { Button } from 'antd';
import { LineChartOutlined } from '@ant-design/icons';
import ReactApexChart from 'react-apexcharts';
import { Link } from 'react-router-dom';

const PerformanceHeroSection = () => {
  // ApexChart data setup
  const chartOptions = {
    chart: {
      type: 'line',
      height: '350',
      toolbar: { show: false }
    },
    stroke: { curve: 'smooth' },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    dataLabels: { enabled: false },
    colors: ['#007BFF'],  // Use a professional blue color
  };

  const chartSeries = [
    { name: 'ROI Growth', data: [20, 35, 50, 60, 70, 90, 110, 130, 150] },
  ];

  return (
    <div className="performance-hero-section bg-gradient-to-r from-gray-100 to-white py-16 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left side: Hero text and CTA */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Elevate Your <span className="text-blue-600">Performance Marketing</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Maximize your business ROI with data-driven marketing strategies that deliver measurable results.
          </p>
          <Link to="/contact-us">
          <Button 
            type="primary" 
            shape="round" 
            size="large" 
            icon={<LineChartOutlined />} 
            className="bg-blue-600 hover:bg-blue-700">
            Learn More
          </Button></Link>
        </div>

        {/* Right side: ApexChart */}
        <div className="lg:w-1/2">
          <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={350} />
        </div>
      </div>
    </div>
  );
};

export default PerformanceHeroSection;
