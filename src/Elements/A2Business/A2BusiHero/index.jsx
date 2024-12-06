import React, { useState } from 'react';
import { Typography, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link as ScrollLink } from 'react-scroll';
import ReactApexChart from 'react-apexcharts';
import 'tailwindcss/tailwind.css';

const { Title, Paragraph } = Typography;

const MarketAnalysisHero = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'bar', // Bar chart type for comparison
      height: 400,
      background: 'transparent',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false, // Vertical bars
        dataLabels: {
          position: 'top', // Position of data labels
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
        colors: ['#fff'],
      },
    },
    xaxis: {
      // categories: [
      //   'Customer Retention',
      //   'Revenue Growth',
      //   'Market Share',
      //   'Customer Acquisition Cost',
      //   'Net Promoter Score (NPS)',
      // ],
      categories: [
        'RetentionRate',       // Customer Retention
        'RevenueGrowth',       // Revenue Growth
        'MarketShare',         // Market Share
        'AcquisitionCost',     // Customer Acquisition Cost
        'CustomerSatisfaction', // Net Promoter Score (NPS)
      ],
      
      labels: {
        style: {
          colors: '#E5E7EB',
          fontSize: '14px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#E5E7EB',
          fontSize: '14px',
        },
      },
      title: {
        text: 'Performance Level (%)',
        style: {
          color: '#E5E7EB',
        },
      },
    },
    fill: {
      opacity: 0.9,
    },
    title: {
      text: 'Business Metrics Analysis',
      align: 'center',
      style: {
        color: '#E5E7EB',
        fontWeight: 'bold',
        fontSize: '24px',
      },
    },
    theme: {
      mode: 'dark',
    },
    colors: ['#F59E0B', '#3B82F6', '#9333EA', '#10B981', '#EF4444'],
    legend: {
      show: false, // Hide the legend
    },
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: 'Current Performance',
      data: [80, 70, 55, 50, 75], // Data reflecting actual performance of each KPI
    },
    {
      name: 'Target Performance',
      data: [90, 85, 70, 30, 85], // Target benchmarks for each KPI
    },
  ]);

  return (
    <div className="w-full flex md:flex-row flex-col items-center justify-center md:p-10 p-2 bg-gray-700">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 md:pr-10 mb-8 lg:mb-0 animate__animated animate__slideInLeft animate__delay-0.5s">
        <Title level={1} className="text-4xl md:text-5xl font-bold mb-6 !text-white animate__animated animate__slideInLeft animate__delay-0.5s">
        Market Analysis: Your Path to Informed Business Decisions
        </Title>
        <Paragraph className="text-lg md:text-xl mb-6 text-gray-200 animate__animated animate__slideInLeft animate__delay-0.5s">
    
        </Paragraph>
        <ScrollLink to="graph" smooth={true} duration={500} offset={-70}>
          <Button
            type=""
            size="large"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-110"
            icon={<ArrowRightOutlined />}
          >
            Learn More
          </Button>
        </ScrollLink>
      </div>

      {/* Right Section with Chart */}
      <div className="w-full lg:w-1/2 animate__animated animate__slideInRight animate__delay-0.5s">
        <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={400} />
      </div>
    </div>
  );
};

export default MarketAnalysisHero;
