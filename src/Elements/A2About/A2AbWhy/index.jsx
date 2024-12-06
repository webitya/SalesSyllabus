import React, { lazy, Suspense } from 'react';
import { Row, Col, Card, Spin } from 'antd';
import { SolutionOutlined, TeamOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';

const ApexChart = lazy(() => import('react-apexcharts'));

const chartOptions = {
  chart: { 
    type: 'area',
    background: 'transparent',
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 0.8,
      opacityFrom: 0.3,
      opacityTo: 0.7,
      stops: [0, 100],
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    labels: {
      style: {
        colors: '#4A4A4A',
        fontSize: '12px',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#4A4A4A',
        fontSize: '12px',
      },
    },
  },
  title: {
    text: 'Growth Over Time',
    align: 'center',
    style: {
      fontSize: '16px',
      color: '#4A4A4A',
      fontWeight: 'bold',
    },
  },
  colors: ['#93c5fd', '#38bdf8'],
  tooltip: {
    theme: 'light',
    x: {
      show: true,
    },
  },
};

const chartSeries = [
  {
    name: 'Growth Potential',
    data: [10, 20, 30, 40, 50, 60, 70],
  },
];

const AboutWhoWeAre = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <Row gutter={[32, 32]} className="flex items-center  mx-auto px-4 lg:px-12">
        {/* Left Column: Content */}
        <Col xs={24} lg={12}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-8">
          Sales Syllabus was created to bridge the gap between traditional business tactics and modern, data-centric marketing methods. We are a team of dedicated professionals committed to delivering exceptional results that reflect our expertise in business planning, Content  marketing, and  sales team performance optimization
          </p>
          <div>
  {/* Card 1: Strengthen organization pillar */}
  <Card className="shadow-xl border-none p-1 bg-white">
    <div className="flex items-center space-x-4">
      <TeamOutlined className="text-4xl text-purple-600" />
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">Strengthen organization pillar</h3>
        <p className="text-gray-600">Build a solid foundation for sustainable growth.</p>
      </div>
    </div>
  </Card>

  {/* Card 2: Problem solver */}
  <Card className="shadow-xl border-none p-1 bg-white mt-2">
    <div className="flex items-center space-x-4">
      <SolutionOutlined className="text-4xl text-purple-600" />
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">Problem solver</h3>
        <p className="text-gray-600">Innovative solutions to overcome challenges.</p>
      </div>
    </div>
  </Card>
</div>

        </Col>

        {/* Right Column: Card with Full-width Apex Chart */}
        <Col xs={24} lg={12} className="flex justify-center">
          <Card className="w-full shadow-xl md:p-6 p-0">
            <Suspense fallback={<Spin size="large" />}>
              <ApexChart options={chartOptions} series={chartSeries} type="area" height={350} width="100%" />
            </Suspense>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default AboutWhoWeAre;
