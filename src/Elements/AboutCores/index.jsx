import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { HeartOutlined, CheckCircleOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import "./AboutCores.css"
const { Title, Paragraph } = Typography;

const CoreValues = () => {
  return (
    <div className="core-values-section bg-white py-12 md:px-10 px-3">
      <Title level={2} className="text-center text-4xl font-bold mb-8 text-[#4C6DC7]">Our Core Values</Title>
      <Row gutter={[32, 32]} justify="center">
        {/* Value 1 */}
        <Col xs={24} md={8}>
          <Card className="core-value-card shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <HeartOutlined className="core-value-icon text-4xl mb-4 text-[#E6377A]" />
            <Title level={3} className="core-value-title text-2xl font-semibold">Integrity</Title>
            <Paragraph className="core-value-description text-gray-700">
              We believe in honesty and transparency in all our dealings, ensuring trust and accountability with our clients and partners.
            </Paragraph>
          </Card>
        </Col>

        {/* Value 2 */}
        <Col xs={24} md={8}>
          <Card className="core-value-card shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <CheckCircleOutlined className="core-value-icon text-4xl mb-4 text-[#6200EA]" />
            <Title level={3} className="core-value-title text-2xl font-semibold">Excellence</Title>
            <Paragraph className="core-value-description text-gray-700">
              We strive for excellence in everything we do, continuously improving our strategies and processes to deliver the best results.
            </Paragraph>
          </Card>
        </Col>

        {/* Value 3 */}
        <Col xs={24} md={8}>
          <Card className="core-value-card shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <UsergroupAddOutlined className="core-value-icon text-4xl mb-4 text-[#802A98]" />
            <Title level={3} className="core-value-title text-2xl font-semibold">Collaboration</Title>
            <Paragraph className="core-value-description text-gray-700">
              We believe in the power of collaboration, working together with our clients and teams to achieve common goals and drive success.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CoreValues;
