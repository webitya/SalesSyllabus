import React from 'react';
import { LineChartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import HeaderGraph from '../../A2Home/A2HeaderGraph';

const HeroSection = () => {
  const chartOptions = {
    chart: {
      type: 'area',
      height: '100%',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
      },
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
          colors: '#6A5ACD',
          fontSize: '14px',
          fontWeight: 'bold',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#6A5ACD',
        },
      },
    },
    series: [
      {
        name: 'Revenue Growth',
        data: [30, 50, 45, 60, 55, 70, 85],
      },
    ],
    colors: ['#7B68EE'],
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        gradientToColors: ['#4B0082'],
        opacityFrom: 0.7,
        opacityTo: 0.1,
      },
    },
    grid: {
      borderColor: '#D3D3D3',
    },
    tooltip: {
      theme: 'dark',
    },
  };

  return (
    <div className="md:py-5 py-6 md:px-8 px-2 flex items-center justify-center" style={{ backgroundColor: "#0D577E" }}>
      <div className="mx-auto grid md:grid-cols-2 gap-8 h-full items-center">
        {/* Left Section: Text and Offerings */}
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="md:text-4xl text-3xl font-extrabold text-white mb-6 animate__animated animate__fadeIn">
            Why Strategic Planning Matters
          </h1>
          <p className="text-lg text-gray-200 mb-6 animate__animated animate__fadeIn">
            Strategic planning is the blueprint that aligns your business objectives with actionable marketing initiatives.
            Without it, efforts are scattered, and results are inconsistent. Our approach ensures a clear roadmap to success.
          </p>

          <Link to="https://calendly.com/salessyllabus" className="mt-6">
            <Button
              type=""
              size="large"
              icon={<LineChartOutlined />}
              className="transition duration-300 ease-in-out bg-gradient-to-r from-purple-400 to-blue-600 text-white font-semibold py-3 px-6 rounded-full transform hover:scale-110 hover:shadow-lg hover:from-blue-500 hover:to-purple-700"
            >
              Let’s Build Your Strategy
            </Button>
          </Link>
        </div>

        {/* Right Section: Chart */}
        {/* <div className="bg-white p-6 shadow-lg rounded-xl flex flex-col justify-between h-96 w-full mx-auto"> */}
          {/* <h2 className="text-2xl font-semibold text-purple-700 mb-2">Revenue Growth Analysis</h2>
          <p className="text-sm text-gray-600 mb-4">
            Track your monthly revenue growth and identify trends to guide strategic decisions.
          </p>
          <div className="flex-grow">
            <Chart options={chartOptions} series={chartOptions.series} type="area" height="100%" />
          </div> */}
          <HeaderGraph/>
        {/* </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
