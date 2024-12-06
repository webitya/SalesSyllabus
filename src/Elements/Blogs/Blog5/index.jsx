import React from 'react';
import LayoutEl from '../../../Shared/LayoutEl';
import { Typography, Row, Col, Divider, List } from 'antd';

const { Title, Paragraph } = Typography;

const Blog5 = () => {
  const strategies = [
    {
      title: "Streamlined Access to Information",
      items: [
        "Centralized Knowledge Base: A well-organized knowledge base with product details, pricing, competitive analysis, and sales scripts reduces time spent searching for information.",
        "CRM Integration: Integrating CRM systems with other platforms provides a complete view of customer interactions, preventing delays caused by incomplete data."
      ]
    },
    {
      title: "Real-Time Communication Tools",
      items: [
        "Instant Collaboration Platforms: Tools like Slack or Microsoft Teams enable real-time communication and collaboration, reducing delays caused by waiting for email responses.",
        "Mobile Accessibility: Mobile-friendly platforms allow sales teams to access support and resources on the go, reducing downtime when working remotely."
      ]
    },
    {
      title: "Cross-Functional Support Teams",
      items: [
        "Dedicated Sales Support Teams: Specialized support teams handle administrative tasks and inquiries, allowing sales reps to focus on selling.",
        "Expert Support Channels: Designated experts assist with complex questions, preventing delays and enabling sales reps to address customer concerns quickly."
      ]
    },
    {
      title: "Automation and AI Tools",
      items: [
        "Automated Responses for Common Issues: Automation handles routine tasks like FAQs and data updates, speeding up problem resolution.",
        "AI-Driven Insights: AI tools provide real-time insights and predict potential problems, allowing sales teams to address issues proactively."
      ]
    },
    {
      title: "Comprehensive Training and Onboarding",
      items: [
        "Effective Sales Training: Continuous training improves problem-solving skills and reduces reliance on external support.",
        "Scenario-Based Learning: Training that focuses on real-life scenarios helps salespeople handle complex situations more effectively."
      ]
    },
    {
      title: "Clear Escalation Processes",
      items: [
        "Defined Escalation Paths: Clear processes ensure issues are routed quickly to the right individuals or teams, reducing confusion and delays.",
        "Fast-Track Critical Issues: Implement a priority system to resolve critical issues faster, keeping deals on track."
      ]
    },
    {
      title: "Accessible Analytics and Reporting",
      items: [
        "Real-Time Analytics: Access to real-time analytics helps sales teams track performance and solve issues without waiting for reports.",
        "Dashboards for Key Metrics: Dashboards provide immediate visibility into key metrics, enabling quick corrective actions."
      ]
    },
    {
      title: "Empowered Sales Managers and Leadership",
      items: [
        "Proactive Sales Leadership: Engaged managers offer timely guidance and solutions, helping reps navigate challenges faster.",
        "Coaching and Feedback Loops: Regular coaching improves problem-solving skills and creates a more self-sufficient team."
      ]
    },
    {
      title: "Efficient Administrative Support",
      items: [
        "Streamlined Processes: Automated systems for contract generation and deal processing reduce wait times and expedite deal cycles.",
        "Dedicated Admin Support: Administrative assistants handle paperwork and scheduling, allowing sales reps to focus on sales activities."
      ]
    },
    {
      title: "Empowered Sales Reps with Self-Service Tools",
      items: [
        "Self-Service Knowledge Portals: Access to self-service tools like FAQs and pricing calculators enables salespeople to resolve issues independently.",
        "Customer-Facing Solutions: Self-service options for customers reduce the number of questions directed to salespeople, allowing them to focus on strategic tasks."
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
          How Optimal Support Can Improve Problem-Solving Time for Sales Teams
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

export default Blog5;
