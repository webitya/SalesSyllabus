import React from "react";
import { CheckCircleOutlined, AppstoreAddOutlined, SolutionOutlined, FileTextOutlined, DesktopOutlined, BellOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import "tailwindcss/tailwind.css";

const deliverables = [
  {
    id: 1,
    title: "KPI and KRA Definition",
    icon: <CheckCircleOutlined className="text-2xl text-green-500" />,
    description: "Performance metrics aligned with your business goals.",
    subFeatures: [
      "Performance metrics designed to align with your business goals.",
      "Tailored benchmarks for individuals and teams.",
    ],
  },
  {
    id: 2,
    title: "Skill Mapping to KPIs",
    icon: <AppstoreAddOutlined className="text-2xl text-blue-500" />,
    description: "Identify and develop skills to achieve performance goals.",
    subFeatures: [
      "Identify and develop skills necessary for specific goals.",
      "Support your team’s growth with targeted training.",
    ],
  },
  {
    id: 3,
    title: "Problem-Resolution Framework",
    icon: <SolutionOutlined className="text-2xl text-orange-500" />,
    description: "A process to quickly address sales challenges.",
    subFeatures: [
      "Identify, categorize, and address sales challenges quickly.",
      "Structured feedback framework for continuous improvement.",
    ],
  },
  {
    id: 4,
    title: "Transparent Reporting System",
    icon: <FileTextOutlined className="text-2xl text-purple-500" />,
    description: "Monitor performance with transparency and accountability.",
    subFeatures: [
      "Robust analytics system for transparency.",
      "Structured reports for informed decision-making.",
    ],
  },
  {
    id: 5,
    title: "Implementation Support",
    icon: <DesktopOutlined className="text-2xl text-red-500" />,
    description: "Hands-on support for smooth system deployment.",
    subFeatures: [
      "Onboarding assistance and system deployment.",
      "Comprehensive team training for long-term success.",
    ],
  },
  {
    id: 6,
    title: "Sales Alerts and Notifications",
    icon: <BellOutlined className="text-2xl text-yellow-500" />,
    description: "Real-time alerts and notifications for team activities.",
    subFeatures: [
      "Get instant updates on team activities and performance.",
      "Proactive notifications for improvements or concerns.",
    ],
  },
];

const KeyDeliverables = () => {
  return (
    <div className="md:pt-20 py-8  bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">Key Deliverables</h1>
        <p className="text-sm text-gray-600 mt-2">
          When you partner with Sales Syllabus for Sales Performance Management, you gain:
        </p>
      </div>

      {/* Cards Section */}
      <Row gutter={[16, 16]} justify="center" className="px-2">
        {deliverables.map((item) => (
          <Col xs={24} sm={12} lg={8} key={item.id}>
            <Card
              className="shadow-md rounded-lg bg-white hover:shadow-lg transition duration-300 h-full"
              hoverable
              bordered={false}
            >
              {/* Icon */}
              <div className="text-center mb-3">{item.icon}</div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-gray-800 text-center mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-600 text-center mb-3">
                {item.description}
              </p>

              {/* SubFeatures */}
              <ul className="text-sm text-gray-600 list-disc pl-4">
                {item.subFeatures.map((subFeature, index) => (
                  <li key={index}>{subFeature}</li>
                ))}
              </ul>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default KeyDeliverables;
