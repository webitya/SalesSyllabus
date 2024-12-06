import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { RiseOutlined } from '@ant-design/icons';
import { Card, Spin } from 'antd';

const OnlineReputationManagementChart = () => {
    const [loading, setLoading] = useState(true);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // Simulating data fetch
        setTimeout(() => {
            setChartData([
                {
                    name: 'High Engagement (Good Content)',
                    data: [90, 85, 95, 92, 88, 96, 93, 97, 95],
                },
                {
                    name: 'Low Engagement (Poor Content)',
                    data: [20, 15, 10, 12, 18, 5, 8, 7, 10],
                },
            ]);
            setLoading(false);
        }, 2000);
    }, []);

    const chartOptions = {
        chart: {
            type: 'area', // Change to area chart
            height: 450,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true,
            },
            toolbar: {
                autoSelected: 'zoom',
            },
        },
        title: {
            text: 'Impact of Online Reputation Management on Sales Engagement',
            align: 'center',
            style: {
                fontSize: '20px', // Increase font size for better visibility
                fontWeight: 'bold',
                color: '#333', // Darker title color
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            title: {
                text: 'Months',
            },
            labels: {
                style: {
                    colors: '#666', // Color for x-axis labels
                },
            },
        },
        yaxis: {
            title: {
                text: 'Engagement Level (%)',
            },
            labels: {
                formatter: (val) => `${val}%`,
                style: {
                    colors: '#666', // Color for y-axis labels
                },
            },
        },
        colors: ['#4CAF50', '#FF7043'], // Green for high engagement, coral for low engagement
        stroke: {
            width: 2,
        },
        fill: {
            opacity: 0.3, // Add some transparency to the fill
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: (val) => `${val}%`, // Format tooltip values
            },
        },
        grid: {
            borderColor: '#e7e7e7',
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
            floating: false,
            show: true,
        },
    };

    return (
        <div className="chart-container mx-auto py-10 px-4">
            <Card className="shadow-lg p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                    <RiseOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
                    <h2 className="text-xl font-bold ml-2">ORM Impact on Sales Engagement</h2>
                </div>
                {loading ? (
                    <div className="flex justify-center">
                        <Spin size="large" />
                    </div>
                ) : (
                    <ReactApexChart
                        options={chartOptions}
                        series={chartData}
                        type="area" // Changed type to area
                        height={450}
                    />
                )}
            </Card>
        </div>
    );
};

export default OnlineReputationManagementChart;
