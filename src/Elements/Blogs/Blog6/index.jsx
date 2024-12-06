import React from 'react';
import LayoutEl from '../../../Shared/LayoutEl';
import { Typography, Row, Col, Divider, List } from 'antd';

const { Title, Paragraph } = Typography;

const Blog6 = () => {
  const strategies = [
    {
      title: "Hiring the Right People",
      items: [
        "Fit with Company Culture: Ensure new hires align with your company’s culture and values.",
        "Skill and Personality Assessments: Use assessments to evaluate skills and traits for long-term success.",
        "Expectations Management: Clearly communicate performance expectations, working conditions, and sales targets."
      ]
    },
    {
      title: "Onboarding and Training",
      items: [
        "Structured Onboarding: Develop a comprehensive onboarding program that covers company culture, product knowledge, and sales techniques.",
        "Continuous Training: Provide ongoing training in both soft and hard skills to adapt to changing market conditions."
      ]
    },
    {
      title: "Motivation and Engagement",
      items: [
        "Recognition and Rewards: Establish systems for acknowledging top performers with both monetary and non-monetary rewards.",
        "Career Development Opportunities: Offer clear paths for growth, such as leadership development or specialized roles.",
        "Work-Life Balance: Promote wellness programs and flexible work arrangements to avoid burnout."
      ]
    },
    {
      title: "Compensation Structure",
      items: [
        "Competitive Salary: Ensure that your compensation package is competitive with industry standards.",
        "Tailored Incentive Plans: Align incentives with long-term objectives to avoid unsustainable sales tactics."
      ]
    },
    {
      title: "Leadership and Management",
      items: [
        "Strong Leadership: Provide clear direction, support, and mentorship to retain top talent.",
        "Open Communication: Foster an environment where salespeople can share concerns and suggestions.",
        "Team Culture: Build a supportive team culture to reduce stress and internal competition."
      ]
    },
    {
      title: "Managing Workload and Expectations",
      items: [
        "Realistic Targets: Set achievable sales targets and break down long-term goals into manageable milestones.",
        "Support Systems: Ensure salespeople have the necessary tools, resources, and support to do their jobs efficiently."
      ]
    },
    {
      title: "Exit Interviews and Feedback",
      items: [
        "Conduct Exit Interviews: Understand reasons for departure to identify patterns and inform improvements.",
        "Act on Feedback: Use insights from exit interviews and surveys to enhance retention strategies."
      ]
    },
    {
      title: "Retention Programs",
      items: [
        "Employee Engagement Programs: Regularly assess engagement levels and address concerns proactively.",
        "Stay Interviews: Understand current employees' motivations and desired improvements."
      ]
    },
    {
      title: "Tailored Support for High Performers",
      items: [
        "Personalized Career Paths: Provide leadership training or advanced roles that align with high performers' career goals.",
        "Retention Bonuses: Consider bonuses or long-term incentives to reward loyalty and prevent poaching."
      ]
    },
    {
      title: "Managing Underperformance",
      items: [
        "Support Underperformers: Offer additional training and resources to help them improve.",
        "Manage with Respect: If performance doesn’t improve, manage them out transparently and respectfully."
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
          Managing Attrition in Sales
        </Title>
      </div>

      <Row justify="center" style={{ padding: '20px' }}>
        <Col span={18}>
          <Typography>
            {strategies.map((strategy, index) => (
              <div key={index}>
                <Title level={2}>{strategy.title}</Title>
                <List
                  dataSource={strategy.items}
                  renderItem={item => (
                    <List.Item>
                      <Paragraph>{item}</Paragraph>
                    </List.Item>
                  )}
                />
                {index < strategies.length - 1 && <Divider />}
              </div>
            ))}
          </Typography>
        </Col>
      </Row>
    </LayoutEl>
  );
};

export default Blog6;
