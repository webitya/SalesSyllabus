import React from 'react';
import { Card, Row, Col, Typography, List } from 'antd';
import { SettingOutlined, FileSearchOutlined, RiseOutlined } from '@ant-design/icons';
import Chart from 'react-apexcharts';
import './BuildingStrategy.css';

const { Title, Text } = Typography;

const BuildingStrategyComponent = () => {
  const chartOptions = {
    chart: { type: 'line', toolbar: { show: false }, background: 'transparent' },
    colors: ['#0D9488'],
    xaxis: {
      categories: ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4'],
      labels: { style: { fontSize: '12px', colors: '#334155', fontWeight: 500 } },
      title: { text: 'Project Phases', style: { fontSize: '14px', fontWeight: 500, color: '#334155' } },
    },
    yaxis: {
      title: { text: 'Effectiveness (%)', style: { fontSize: '14px', fontWeight: 500, color: '#334155' } },
      labels: { style: { fontSize: '12px', colors: '#334155', fontWeight: 500 } },
    },
    stroke: { curve: 'smooth', width: 3 },
    markers: { size: 5, colors: ['#0D9488'], strokeColors: '#fff', strokeWidth: 2 },
    grid: { borderColor: '#E2E8F0' },
    dataLabels: { enabled: false },
    tooltip: { theme: 'dark', marker: { show: true } },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'center',
      fontSize: '12px',
      labels: { colors: '#1E293B' },
      markers: { width: 8, height: 8, radius: 8 },
    },
  };

  const chartSeries = [{ name: 'Strategy Effectiveness', data: [30, 60, 45, 80] }];

  const points = [
    { icon: <FileSearchOutlined className="text-xl text-blue-500" />, text: "Develop a data-driven business strategy tailored to your goals." },
    { icon: <SettingOutlined className="text-xl text-teal-600" />, text: "Build an optimized sales and marketing process framework." },
    { icon: <RiseOutlined className="text-xl text-green-600" />, text: "Integrate performance tracking and predictive models." },
  ];

  return (
    <Card
      className="shadow-lg hover:shadow-xl transition-all duration-300 transform md:p-5 p-0"
      style={{
        background: 'linear-gradient(135deg, #D1FAE5, #F0F9FF)',
        borderRadius: '16px',
        marginTop: '20px',
      }}
    >
      <Row gutter={[24, 24]} align="middle">
        {/* Left Section */}
        <Col xs={24} md={12}>
          <div className="flex items-center space-x-4 mb-6">
            <SettingOutlined className="text-4xl text-teal-600 animate-pulse" />
            <Title level={4} className="text-gray-800 mb-0">Building & Strategizing</Title>
          </div>
          <Text className="text-gray-700 font-semibold mb-4 block">Days 8-22</Text>
          <List
            dataSource={points}
            renderItem={(item) => (
              <List.Item className="text-gray-800 mb-3 animate-slide-up">
                <div className="flex items-start space-x-3">
                  {item.icon}
                  <Text className="text-base">{item.text}</Text>
                </div>
              </List.Item>
            )}
          />
        </Col>

        {/* Right Section */}
        <Col xs={24} md={12}>
          <div className="rounded-lg bg-white p-4 shadow-inner">
            <Chart options={chartOptions} series={chartSeries} type="line" height={280} />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default BuildingStrategyComponent;
