import React from 'react';
import { Row, Col, Card } from 'antd';
import { SolutionOutlined, BulbOutlined, LineChartOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';

const services = [
  {
    icon: <SolutionOutlined className="text-4xl text-orange-500" />,
    title: 'Optimize resource allocation ',
    description:
      'Streamline operations and maximize efficiency with optimized resource allocation.',
  },
  {
    icon: <BulbOutlined className="text-4xl text-blue-500" />,
    title: 'Optimize financial planning ',
    description:
      'Enhance profitability and ensure stability with optimized financial planning.',
  },
  {
    icon: <LineChartOutlined className="text-4xl text-green-500" />,
    title: 'Build road map of success',
    description:
      'Create a clear, actionable roadmap to achieve your business goals and drive success.',
  },
];

const AboutWhatWeDo= () => {
  return (
    <section className="w-full py-20 bg-white" id='whatwedo'>
      <div className="max-w-7xl mx-auto px-4 lg:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">What We Do</h2>
        <p className="text-lg text-gray-600 mb-12">
        We help organization to solve their scalability challenges. By helping them to build efficient business strategies by optimizing business plan, marketing execution and sales execution. We integrate data science and strategic insight to craft solutions that drive meaningful change.
        </p>

        {/* Service Cards */}
        <Row gutter={[32, 32]} justify="center">
          {services.map((service, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card
                className="shadow-lg hover:shadow-2xl transition-all duration-300 border-none"
                hoverable
                style={{ height: '100%' }}
              >
                <div className="flex flex-col items-center">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default AboutWhatWeDo;
