import React from 'react';
import { LineChartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  // Sample data for the chart
  const chartOptions = {
    chart: {
      type: 'area',
      height: '100%',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      labels: {
        style: {
          colors: '#81C784',
          fontSize: '14px',
          fontWeight: 'bold',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#81C784',
        },
      },
    },
    series: [
      {
        name: 'Sales Performance',
        data: [30, 40, 35, 50, 49, 60, 70],
      },
    ],
    colors: ['#81C784'],
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.5,
        gradientToColors: ['#4CAF50'],
        opacityFrom: 0.5,
        opacityTo: 0.1,
      },
    },
    grid: {
      borderColor: '#e0e0e0',
    },
    tooltip: {
      theme: 'dark',
    },
  };

  return (
    <div className="md:py-16 py-6 md:px-8 px-2 flex items-center justify-center" style={{ backgroundColor: "#007B82" }}>
      <div className="mx-auto grid md:grid-cols-2 gap-8 h-full items-center">
        {/* Left Section: Text and Button */}
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="md:text-4xl text-4xl font-bold text-white mb-6 animate__animated animate__fadeIn">
          Streamline, Track, and Drive Sales Excellence

          </h1>
      
          <p className="text-lg text-white mb-8">
          Our proprietary sales framework, Sales Syllabus Pro, is a meticulously crafted four-tier system designed to streamline organizational processes and drive rapid problem-solving
          </p>
          <Link to="https://calendly.com/salessyllabus">
            <Button
              size="large"
              icon={<LineChartOutlined />}
              className="transition duration-300 ease-in-out hover:bg-blue-700 hover:border-blue-700 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-6 rounded-full transform hover:scale-105 shadow-xl"
            >
              Schedule Your Meeting Now
            </Button>
          </Link>
        </div>

        {/* Right Section: Smaller Chart Card */}
        <div className="bg-white p-6 shadow-lg rounded-xl flex flex-col justify-between h-96 w-full mx-auto">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Sales Performance</h2>
          <div className="flex-grow">
            <Chart options={chartOptions} series={chartOptions.series} type="area" height="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
