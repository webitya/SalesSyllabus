import React from 'react';
import { Card, Button, Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './BlogCard.css';

const { Title } = Typography;

// Define your images here
const images = [
  "/b1-mi.jpeg",  
  "/b2-mi.jpeg",
  "/b3-mi.jpeg",  
  "/b4-mi.jpeg",
  "/b5-mi.jpeg",  
  "/b6-mi.jpeg",
  "/b7-mi.jpeg",  
  "/b8-mi.jpeg",
  "/b9-mi.jpeg",  
  "/b10-mi.jpeg",       
];

const blogTopics = [
  { title: 'Why Sales Talent Management and a Single System are Required', route: '/blogs/sales-talent-management' },
  { title: 'Challenges with Sales Hiring', route: '/blogs/sales-hiring-challenges' },
  { title: 'How Talent Development Can Solve Sales Hiring', route: '/blogs/talent-development-sales-hiring' },
  { title: 'Challenges in Sales Performance Management', route: '/blogs/sales-performance-management' },
  { title: 'How Optimal Support Can Improve Problem-Solving Time for Sales Teams', route: '/blogs/support-problem-solving' },
  { title: 'Managing Attrition in Sales – System Dependent', route: '/blogs/attrition-management' },
  { title: 'Role of Sales Performance Management Systems in Sales Attrition', route: '/blogs/sales-performance-attrition' },
  { title: 'Why Organizations Struggle to Attract Top Sales Talent', route: '/blogs/attracting-sales-talent' },
  { title: 'How to Build a Sales Team', route: '/blogs/build-sales-team' },
  { title: 'How to Develop a Marketing Strategy', route: '/blogs/marketing-strategy' }
];

const BlogCards = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <Title level={2} className="text-center text-4xl font-bold mb-12">Sales Insights and Strategies</Title>
      <Row gutter={[16, 16]}>
        {blogTopics.map((topic, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card
              hoverable
              className="blog-card"
              cover={
                <img
                  alt={`Cover for ${topic.title}`}
                  src={images[index]}
                  style={{ height: '150px', objectFit: 'cover' }}
                />
              }
            >
              <div className="card-content">
                <Title level={5} className="text-xl font-semibold mb-2">{topic.title}</Title>
                <Link to={topic.route} target="_blank">
                  <Button type="primary" className="mt-4">
                    Read Now
                  </Button>
                </Link>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BlogCards;
