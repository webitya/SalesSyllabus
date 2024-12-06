import React, { lazy, Suspense } from 'react';
import { Row, Col, Spin } from 'antd';
import 'tailwindcss/tailwind.css';

const ApexChart = lazy(() => import('react-apexcharts'));

const chartOptions = {
  chart: { 
    type: 'radialBar', 
    background: 'transparent',
  },
  plotOptions: {
    radialBar: {
      hollow: { size: '70%' },
      dataLabels: {
        showOn: 'always',
        name: { 
          show: true, 
          fontSize: '18px', 
          offsetY: -10, 
          color: '#4A4A4A', 
        },
        value: { 
          show: true, 
          fontSize: '20px', 
          offsetY: 10, 
          color: '#38bdf8' 
        },
      },
    },
  },
  labels: ['Future Growth'],
  colors: ['#38bdf8'], // Accent color for radial bar
  stroke: {
    lineCap: 'round',
    width: 5,
  },
  title: {
    text: 'Growth Potential',
    align: 'center',
    style: {
      fontSize: '20px',
      color: '#4A4A4A',
      fontWeight: 'bold',
    },
  },
  tooltip: {
    theme: 'light',
    x: {
      show: true,
    },
  },
};

const chartSeries = [90];

const AboutOurVision = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <Row gutter={[32, 32]} className="flex items-center  mx-auto px-4 lg:px-12">
        {/* Left Column: Vision Text */}
        <Col xs={24} lg={12} className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700">
            We envision a future where every business can reach its full potential through the power of strategic, data-driven decisions.
            By staying ahead of industry trends and continuously refining our approach, we strive to make Sales Syllabus a leader in business transformation consulting.
          </p>
          <p className="text-lg text-gray-700">
            Let us help you harness the power of strategic growth to transform your business.
          </p>
        </Col>

        {/* Right Column: Radial Chart */}
        <Col xs={24} lg={12} className="flex justify-center">
          <div className="w-full bg-white p-8 rounded-lg shadow-xl">
            <Suspense fallback={<Spin size="large" />}>
              <ApexChart
                options={chartOptions}
                series={chartSeries}
                type="radialBar"
                height={320}
              />
            </Suspense>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default AboutOurVision;
