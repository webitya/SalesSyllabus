import React from 'react';
import LayoutEl from '../../../Shared/LayoutEl';
import { Typography, Row, Col, Divider, List, Card, Button, Image } from 'antd';

const { Title, Paragraph } = Typography;

const Blog9 = () => {
  const sections = [
    {
      title: "Reducing Dependence on External Hiring",
      items: [
        "Internal Talent Pipelines: Developing existing employees through structured training programs reduces the need for external hires and minimizes recruitment costs.",
        "Faster Time to Fill Roles: Having trained internal candidates ready to step into new positions shortens the hiring cycle."
      ]
    },
    {
      title: "Addressing Skill Gaps",
      items: [
        "Customized Training Programs: Tailored training focuses on relevant skills and prepares employees for higher-level sales roles.",
        "Continuous Learning and Upskilling: Ongoing learning opportunities ensure that internal talent remains competitive and ready for new challenges."
      ]
    },
    {
      title: "Improving Retention and Reducing Turnover",
      items: [
        "Career Growth Opportunities: Investing in development boosts morale and retention by providing clear pathways for career advancement.",
        "Employee Engagement and Motivation: Ongoing training and development lead to higher job satisfaction and better long-term retention."
      ]
    },
    {
      title: "Creating Well-Rounded Sales Professionals",
      items: [
        "Holistic Development: Structured programs improve both technical and soft skills, making employees more versatile.",
        "Preparing Future Sales Leaders: Leadership development programs groom high-potential salespeople for management roles."
      ]
    },
    {
      title: "Facilitating Cultural Fit and Alignment",
      items: [
        "Developing from Within: Employees who grow within the company have a deeper understanding of organizational culture.",
        "Easier Team Integration: Internal promotions result in smoother team integration due to familiarity with company culture and processes."
      ]
    },
    {
      title: "Accelerating Onboarding for New Roles",
      items: [
        "Reduced Learning Curve: Employees with ongoing development programs adapt quickly to new roles.",
        "Internal Coaching and Mentorship: Mentorship helps new team members ramp up faster and navigate challenges."
      ]
    },
    {
      title: "Attracting External Talent Through Development Opportunities",
      items: [
        "Reputation for Growth: Prioritizing development attracts external candidates looking for career growth.",
        "Competitive Differentiation: Robust development programs differentiate your company from competitors."
      ]
    },
    {
      title: "Mitigating the Risks of External Hiring",
      items: [
        "Lower Risk of Bad Hires: Developing internal talent reduces risks associated with external hires.",
        "More Reliable Performance Predictors: Internal hires come with a proven track record and performance data."
      ]
    },
    {
      title: "Enhancing Adaptability to Market Changes",
      items: [
        "Developing Agility in Salespeople: Continuous development equips teams to handle market shifts and new technologies.",
        "Fostering Innovation and Problem-Solving: Learning opportunities encourage innovative solutions and problem-solving."
      ]
    },
    {
      title: "Supporting Long-Term Business Growth",
      items: [
        "Sustained Talent Pipeline: A long-term talent strategy ensures skilled employees are ready for new responsibilities.",
        "Future-Proofing Sales Teams: A pipeline of trained salespeople ensures readiness for market changes and growth."
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
          How Sales Talent Development Can Solve Sales Hiring Challenges
        </Title>
      </div>

      <Row justify="center" style={{ padding: '20px' }}>
        <Col span={18}>
          <Typography>
            {sections.map((section, index) => (
              <div key={index}>
                <Title level={2}>{section.title}</Title>
                <List
                  dataSource={section.items}
                  renderItem={item => (
                    <List.Item>
                      <Paragraph>{item}</Paragraph>
                    </List.Item>
                  )}
                />
                {index < sections.length - 1 && <Divider />}
              </div>
            ))}
          </Typography>
        </Col>
      </Row>
      
      <Row justify="center" style={{ padding: '20px' }}>
        <Col span={18}>
          <Card title="Conclusion" style={{ marginTop: '20px' }}>
            <Paragraph>
              Sales talent development can directly address many hiring challenges by creating a pipeline of skilled and motivated internal candidates. Investing in development leads to a more stable, adaptable, and high-performing sales team.
            </Paragraph>
            <Button type="primary" href="path/to/resources">Learn More</Button>
          </Card>
        </Col>
      </Row>
    </LayoutEl>
  );
};

export default Blog9;
