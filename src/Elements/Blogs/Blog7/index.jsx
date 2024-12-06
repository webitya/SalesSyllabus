import React from 'react';
import LayoutEl from '../../../Shared/LayoutEl';
import { Typography, Row, Col, Divider, List } from 'antd';

const { Title, Paragraph } = Typography;

const Blog7 = () => {
  const points = [
    {
      title: "Improving Transparency and Fairness",
      items: [
        "Clear Metrics and Goals: SPM systems provide transparency by setting clear, measurable sales targets and performance metrics, helping salespeople understand expectations and evaluations.",
        "Fair Compensation: Accurate tracking and automation of compensation calculations ensure fair distribution of rewards, reducing dissatisfaction over pay discrepancies."
      ]
    },
    {
      title: "Enhancing Motivation and Engagement",
      items: [
        "Incentive Management: Design and manage incentive programs that align rewards with performance, driving higher engagement and reducing turnover.",
        "Recognition and Rewards: Track and highlight top performers for timely recognition, contributing to higher job satisfaction and loyalty."
      ]
    },
    {
      title: "Providing Data-Driven Insights",
      items: [
        "Performance Analytics: Detailed performance analytics help identify patterns, strengths, and areas for improvement, tailoring coaching and development programs.",
        "Attrition Analysis: Analyze performance data and turnover rates to identify factors contributing to attrition, such as unrealistic targets or inadequate support."
      ]
    },
    {
      title: "Supporting Training and Development",
      items: [
        "Performance Reviews: Facilitate regular performance reviews to provide constructive feedback and personalized training plans.",
        "Skill Development: Track skills and training progress to ensure necessary development opportunities for career advancement."
      ]
    },
    {
      title: "Streamlining Administrative Tasks",
      items: [
        "Automating Processes: Reduce administrative burden by automating commission calculations, performance reporting, and goal setting.",
        "Reducing Errors: Minimize errors in commission calculations and performance tracking to prevent conflicts and dissatisfaction."
      ]
    },
    {
      title: "Facilitating Goal Alignment",
      items: [
        "Goal Setting and Tracking: Align individual goals with company objectives to increase job satisfaction and reduce feelings of disconnection."
      ]
    },
    {
      title: "Improving Retention Strategies",
      items: [
        "Predictive Analytics: Use predictive analytics to forecast turnover risks and proactively address potential issues.",
        "Engagement Surveys: Integrate employee engagement surveys to gain insights into satisfaction and areas needing improvement."
      ]
    },
    {
      title: "Supporting Career Development",
      items: [
        "Career Pathing: Map out career progression paths based on performance and development goals to motivate salespeople with clear advancement opportunities."
      ]
    },
    {
      title: "Encouraging Consistent Feedback",
      items: [
        "Regular Check-ins: Facilitate ongoing communication and address concerns promptly through regular check-ins and feedback sessions."
      ]
    },
    {
      title: "Optimizing Sales Processes",
      items: [
        "Best Practices: Identify and share best practices and successful strategies to improve overall performance and satisfaction."
      ]
    }
  ];

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
          Role of Sales Performance Management Systems in Managing Sales Attrition
        </Title>
      </div>

      <Row justify="center" style={{ padding: '20px' }}>
        <Col span={18}>
          <Typography>
            {points.map((point, index) => (
              <div key={index}>
                <Title level={2}>{point.title}</Title>
                <List
                  dataSource={point.items}
                  renderItem={item => (
                    <List.Item>
                      <Paragraph>{item}</Paragraph>
                    </List.Item>
                  )}
                />
                {index < points.length - 1 && <Divider />}
              </div>
            ))}
          </Typography>
        </Col>
      </Row>
    </LayoutEl>
  );
};

export default Blog7;
