import React from 'react';
import { Button, Card } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const chartOptions = {
    chart: {
      type: 'line',
      height: 350,
    },
    series: [{
      name: 'Reputation Score',
      data: [65, 70, 75, 80, 85, 90, 95],
    }],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    colors: ['#FF4500'], // Dark orange-red color for the line
  };

  return (
    <div className="bg-gray-100 text-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Online Reputation Management
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Boost your credibility and enhance trust with our reputation management solutions.
          </p>
          <Link to="/contact-us">
            <Button type="primary" size="large" className="bg-blue-600 text-white">
              Get Started <ArrowRightOutlined />
            </Button>
          </Link>
        </div>

        {/* Chart Section with Card */}
        <div className="md:w-1/2">
          <Card className="shadow-lg rounded-lg p-4">
            <Chart 
              options={chartOptions} 
              series={chartOptions.series} 
              type="line" 
              height={350} 
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
