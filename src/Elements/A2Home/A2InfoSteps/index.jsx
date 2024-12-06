import React from 'react';
import { Row, Col, Card } from 'antd';
import { BarChartOutlined, SettingOutlined, LineChartOutlined } from '@ant-design/icons';

const stepsData = [
  {
    title: "Step 1: Initial Data Gathering",
    icon: <BarChartOutlined style={{ fontSize: '48px', color: '#1E3A8A' }} />,
    description: "We start by collecting all relevant data from sales, marketing, and customer insights. This helps us form a baseline for analysis.",
    imageUrl: "/info1.webp",  // Replace with actual path to your image
  },
  {
    title: "Step 2: Strategic Planning",
    icon: <SettingOutlined style={{ fontSize: '48px', color: '#10B981' }} />,
    description: "Our team then crafts a customized strategy focused on achieving specific sales goals. We utilize data-driven insights to build an actionable plan.",
    imageUrl: "/info2.webp",  // Replace with actual path to your image
  },
  {
    title: "Step 3: Implementation & Monitoring",
    icon: <LineChartOutlined style={{ fontSize: '48px', color: '#EF4444' }} />,
    description: "With the strategy in place, we begin implementing and continuously monitoring key performance indicators to ensure success.",
    imageUrl: "/info3.webp",  // Replace with actual path to your image
  }
];

const StepByStepSectionA2 = () => {
  return (
    <div className="w-full md:!py-20 !py:5 px-8 lg:px-20 bg-gradient-to-br from-gray-100 to-gray-300" id='steps' >
      {/* Header */}
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-10 tracking-wide">
        Our Step-by-Step Process
      </h2>
      <p className="text-center text-lg lg:text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
        Follow our systematic approach that guides you from data gathering to successful strategy implementation.
      </p>

      {/* Step by Step Cards */}
      <Row gutter={[32, 32]} justify="center">
        {stepsData.map((step, index) => (
          <Col key={index} xs={24} md={8}>
            <Card
              className="shadow-lg rounded-2xl hover:shadow-2xl transition-shadow duration-300"
              bodyStyle={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              {/* Icon */}
              <div className="mb-4">{step.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mb-4">{step.description}</p>

              {/* Image */}
              <img
                src={step.imageUrl}
                alt={step.title}
                className="w-full rounded-lg shadow-md"
                style={{ maxHeight: '200px', objectFit: 'cover' }}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StepByStepSectionA2;
