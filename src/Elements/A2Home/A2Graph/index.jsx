import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'antd';

const ServicePerformanceChart = () => {
  const chartData = {
    series: [
      {
        name: "Performance",
        data: [75, 85, 90], // Data for Performance Marketing, Sales Consulting, Marketing Solutions
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Performance Marketing', 'Sales Consulting', 'Marketing Solutions'],
      },
      colors: ['#1D4ED8', '#9333EA', '#D97706'], // Tailwind CSS colors for each bar
    },
  };

  return (
    <Card className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800">Service Performance</h2>
      <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />
    </Card>
  );
};

export default ServicePerformanceChart;
