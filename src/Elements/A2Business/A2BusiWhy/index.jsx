import React from 'react';
import { List, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';

const { Title } = Typography;

const reasonsToChoose = [
  'Data-Driven Approach: We combine strategic vision with data-backed insights to help you make informed decisions.',
  'Comprehensive Market Research: We stay ahead of industry trends to ensure your business plan is relevant and future-proof.',
  'Customized Solutions: Tailored business plans that align with your unique goals and market landscape.',
  'Expert Team: Our team of experts is dedicated to delivering exceptional results and fostering growth.',
  'Performance Monitoring: We provide ongoing evaluations and agile adjustments to keep your business strategy on track.',
  'Client-Centric Focus: We prioritize your success by providing comprehensive support throughout the planning process.',
];

const WhyChooseUs = () => {
  return (
    <div className="w-full py-8 bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-200">
      <div className="max-w-7xl mx-auto px-4">
        <Title level={2} className="text-xl text-center mb-6 text-gray-800">
          Why Choose Sales Syllabus for Business Planning?
        </Title>
        <List
          itemLayout="horizontal"
          dataSource={reasonsToChoose}
          renderItem={(item) => (
            <List.Item className="p-2 mb-2 hover:bg-gray-50 rounded-md transition-all duration-300">
              <List.Item.Meta
                avatar={<CheckCircleOutlined style={{ fontSize: '20px' }} />}
                title={<span className="text-sm text-gray-700">{item}</span>}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
