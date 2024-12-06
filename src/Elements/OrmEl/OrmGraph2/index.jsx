import React from 'react';
import Chart from 'react-apexcharts';

const CombinedGraphSection = () => {
  const chartOptions = {
    chart: {
      type: 'line', // Main chart type
      height: 400,
      stacked: false,
    },
    title: {
      text: 'Online Reputation Metrics Overview',
      align: 'center',
      style: {
        fontSize: '24px',
        color: '#333',
        fontWeight: 'bold',
      },
    },
    xaxis: {
      categories: [
        'January',  // More meaningful labels
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
      ],
      labels: {
        style: {
          colors: '#666',
          fontSize: '14px',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Scores',
        style: {
          color: '#666',
        },
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      fontSize: '14px', // Increased font size for better visibility
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
  };

  const chartSeries = [
    {
      name: 'Customer Reviews',
      type: 'column',
      data: [30, 40, 35, 50, 70, 80, 75, 90], // Sample data for customer reviews
    },
    {
      name: 'SEO Score',
      type: 'line',
      data: [20, 30, 45, 60, 70, 90, 80, 95], // Sample data for SEO score
    },
    {
      name: 'Social Media Engagement',
      type: 'column',
      data: [40, 60, 50, 80, 90, 100, 85, 95], // Sample data for social media engagement
    },
  ];

  return (
    <div className="combined-graph-section py-20 px-6 lg:px-16 bg-gray-50">
      <div className="container mx-auto">
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="line" // Main chart type
          height={400}
        />
      </div>
    </div>
  );
};

export default CombinedGraphSection;
