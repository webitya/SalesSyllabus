import React from "react";
import { Button } from "antd";
import { BulbOutlined, TeamOutlined, MessageOutlined } from "@ant-design/icons";

const BrandHero = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
          Building Influence & Engagement for Your Brand
        </h1>
        
        {/* Subheading */}
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Create lasting impressions, foster loyal communities, and engage your audience at every level.
        </p>
        
        {/* Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <Button
            type="primary"
            size="large"
            icon={<BulbOutlined />}
            className="text-white"
            style={{ backgroundColor: "#4C6DC7", borderColor: "#4C6DC7" }}
          >
            Brand Identity Creation
          </Button>
          
          <Button
            type="default"
            size="large"
            icon={<TeamOutlined />}
            style={{ borderColor: "#E6377A", color: "#E6377A" }}
          >
            Community Engagement
          </Button>
          
          <Button
            type="default"
            size="large"
            icon={<MessageOutlined />}
            style={{ borderColor: "#4C6DC7", color: "#4C6DC7" }}
          >
            Message Development
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrandHero;
