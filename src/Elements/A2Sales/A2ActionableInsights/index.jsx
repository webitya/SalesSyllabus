import React from 'react';
import { Row, Col, Card } from 'antd';
import { CheckCircleOutlined, LineChartOutlined, TeamOutlined, SolutionOutlined, BarChartOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';

const A2ActionableInsights = () => {
  const insights = [
    { text: "Team commitment levels.", icon: <TeamOutlined /> },
    { text: "Challenges faced in the market (legitimate or fabricated).", icon: <LineChartOutlined /> },
    { text: "Behavioral and skills gaps with precision.", icon: <SolutionOutlined /> },
    { text: "Sales account management efforts and their alignment with goals.", icon: <BarChartOutlined /> },
    { text: "Efforts linked to individual goals and milestones, eliminating black spots.", icon: <CheckCircleOutlined /> },
    { text: "Executive-wise productive and unproductive time.", icon: <TeamOutlined /> },
    { text: "ROI and financial analysis for decision-making.", icon: <LineChartOutlined /> },
    { text: "Categorized problems and predefined solutions.", icon: <SolutionOutlined /> },
    { text: "Communication improvements and client-level sales conversation quality.", icon: <CheckCircleOutlined /> },
    { text: "Data-aligned business decision-making insights.", icon: <BarChartOutlined /> },
    { text: "Enhanced meeting productivity, focusing on problem-solving and data analysis.", icon: <LineChartOutlined /> },
    { text: "Training requirements and their impact on performance.", icon: <SolutionOutlined /> },
    { text: "Data-driven hiring and firing decisions.", icon: <CheckCircleOutlined /> },
    { text: "Executive productivity insights before hiring.", icon: <TeamOutlined /> },
    { text: "Marketing platform performance analysis.", icon: <BarChartOutlined /> },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 pt-20 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Actionable Insights That Drive Action and Deliver Results
        </h2>
        <p className="text-md text-gray-600 mb-6 text-center">
          The Reporting framework combined with Sales Syllabus Pro delivers insights across daily, weekly, monthly, quarterly, and annual timeframes:
        </p>
        <Row gutter={[16, 16]}>
          {insights.map((insight, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                bordered={false}
                className="h-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                bodyStyle={{ padding: '16px' }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-blue-500 text-2xl">{insight.icon}</div>
                  <p className="text-sm text-gray-700">{insight.text}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default A2ActionableInsights;
