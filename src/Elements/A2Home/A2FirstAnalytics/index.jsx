import React from 'react';
import { Card, Row, Col, Typography, List } from 'antd';
import { BarChartOutlined, DatabaseOutlined, AreaChartOutlined, LineChartOutlined } from '@ant-design/icons';
import Chart from 'react-apexcharts';
import './DataAnalysis.css';

const { Title, Text } = Typography;

const DataAnalysisComponent = () => {
  const chartOptions = {
    chart: { type: 'bar', toolbar: { show: false }, background: 'transparent' },
    colors: ['#6366F1'],
    xaxis: {
      categories: ['Data Collection', 'Identify Metrics', 'Audience Analysis', 'Generate Insights'],
      labels: { style: { fontSize: '12px', color: '#475569', fontWeight: 500 } },
    },
    yaxis: { labels: { style: { fontSize: '12px', color: '#475569', fontWeight: 500 } } },
    dataLabels: { enabled: false },
    grid: { borderColor: '#E2E8F0' },
    plotOptions: { bar: { borderRadius: 8 } },
    tooltip: { theme: 'dark' },
    legend: { show: true, position: 'top', fontSize: '12px', labels: { color: '#1F2937' } },
  };

  const chartSeries = [{ name: 'Performance Metrics', data: [50, 70, 60, 85] }];

  const points = [
    { icon: <DatabaseOutlined />, text: 'Collect and analyze existing sales and marketing data.' },
    { icon: <BarChartOutlined />, text: 'Identify key performance metrics and target areas.' },
    { icon: <AreaChartOutlined />, text: 'Conduct in-depth audience analysis using data science tools.' },
    { icon: <LineChartOutlined />, text: 'Data Analysis & Understanding' },
  ];

  return (
    <Card 
      className="shadow-lg transition-all duration-300 hover:shadow-xl md:p-5 p-0"
      style={{
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={12}>
          <div className="flex items-center space-x-3 mb-4">
            <BarChartOutlined className="text-4xl text-indigo-600" />
            <Title level={4} className="text-indigo-800 mb-0">Generate actionable insights to improve strategy.</Title>
          </div>
          <Text className="text-gray-600 font-semibold mb-4 block">Days 1-7</Text>
          <List
            dataSource={points}
            renderItem={item => (
              <List.Item className="text-gray-700 text-base leading-relaxed hover:bg-indigo-50 p-2 rounded-lg transition-colors">
                <div className="flex items-start space-x-2">
                  <div className="text-xl text-indigo-500">{item.icon}</div>
                  <Text>{item.text}</Text>
                </div>
              </List.Item>
            )}
          />
        </Col>
        <Col xs={24} md={12}>
          <div className="rounded-lg shadow-inner bg-white p-4">
            <Chart options={chartOptions} series={chartSeries} type="bar" height={280} />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default DataAnalysisComponent;
