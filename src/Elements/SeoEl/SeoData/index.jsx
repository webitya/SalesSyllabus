import React, { useState } from 'react';
import { LineChartOutlined, FundProjectionScreenOutlined, SyncOutlined } from '@ant-design/icons';
import ReactApexChart from 'react-apexcharts';

const DataDrivenInsights = () => {
  const insights = [
    {
      icon: <LineChartOutlined style={{ fontSize: '2rem', color: '#E6377A' }} />,
      title: 'Data Analysis',
      description: 'Our SEO strategies are built on thorough data analysis, allowing us to track performance and adjust as needed.'
    },
    {
      icon: <FundProjectionScreenOutlined style={{ fontSize: '2rem', color: '#E6377A' }} />,
      title: 'Performance Tracking',
      description: 'We constantly monitor key SEO metrics, ensuring that your website is always improving and performing optimally.'
    },
    {
      icon: <SyncOutlined style={{ fontSize: '2rem', color: '#E6377A' }} />,
      title: 'Continuous Optimization',
      description: 'Our team uses real-time data to continuously optimize your SEO strategy, keeping your website ahead of the competition.'
    },
  ];

  const [chartOptions] = useState({
    chart: {
      type: 'line',
      toolbar: { show: false },
    },
    stroke: { curve: 'smooth' },
    markers: { size: 4 },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      title: { text: 'Month' },
    },
    yaxis: {
      title: { text: 'Organic Traffic' },
    },
    colors: ['#E6377A'],
  });

  const [chartSeries] = useState([
    {
      name: 'Organic Traffic',
      data: [450, 480, 500, 550, 600, 620, 700, 750, 800],
    },
  ]);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Data-Driven Insights
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Every aspect of our SEO efforts is backed by data and continuous analysis, ensuring ongoing improvements and sustained growth.
        </p>

        {/* ApexCharts Integration */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Organic Traffic Growth</h3>
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="line"
            height={350}
          />
        </div>

        {/* Insights Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {insights.map((insight, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {insight.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{insight.title}</h3>
              <p className="text-gray-600">{insight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataDrivenInsights;
