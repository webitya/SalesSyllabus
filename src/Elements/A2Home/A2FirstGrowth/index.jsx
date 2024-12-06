import React from 'react';
import { Card, Row, Col, Typography, List } from 'antd';
import {
  LineChartOutlined,
  MonitorOutlined,
  SyncOutlined,
  RadarChartOutlined,
} from '@ant-design/icons';
import Chart from 'react-apexcharts';
import './OptimizationGrowth.css';

const { Title, Text } = Typography;

const OptimizationGrowthComponent = () => {
  const chartOptions = {
    chart: {
      type: 'area',
      toolbar: { show: false },
      background: 'transparent',
    },
    colors: ['#4CAF50', '#FF9800'],
    xaxis: {
      categories: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Ongoing', 'Day 22'],
      labels: { style: { fontSize: '12px', colors: '#4B5563' }, rotate: -45 },
    },
    yaxis: {
      labels: { style: { fontSize: '12px', colors: '#4B5563' } },
    },
    stroke: { curve: 'smooth', width: 2 },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['#81C784', '#FFD54F'],
        stops: [0, 100],
      },
    },
    markers: { size: 4, strokeColors: '#fff', strokeWidth: 2 },
    tooltip: { theme: 'light' },
    grid: { borderColor: '#E5E7EB', strokeDashArray: 5 },
    legend: {
      position: 'top',
      fontSize: '12px',
      labels: { colors: '#4B5563' },
    },
  };

  const chartSeries = [
    { name: 'Growth Rate', data: [20, 40, 60, 80, 95, 90] },
    { name: 'Optimization Efficiency', data: [15, 30, 50, 70, 85, 80] },
  ];

  const points = [
    {
      icon: <MonitorOutlined className="text-2xl text-green-600" />,
      text: 'Monitor performance metrics.',
    },
    {
      icon: <SyncOutlined className="text-2xl text-yellow-600" />,
      text: 'Use machine learning models for optimizations.',
    },
    {
      icon: <LineChartOutlined className="text-2xl text-blue-600" />,
      text: 'Adapt strategies based on new data.',
    },
    {
      icon: <RadarChartOutlined className="text-2xl text-purple-600" />,
      text: 'Integrate performance tracking.',
    },
  ];

  return (
    <Card
      className="shadow-lg hover:shadow-xl transition-all duration-300 md:p-5 p-0"
      style={{
        background: 'linear-gradient(135deg, #E3F2FD, #F9FAFB)',
        borderRadius: '12px',
        marginTop: '20px',
      }}
    >
      <Row gutter={24} align="middle">
        {/* Left Section */}
        <Col xs={24} md={12}>
          <div className="mb-4 animate-fade-in">
            <LineChartOutlined className="text-4xl text-gradient animate-pulse" />
            <Title level={3} className="text-gray-800 mt-2">Optimization & Growth</Title>
          </div>
          <Text className="text-gray-600 font-semibold mb-4 block">Days after 22</Text>
          <List
            dataSource={points}
            renderItem={(item) => (
              <List.Item className="p-3 hover:bg-gray-50 transition duration-200 rounded-md">
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <Text className="text-gray-800">{item.text}</Text>
                </div>
              </List.Item>
            )}
          />
        </Col>

        {/* Right Section with Area Chart */}
        <Col xs={24} md={12}>
          <div className="rounded-lg bg-white shadow-sm p-4">
            <Chart options={chartOptions} series={chartSeries} type="area" height={300} />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default OptimizationGrowthComponent;
