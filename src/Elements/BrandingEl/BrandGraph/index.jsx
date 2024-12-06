import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { RiseOutlined } from '@ant-design/icons';
import { Card, Spin } from 'antd';

const CommunityMarketingChart = () => {
    const [loading, setLoading] = useState(true);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // Simulating data fetch
        setTimeout(() => {
            setChartData([
                {
                    name: 'Sales without Community Marketing',
                    data: [20000, 30000, 50000, 60000, 80000, 100000, 110000, 120000, 130000],
                },
                {
                    name: 'Sales with Community Marketing',
                    data: [30000, 50000, 70000, 90000, 110000, 130000, 160000, 190000, 210000],
                },
            ]);
            setLoading(false);
        }, 2000);
    }, []);

    const chartOptions = {
        chart: {
            type: 'area',
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
            text: 'Impact of Community Marketing on Sales (in Rupees)',
            align: 'center',
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            title: {
                text: 'Months',
            },
        },
        yaxis: {
            title: {
                text: 'Sales (₹)',
            },
            labels: {
                formatter: (val) => `₹${val}`,
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100],
            },
        },
        tooltip: {
            shared: false,
            y: {
                formatter: (val) => `₹${val}`,
            },
        },
        grid: {
            borderColor: '#e7e7e7',
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            floating: false,
            show: false,
        },
        colors: ['#E6377A', '#4CAF50'], // Changed blue to green
    };

    return (
        <div className="chart-container mx-auto py-10 px-4">
            <Card className="shadow-lg p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                    <RiseOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
                    <h2 className="text-xl font-bold ml-2">Community Marketing Impact</h2>
                </div>
                {loading ? (
                    <div className="flex justify-center">
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

export default CommunityMarketingChart;
