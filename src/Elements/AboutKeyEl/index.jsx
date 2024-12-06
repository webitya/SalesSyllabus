import React from 'react';
import { Card, Col, Row, Typography, Rate } from 'antd';
import { StarOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const testimonialsData = [
  {
    name: 'John Doe',
    position: 'CEO of Company A',
    testimonial: 'Sales Syllabus transformed our sales strategy and helped us increase our revenue by 50% in just one year!',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    position: 'Marketing Director of Company B',
    testimonial: 'Their innovative approach to sales talent management is impressive. Highly recommend!',
    rating: 4.5,
  },
  {
    name: 'Michael Johnson',
    position: 'COO of Company C',
    testimonial: 'The team at Sales Syllabus is highly skilled and knowledgeable. They truly understand the market needs.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section py-12 bg-gray-50 px-10">
      <Title level={2} className="section-title text-center text-4xl font-bold mb-10 text-[#4C6DC7]">What Our Clients Say</Title>
      <Row gutter={[32, 32]} justify="center">
        {testimonialsData.map((testimonial, index) => (
          <Col xs={24} md={8} key={index}>
            <Card className="testimonial-card h-full shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300" bordered={false}>
              <Paragraph className="text-center text-lg italic text-gray-600 mb-4">
                “{testimonial.testimonial}”
              </Paragraph>
              <div className="text-center mb-4">
                <Rate allowHalf disabled defaultValue={testimonial.rating} character={<StarOutlined />} />
              </div>
              <Title level={4} className="text-center text-xl font-semibold">{testimonial.name}</Title>
              <Paragraph className="text-center text-gray-500">{testimonial.position}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Testimonials;
