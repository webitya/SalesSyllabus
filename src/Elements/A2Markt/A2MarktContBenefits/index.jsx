import React from "react";
import { BulbOutlined, EyeOutlined, RocketOutlined, HeartOutlined, ThunderboltOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Card } from "antd";

const A2ContentMarketingBenefits = () => {
  const benefits = [
    {
      icon: <EyeOutlined className="text-5xl text-blue-600 animated-icon" />,
      title: "Increases Brand Awareness",
      description: "Boosts visibility, helping your brand stay top of mind.",
    },
    {
      icon: <BulbOutlined className="text-5xl text-green-600 animated-icon" />,
      title: "Builds Trust & Credibility",
      description: "Positions your brand as a thought leader in your industry.",
    },
    {
      icon: <RocketOutlined className="text-4xl text-purple-600 animated-icon" />,
      title: "Drives Organic Traffic",
      description: "Leverages SEO-optimized content for better rankings.",
    },
    {
      icon: <HeartOutlined className="text-4xl text-red-600 animated-icon" />,
      title: "Nurtures Customer Relationships",
      description: "Strengthens loyalty through consistent engagement.",
    },
    {
      icon: <ThunderboltOutlined className="text-4xl text-yellow-600 animated-icon" />,
      title: "Improves Lead Generation",
      description: "Increases conversion rates with valuable content.",
    },
    {
      icon: <ShareAltOutlined className="text-4xl text-indigo-600 animated-icon" />,
      title: "Enhances Social Media Engagement",
      description: "Encourages interaction by sharing valuable content.",
    },
  ];

  return (
    <div className="mx-auto p-4 md:pt-20">
      <h2 className="text-center text-3xl  text-gray-900 mb-6">Benefits of Content Marketing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {benefits.map((benefit, index) => (
          <Card
            key={index}
            className="shadow-lg border-none bg-white rounded-lg transition-shadow"
          >
            <div className="flex flex-col items-center text-center space-y-2">
              {/* Icon */}
              {benefit.icon}
              {/* Title */}
              <h3 className="text-2xl text-gray-800">{benefit.title}</h3>
              {/* Description */}
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default A2ContentMarketingBenefits;
