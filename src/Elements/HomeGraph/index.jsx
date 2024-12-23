import React, { useEffect, useRef } from 'react';
import ApexCharts from 'react-apexcharts';
import './HomeGraph.css';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const PerformanceMixedChart = () => {
  const chartRef = useRef(null);

  const options = {
    chart: {
      type: 'line',
      height: 350,
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [0, 2, 0, 2, 0, 0, 2],
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        endingShape: 'rounded',
      },
    },
    xaxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
      title: {
        text: 'Month',
      },
    },
    yaxis: [
      {
        title: {
          text: 'Ratio',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Cost',
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        return `
          <div class="custom-tooltip">
            <div><strong>${w.globals.labels[dataPointIndex]}</strong></div>
            <div><span style="color: ${w.config.colors[seriesIndex]}">${w.config.series[seriesIndex].name}:</span> ${series[seriesIndex][dataPointIndex]}</div>
          </div>
        `;
      },
    },
    legend: {
      horizontalAlign: 'left',
      position: 'top',
      markers: {
        radius: 12,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
    },
    colors: [
      '#1D4FCC',
      '#008ffb',
      '#ff4560',
      '#feb019',
      '#ff66c3',
      '#775dd0',
      '#31755A',
    ],
  };

  const series = [
    {
      name: 'Reduced Problem Solving time ',
      type: 'bar',
      data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
    },
    {
      name: 'Better People Management',
      type: 'line',
      data: [300, 280, 260, 240, 220, 200, 180, 160, 140, 120, 100, 80],
    },
    {
      name: 'Hiring quality ',
      type: 'bar',
      data: [500, 450, 400, 350, 300, 250, 200, 150, 100, 50, 0, 50],
    },
    {
      name: 'Low Mentoring Cost & Time',
      type: 'line',
      data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5, 0],
    },
    {
      name: 'Timely Support to Sales Team',
      type: 'bar',
      data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
    },
    {
      name: 'Quality Lead Generation',
      type: 'bar',
      data: [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
    },
    {
      name: 'Improved Revenue',
      type: 'line',
      data: [2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000, 4200],
    },
  ];

  // UseEffect to show only the first series at the beginning
  useEffect(() => {
    const chart = chartRef.current?.chart;

    if (chart) {
      // Hide all other series except the first one
      chart.toggleSeries('Better People Management');
      chart.toggleSeries('Hiring quality ');
      chart.toggleSeries('Low Mentoring Cost & Time');
      chart.toggleSeries('Timely Support to Sales Team');
      chart.toggleSeries('Quality Lead Generation');
      chart.toggleSeries('Improved Revenue');
    }
  }, []);

  return (
    <div className="performance-mixed-chart">
      <h2>See the Difference We Make – Month Wise</h2>
      <ApexCharts
        ref={chartRef}
        options={options}
        series={series}
        type="line"
        height={350}
      />
      {/* <div className='flex justify-end w-full mt-4'>
        <Link to="case-studies" target='_blank'>
          <Button icon={<EditOutlined />} style={{ border: '2px solid blue' }}>
            Read Our Case Studies
          </Button>
        </Link>
      </div> */}
    </div>
  );
};

export default PerformanceMixedChart;
