import React from 'react';
import { Card, Col, Row } from 'antd';
import { BulbOutlined, CheckCircleOutlined, BarChartOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';

const A2SalWhyChooseSalesSyllabus = () => {
  const features = [
    {
      title: 'Tailored Solutions',
      icon: <BulbOutlined className="text-3xl text-green-500" />,
      description: ' We design systems that fit your specific business model and goals',
    },
    {
      title: 'Proven Frameworks',
      icon: <CheckCircleOutlined className="text-3xl text-blue-500" />,
      description: ' A strategic approach built on best practices and industry insights',
    },
    {
      title: 'Measurable Results',
      icon: <BarChartOutlined className="text-3xl text-yellow-500" />,
      description: ' Our focus is on driving real, quantifiable business outcomes',
    },
  ];

  return (
    <div className="w-full md:pt-20 py-5 bg-gradient-to-r from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Sales Syllabus?</h2>
        <p className="text-md text-gray-600 mb-4">
        With years of experience in sales and marketing optimization, we deliver systems that don’t just 
        monitor performance but elevate it
        </p>
        <p className="text-md text-gray-600 mx-auto mb-6 max-w-2xl">
          
        </p>

        <Row gutter={[16, 16]} justify="center">
          {features.map((feature, index) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              key={index}
              className="transition duration-300 transform hover:scale-105"
            >
              <Card
                className="shadow-md rounded-xl p-4 bg-white hover:shadow-lg border border-transparent"
                hoverable
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default A2SalWhyChooseSalesSyllabus;
