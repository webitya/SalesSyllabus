import React from 'react';
import LayoutEl from '../../../Shared/LayoutEl';
import { Typography, Row, Col, Divider, List } from 'antd';

const { Title, Paragraph } = Typography;

const Blog2 = () => {
  const challenges = [
    {
      title: "Attracting Qualified Candidates",
      items: [
        "High Demand for Top Sales Talent: There is fierce competition for experienced and high-performing salespeople.",
        "Employer Branding: Sales professionals look for companies offering growth opportunities, a strong product portfolio, and a positive culture."
      ]
    },
    {
      title: "Assessing the Right Skills",
      items: [
        "Difficulties in Measuring Soft Skills: Essential skills like communication and emotional intelligence are hard to evaluate through traditional methods.",
        "Difficulties in Measuring Hard Skills: Lack of organized education in selling skills makes it challenging to benchmark salespeople’s hard skills.",
        "Misleading First Impressions: Charisma and confidence might overshadow actual competency during hiring.",
        "Overreliance on Past Performance: Past sales achievements may not always predict future performance in different contexts."
      ]
    },
    {
      title: "Defining the Right Sales Profile",
      items: [
        "Lack of a Clear Job Profile: Unclear requirements for sales roles can lead to misalignment in hiring.",
        "Cultural Fit: Sales skills alone might not ensure a good fit with the company's culture and values."
      ]
    },
    {
      title: "Long Hiring Process",
      items: [
        "Extended Time to Hire: High demand often leads to long recruitment cycles.",
        "Delayed Decision-Making: Prolonged hiring decisions can cause candidates to lose interest."
      ]
    },
    {
      title: "Compensation Expectations",
      items: [
        "Salary and Incentives Misalignment: Discrepancies between compensation expectations and what the company offers can deter top talent.",
        "Unrealistic Compensation Plans: Complex or unattractive commission structures may fail to motivate candidates."
      ]
    },
    {
      title: "High Turnover in Sales Roles",
      items: [
        "Sales Role Burnout: High-pressure roles can lead to burnout and turnover.",
        "Poor Onboarding and Integration: Weak onboarding processes can result in early disengagement."
      ]
    },
    {
      title: "Industry-Specific Challenges",
      items: [
        "Finding Specialized Talent: Some sales roles require specific industry knowledge.",
        "Changing Market Dynamics: Adapting to evolving markets requires agile candidates."
      ]
    },
    {
      title: "Candidate Screening and Selection",
      items: [
        "Overwhelming Number of Applicants: High volume of applications makes filtering time-consuming.",
        "Limited Predictive Hiring Tools: Traditional methods may not accurately predict future performance."
      ]
    },
    {
      title: "Balancing Experience and Potential",
      items: [
        "Overemphasis on Experience: Prioritizing experience might lead to missing candidates with high growth potential.",
        "Fear of Hiring Inexperienced Candidates: Concerns about lengthy training can deter hiring less experienced but promising candidates."
      ]
    },
    {
      title: "Bias in Hiring",
      items: [
        "Unconscious Bias: Hiring decisions might be influenced by biases, leading to a lack of diversity.",
        "Overvaluing 'Sales Personality' Stereotypes: Hiring for traditional sales traits may overlook effective but non-traditional sales styles."
      ]
    },
    {
      title: "Adapting to Remote Sales Teams",
      items: [
        "Remote Work Dynamics: Assessing candidates for remote effectiveness is challenging.",
        "Team Integration: Onboarding remote salespeople can be complex in terms of communication and culture."
      ]
    },
    {
      title: "Retention Post-Hiring",
      items: [
        "Job Expectations vs. Reality: Mismatches between expectations and reality can lead to disengagement.",
        "Lack of Development Opportunities: Absence of clear advancement paths can impact retention."
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
          Challenges with Sales Hiring
        </Title>
      </div>

      <Row justify="center" style={{ padding: '20px' }}>
        <Col span={18}>
          <Typography>
            {challenges.map((challenge, index) => (
              <div key={index}>
                <Title level={2}>{challenge.title}</Title>
                <List
                  dataSource={challenge.items}
                  renderItem={item => (
                    <List.Item>
                      <Paragraph>{item}</Paragraph>
                    </List.Item>
                  )}
                />
                {index < challenges.length - 1 && <Divider />}
              </div>
            ))}
          </Typography>
        </Col>
      </Row>
    </LayoutEl>
  );
};

export default Blog2;
