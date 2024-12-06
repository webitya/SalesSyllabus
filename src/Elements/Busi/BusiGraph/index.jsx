import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { LineChartOutlined } from '@ant-design/icons';
import { Card, Spin } from 'antd';

const BusinessGrowthChart = () => {
    const [loading, setLoading] = useState(true);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // Simulating data fetch
        setTimeout(() => {
            setChartData([
                {
                    name: 'With Marketing Analysis',
                    data: [5, 20, 30, 55, 60, 80, 105, 130, 150, 190, 220, 250],
                },
                {
                    name: 'Without Marketing Analysis',
                    data: [3, 5, 10, 15, 25, 35, 50, 55, 60, 65, 70, 75],
                },
            ]);
            setLoading(false);
        }, 2000);
    }, []);

    const chartOptions = {
        chart: {
            type: 'area',
            height: 450,
            toolbar: {
                show: false, // Hide chart controls
            },
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
            },
        },
        title: {
            text: 'Business Growth Over Time',
            align: 'center',
            style: {
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#333',
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title: {
                text: 'Months',
                style: {
                    color: '#666',
                    fontSize: '14px',
                },
            },
        },
        yaxis: {
            title: {
                text: 'Growth (%)',
                style: {
                    color: '#666',
                    fontSize: '14px',
                },
            },
            min: 0,
        },
        colors: ['#65A8FA', '#E6377A'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                gradientToColors: ['#7A81FF', '#F47C7C'],
                stops: [0, 100],
            },
        },
        stroke: {
            width: 2,
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            enabled: true,
            theme: 'light',
            x: {
                show: true,
            },
            y: {
                formatter: (val) => `${val}%`,
            },
        },
        grid: {
            borderColor: '#e7e7e7',
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
            floating: false,
            markers: {
                radius: 12,
            },
        },
    };

    return (
        <div className="chart-container mx-auto py-10 md:px-4 px-0" id="graph">
            <Card className="shadow-lg md:p-6 p-0 bg-white rounded-lg">
                <div className="flex justify-center items-center mb-6">
                    <LineChartOutlined style={{ fontSize: '26px', color: '#1890ff' }} />
                    <h2 className="text-2xl font-bold  text-gray-800">
                        Business Growth (<span className="text-blue-400">With</span> vs <span className="text-pink-500">Without Marketing Analysis</span>)
                    </h2>
                </div>
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <Spin size="large" />
                    </div>
                ) : (
                    <ReactApexChart
                        options={chartOptions}
                        series={chartData}
                        type="area"
                        height={450}
                    />
                )}
            </Card>
        </div>
    );
};

export default BusinessGrowthChart;
