import React from "react";
import { Card, Col, Row } from "antd";
import { 
  LineChartOutlined, 
  AreaChartOutlined, 
  TeamOutlined, 
  RetweetOutlined, 
  BarChartOutlined, 
  DashboardOutlined 
} from "@ant-design/icons";
import "tailwindcss/tailwind.css";

const features = [
  {
    id: 1,
    title: "Define KPIs and KRAs for Performance Tracking",
    icon: <LineChartOutlined className="text-xl text-blue-500" />,
    description:
      "We work with you to establish Key Performance Indicators (KPIs) and Key Result Areas (KRAs) tailored to your business goals, ensuring alignment at every level.",
    subFeatures: [
      "Team-Level Tracking: Monitor overall productivity, revenue contribution, and lead management.",
      "Individual Performance Metrics: Measure individual contributions to identify top performers and areas needing support.",
      "Goal Alignment: Ensure everyone is working toward unified objectives.",
    ],
  },
  {
    id: 2,
    title: "Real-Time Dashboards for Monitoring",
    icon: <AreaChartOutlined className="text-xl text-blue-400" />,
    description:
      "Transparency is at the core of effective sales and marketing performance. Our Framework includes real-time tracking dashboards that allow seamless monitoring of sales and marketing data.",
    subFeatures: [
      "Custom Dashboards: Real-time tracking of progress against targets.",
      "Data Visualization: Easy-to-understand charts and graphs highlighting sales performance trends.",
      "Comprehensive Reporting: Drill down into data by individual, team, product, or region.",
    ],
  },
  {
    id: 3,
    title: "Regular Feedback Loops for Problem Solving",
    icon: <TeamOutlined className="text-xl text-blue-400" />,
    description:
      "Continuous feedback is vital for a high-performing sales and marketing team. We establish frameworks that ensure proactive problem solving.",
    subFeatures: [
      "Scheduled Feedback Sessions: Regular check-ins to review progress and address concerns.",
      "Problem-Solving Framework: Early identification of roadblocks and collaborative strategies to resolve them.",
      "Actionable Insights: Ensure solutions are practical and implemented effectively.",
    ],
  },
];

const A2SalesProcessConsulting = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-5  md:pt-20 px-2">
      {/* Page Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl text-gray-800 mb-2">
          About Reporting Framework
        </h1>
        <p className="text-sm text-gray-600 mx-auto">
        Our Framework focuses on creating a seamless process that empowers both  managers and teams to drive performance through structured tracking and feedback. Here’s what we do to set up a tailored sales and reporting  framework for your organization
        </p>
      </div>

      {/* Features Section */}
      <Row gutter={[24, 24]} justify="center" className="px-4">
        {features.map((feature) => (
          <Col
            xs={24}
            sm={12}
            lg={8}
            key={feature.id}
            className="transform transition duration-500 hover:scale-105"
          >
            <Card
              className="h-full shadow-lg rounded-lg p-1 bg-white"
              hoverable
              bordered={false}
            >
              <div className="flex items-center mb-4">{feature.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h2>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="list-disc pl-6 text-gray-600">
                {feature.subFeatures.map((subFeature, index) => (
                  <li key={index} className="mb-2">{subFeature}</li>
                ))}
              </ul>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default A2SalesProcessConsulting;
