import React from 'react';
import { Card, Col, Row, Typography, Image } from 'antd';
import { UserOutlined, RocketOutlined, EyeOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "./AboutExperience.css"
const { Title, Paragraph } = Typography;

const AboutExperience = () => {
  return (
    <div className="experience-section bg-gray-100 md:px-8 px-2 h-auto">
      <Title level={2} className="section-title text-center text-4xl !py-10 font-bold mb-10 text-[#4C6DC7]">Our Experience</Title>
      <Row gutter={[32, 32]} justify="center">
        {/* Experience Section */}
        <Col xs={24} md={8}>
          <Card className="experience-card h-full shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300" bordered={false}>
            <div className="card-content text-center flex flex-col h-full justify-between">
              <UserOutlined className="experience-icon text-4xl mb-4 text-[#6200EA]" />
              <Title level={3} className="card-title text-2xl font-semibold mb-2">7+ Years of Experience</Title>
              <Paragraph className="card-paragraph text-gray-700">
              With over 7 years of expertise, we deliver integrated sales and marketing strategies paired with high-precision execution. Over time, we have refined our frameworks to create a precise and effective solution that addresses sales and marketing challenges for organizations worldwide.
              </Paragraph>
            </div>
          </Card>
        </Col>

        {/* Vision Section */}
        <Col xs={24} md={8}>
          <Card className="experience-card h-full shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300" bordered={false}>
            <div className="card-content text-center flex flex-col h-full justify-between">
              <EyeOutlined className="experience-icon text-4xl mb-4 text-[#E6377A]" />
              <Title level={3} className="card-title text-2xl font-semibold mb-2">B2B Expertise</Title>
              <Paragraph className="card-paragraph text-gray-700">
              B2B expertise involves strategies and processes that enable businesses to effectively market, sell, and manage products or services to other businesses. It combines market insight, lead generation, relationship-building, and data-driven decision-making to foster strong client partnerships and drive growth.
              </Paragraph>
            </div>
          </Card>
        </Col>

        {/* Mission Section */}
        <Col xs={24} md={8}>
          <Card className="experience-card h-full shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300" bordered={false}>
            <div className="card-content text-center flex flex-col h-full justify-between">
              <RocketOutlined className="experience-icon text-4xl mb-4 text-[#802A98]" />
              <Title level={3} className="card-title text-2xl font-semibold mb-2">10x ROI</Title>
              <Paragraph className="card-paragraph text-gray-700">
              Experience exponential growth with a proven 10x ROI formula—empowering your brand with targeted strategies and measurable results.

Drive your success with our expert team, turning every investment into 10x value through innovative, data-led marketing.
              </Paragraph>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Founder Section */}
      <div className="founder-section mt-12">
        <Row gutter={[32, 32]} justify="center" align="middle">
          <Col xs={24} md={8} className='flex justify-center items-center p-5'>
            <Image
              width={200}
              src="/sandeep.jpg" // Replace with the path to the founder's image
              alt="Founder"
              className="founder-image rounded-full border-4 border-[#4C6DC7] shadow-lg"
            />
          </Col>
          <Col xs={24} md={16}>
            <Card className="founder-card shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300" bordered={false}>
              <Title level={3} className="founder-title text-2xl font-semibold mb-4 text-[#6200EA]">Founder: Sandeep Gupta</Title>
              <Paragraph className="founder-paragraph text-gray-700">
                Sandeep Gupta, the visionary behind our company, brings extensive expertise in sales and Marketing Strategy. His leadership and innovative approach have been key in shaping our solutions to drive measurable growth for our clients.
              </Paragraph>
              <div className="linkedin-icon text-center">
                <Link to="https://www.linkedin.com/in/sandeep-gupta-31baa82b/" target='_blank'>
                  <LinkedinOutlined className="linkedin text-3xl text-[#E6377A] transition-colors duration-300 hover:text-[#802A98]" />
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutExperience;
