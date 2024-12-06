import React from 'react';
import LayoutEl from '../../../Shared/LayoutEl';
import { Typography, Row, Col, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const Blog10= () => {
  return (
    <LayoutEl>
      <div
        style={{
          backgroundColor: '#003366',
          padding: '40px',
          textAlign: 'center',
          color: '#fff',
          borderRadius: '8px',
          marginBottom: '20px',
        }}
      >
        <Title level={1} style={{ color: '#fff' }}>
          Marketing Strategy vs Digital Marketing
        </Title>
      </div>
      
      <Row justify="center" style={{ padding: '20px' }}>
        <Col span={18}>
          <Typography>
            <Title level={2}>Marketing Strategy</Title>
            <Paragraph>
              <strong>Definition:</strong> Marketing strategy is a comprehensive plan that outlines how a business will achieve its marketing goals. It encompasses all aspects of marketing, including both digital and traditional methods.
            </Paragraph>
            
            <Title level={4}>Key Components:</Title>
            <Paragraph>
              • <strong>Market Research:</strong> Understanding your target audience, market conditions, and competitors.
              <br />
              • <strong>Target Audience:</strong> Defining who your ideal customers are.
              <br />
              • <strong>Positioning:</strong> Determining how you want your brand to be perceived in the market.
              <br />
              • <strong>Value Proposition:</strong> Articulating the unique value your product or service offers to customers.
              <br />
              • <strong>Marketing Channels:</strong> Deciding which channels (digital, traditional, etc.) to use for reaching your audience.
              <br />
              • <strong>Goals and Objectives:</strong> Setting specific, measurable goals for your marketing efforts.
              <br />
              • <strong>Budget:</strong> Allocating resources and budget to various marketing activities.
              <br />
              • <strong>Tactics and Implementation:</strong> Outlining the specific actions and campaigns to execute the strategy.
            </Paragraph>
            
            <Paragraph>
              <strong>Focus:</strong> Marketing strategy is about the overarching plan and approach for achieving business objectives through marketing efforts. It includes both digital and non-digital methods.
            </Paragraph>
            
            <Divider />
            
            <Title level={2}>Digital Marketing</Title>
            <Paragraph>
              <strong>Definition:</strong> Digital marketing encompasses all marketing efforts that use electronic devices and the internet. It includes tactics and channels used to reach customers online.
            </Paragraph>
            
            <Title level={4}>Key Components:</Title>
            <Paragraph>
              • <strong>Search Engine Optimization (SEO):</strong> Improving website visibility in search engine results.
              <br />
              • <strong>Content Marketing:</strong> Creating and sharing valuable content to attract and engage your audience.
              <br />
              • <strong>Social Media Marketing:</strong> Using social media platforms to promote products, engage with customers, and build brand awareness.
              <br />
              • <strong>Email Marketing:</strong> Sending targeted emails to nurture leads and retain customers.
              <br />
              • <strong>Pay-Per-Click (PPC) Advertising:</strong> Running paid ads on search engines and social media platforms.
              <br />
              • <strong>Affiliate Marketing:</strong> Partnering with affiliates to promote products and share revenue.
              <br />
              • <strong>Analytics and Data Tracking:</strong> Monitoring and analyzing digital marketing performance to optimize strategies.
            </Paragraph>
            
            <Paragraph>
              <strong>Focus:</strong> Digital marketing is about leveraging digital channels and technologies to reach and engage with your audience.
            </Paragraph>
            
            <Divider />
            
            <Title level={2}>Relationship Between the Two</Title>
            <Paragraph>
              Digital marketing is often a subset of your overall marketing strategy. While digital marketing focuses specifically on online tactics and tools, your marketing strategy provides the broader framework and direction for all marketing activities, including digital and traditional channels.
              <br />
              In essence, digital marketing is a component of your marketing strategy, and a well-developed marketing strategy will guide how digital marketing (and other methods) should be employed to achieve your business goals.
            </Paragraph>
          </Typography>
        </Col>
      </Row>
    </LayoutEl>
  );
};

export default Blog10;
