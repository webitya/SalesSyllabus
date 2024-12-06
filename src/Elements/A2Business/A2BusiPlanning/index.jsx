import React from 'react';
import { Card } from 'antd';
import { BarChartOutlined, AimOutlined, DollarCircleOutlined, TeamOutlined, SyncOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';

const processSteps = [
  {
    icon: <BarChartOutlined style={{ fontSize: '36px', color: '#3B82F6' }} />,
    title: 'In-Depth Market Analysis',
    description: 'Extensive research to analyze market trends, customer behavior, and competitor strategies for real-time insights.',
  },
  {
    icon: <AimOutlined style={{ fontSize: '36px', color: '#F59E0B' }} />,
    title: 'Data-Driven Goal Setting',
    description: 'Using predictive analytics to set realistic, ambitious goals backed by reliable insights and performance benchmarks.',
  },
  {
    icon: <DollarCircleOutlined style={{ fontSize: '36px', color: '#10B981' }} />,
    title: 'Strategic Resource Allocation',
    description: 'Optimizing resource use to maximize productivity and ROI across all operations.',
  },
  {
    icon: <TeamOutlined style={{ fontSize: '36px', color: '#9333EA' }} />,
    title: 'Integrated Sales & Marketing Alignment',
    description: 'Aligning sales and marketing for a seamless lead generation and revenue growth strategy.',
  },
  {
    icon: <SyncOutlined style={{ fontSize: '36px', color: '#EF4444' }} />,
    title: 'Performance Monitoring & Optimization',
    description: 'Continuous performance tracking and adjustments to keep strategies effective with changing market conditions.',
  },
];

const BusinessPlanningProcess = () => {
  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Business Planning Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {step.icon}
                <h3 className="text-xl font-semibold ml-4">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessPlanningProcess;
