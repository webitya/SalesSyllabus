import React from "react";
import { Layout, Card } from "antd";
import {
  FileTextOutlined,
  MessageOutlined,
  DeploymentUnitOutlined,
  CheckCircleOutlined,
  QqCircleFilled,
} from "@ant-design/icons";

const { Content } = Layout;

// Array of services with points using icons
const services = [
  {
    id: 1,
    icon: <FileTextOutlined className="text-4xl text-blue-500" />,
    title: "High-Impact Marketing Collateral",
    points: [
      "Brochures that captivate and convert.",
      "Case studies & whitepapers to establish credibility.",
      "Campaign creatives optimized for performance.",
    ],
    description:"Every piece is aligned with your brand identity and designed to deliver results."
  },
  {
    id: 2,
    icon: <MessageOutlined className="text-4xl text-green-500" />,
    title: "Tailored Communication Strategy",
    points: [
      "Reflect your unique voice and values.",
      "Address your audience’s needs and pain points.",
      "Adapt to diverse channels and customer journey stages.",
    ],
    description:"Effective communication strategy builds meaningful connections with your audience."
  },
  {
    id: 3,
    icon: <DeploymentUnitOutlined className="text-4xl text-purple-500" />,
    title: "Channel Selection for Maximum ROI",
    points: [
      "Digital platforms like Google Ads, LinkedIn, and Facebook for precise targeting.",
      "Traditional methods such as telemarketing and events where they add value.",
      "Omnichannel approaches for seamless customer experiences.",
    ],
    description:"This ensures every marketing dollar is invested where it counts most."
  },
];

// Reusable card component
const ServiceCard = ({ icon, title, points,description }) => (
  <Card
    className="group shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-4"
    bordered={false}
  >
    <div className="flex flex-col items-center text-left">
      <div className="mb-3">{icon}</div>
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="text-gray-700 space-y-2">
        {points.map((point, index) => (
          <>
          <div key={index} className="flex items-center">
            <QqCircleFilled className="text-blue-500 mr-2" />
            <span>{point}</span>
          </div>
          
          </>
        ))}
      </div>
      <div className="pt-2"><p>{description}</p></div>
    </div>
  </Card>
);

const WhatWeOffer = () => {
  return (
    <Layout className="bg-gradient-to-r from-blue-50 via-gray-50 to-blue-50  py-12">
      <Content className=" mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          What We Offer
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              points={service.points}
              description={service.description}
            />
          ))}
        </div>
      </Content>
    </Layout>
  );
};

export default WhatWeOffer;
