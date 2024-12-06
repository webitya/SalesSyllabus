import React from "react";
import { Card, Col, Row, Typography } from "antd";
import {
  LineChartOutlined,
  TagOutlined,
  GlobalOutlined,
  UserAddOutlined,
  FacebookOutlined,
  GoogleOutlined,
  DashboardOutlined,
  UpCircleOutlined,
} from "@ant-design/icons"; // Importing icons from Ant Design

const { Title, Paragraph } = Typography;

// Array of services with corresponding icons
const services = [
  {
    title: "Targeted Campaigns",
    description: "We design and implement data-driven performance marketing strategies aimed at delivering tangible results quickly and efficiently.",
    icon: <TagOutlined style={{ fontSize: '40px', color: '#4C6DC7' }} />,
  },
  {
    title: "End-to-End Campaign Management",
    description: "From strategy to execution, our team handles every aspect of your marketing, ensuring your campaigns are always optimized for success.",
    icon: <DashboardOutlined style={{ fontSize: '40px', color: '#4C6DC7' }} />,
  },
  {
    title: "ROI You Can Measure",
    description: "Every campaign is tracked and measured, ensuring that you see exactly how your investment is driving results.",
    icon: <LineChartOutlined style={{ fontSize: '40px', color: '#4C6DC7' }} />,
  },
  {
    title: "Paid Search (PPC)",
    description: "Maximize your visibility on search engines through targeted paid search campaigns.",
    icon: <GoogleOutlined style={{ fontSize: '40px', color: '#4C6DC7' }} />,
  },
  {
    title: "Paid Social Media Campaigns",
    description: "Engage your audience on platforms like LinkedIn and Twitter with tailored paid social media strategies.",
    icon: <FacebookOutlined style={{ fontSize: '40px', color: '#4C6DC7' }} />,
  },
  {
    title: "Display Advertising",
    description: "Capture attention with visually appealing display ads across various platforms.",
    icon: <GlobalOutlined style={{ fontSize: '40px', color: '#4C6DC7' }} />,
  },
  {
    title: "Retargeting Campaigns",
    description: "Reconnect with potential customers who have previously interacted with your brand.",
    icon: <UserAddOutlined style={{ fontSize: '40px', color: '#4C6DC7' }} />,
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description: "Optimize your website and landing pages to maximize conversions and enhance user experience.",
    icon: <UpCircleOutlined style={{ fontSize: '40px', color: '#4C6DC7' }} />,
  },
];

const OfferingsSection = () => {
  return (
    <div className="p-10 bg-[#F7F9FC]">
      <Title level={2} className="text-gray-800 text-center mb-6">What We Offer</Title>
      <Row gutter={16} justify="center">
        {services.map((service, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6} className="mb-4">
            <Card
              className="shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              style={{ textAlign: 'center' }} // Centering text and icon
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <Title level={4} className="text-blue-600 mb-2">{service.title}</Title>
              <Paragraph className="text-gray-600 flex-grow">{service.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OfferingsSection;
