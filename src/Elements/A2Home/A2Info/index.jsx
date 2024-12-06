import React from 'react';
import { Row, Col, Card, Divider } from 'antd';
import { BarChartOutlined, SettingOutlined, LineChartOutlined } from '@ant-design/icons';
import "./A2info.css"
const infographicData = [
  {
    title: "Data Analysis & Understanding",
    icon: <BarChartOutlined className="animated-icon" style={{ fontSize: '48px', color: '#1E3A8A' }} />,
    timeline: "Days 1-7",
    description: [
      "Collect and analyze existing sales and marketing data.",
      "Identify key performance metrics and target areas.",
      "Conduct in-depth audience analysis using data science tools."
    ],
    color: "#E8F0FE", // Light background for a premium feel
  },
  {
    title: "Building & Strategizing",
    icon: <SettingOutlined className="animated-icon" style={{ fontSize: '48px', color: '#0D9488' }} />,
    timeline: "Days 8-22",
    description: [
      "Develop a data-driven sales strategy tailored to your goals.",
      "Build an optimized sales process framework.",
      "Integrate performance tracking and predictive models."
    ],
    color: "#E0FEF4", // Light background for a premium feel
  },
  {
    title: "Optimization & Growth",
    icon: <LineChartOutlined className="animated-icon" style={{ fontSize: '48px', color: '#DC2626' }} />,
    timeline: "Ongoing (After Day 22)",
    description: [
      "Continuously monitor performance metrics.",
      "Use machine learning models for ongoing optimizations.",
      "Adapt and refine strategies based on new data insights."
    ],
    color: "#FEE6E6", // Light background for a premium feel
  }
];

const InfographicSectionA2 = () => {
  return (
    <div className="w-full pt-1 pb-2 px-8 lg:px-20 bg-gray-50" >
      {/* Header */}
      {/* <h2 className="text-4xl lg:text-5xl font-semibold text-center text-gray-800 mb-10">
       
      </h2> */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-2 tracking-tight">
      How We Transform Your Business Strategy with Data Science
      </h2>
      <p className="text-center text-lg lg:text-xl text-gray-600  max-w-2xl mx-auto">
      Discover our comprehensive approach to analyzing, building, and optimizing client journeys.
      </p>
      

      
      {/* <Row gutter={[32, 32]} justify="center">
        {infographicData.map((stage, index) => (
          <Col key={index} xs={24} md={8}>
            <Card
              className="shadow-xl rounded-lg transition-transform duration-300 hover:scale-105"
              style={{
                backgroundColor: stage.color,
                minHeight: '420px',
                border: 'none', 
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              }}
              bodyStyle={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '32px',
              }}
            >
            
              <div className="flex items-center justify-center mb-6 text-center">
                {stage.icon}
              </div>

             
              <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                {stage.title}
              </h3>

          
              <Divider plain className="border-gray-300">{stage.timeline}</Divider>

          
              <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
                {stage.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-xl text-gray-500">•</span> {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Col>
        ))}
      </Row> */}
    </div>
  );
};

export default InfographicSectionA2;
