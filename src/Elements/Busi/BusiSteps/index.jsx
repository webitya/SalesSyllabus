import React from "react";
import { Card, Typography } from "antd";
import { CheckCircleOutlined, MoneyCollectOutlined, TeamOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const BusiSteps = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto text-center">
        <Title className="text-[#46077A] font-bold text-4xl mb-6">Our Business Planning Process</Title>
        <Paragraph className="text-gray-700 text-lg mb-8">
          Our structured approach ensures comprehensive planning for your business's success.
        </Paragraph>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white shadow-md rounded-lg p-5">
            <CheckCircleOutlined className="text-[#7E1E43] text-3xl mb-4" />
            <Title level={4} className="text-[#46077A]">Step 1: Research & Analysis</Title>
            <Paragraph>
              Conduct thorough market research and competitor analysis to identify opportunities and threats.
            </Paragraph>
          </Card>

          <Card className="bg-white shadow-md rounded-lg p-5">
            <MoneyCollectOutlined className="text-[#7E1E43] text-3xl mb-4" />
            <Title level={4} className="text-[#46077A]">Step 2: Financial Planning</Title>
            <Paragraph>
              Develop financial forecasts and budgets to guide your business's financial health.
            </Paragraph>
          </Card>

          <Card className="bg-white shadow-md rounded-lg p-5">
            <TeamOutlined className="text-[#7E1E43] text-3xl mb-4" />
            <Title level={4} className="text-[#46077A]">Step 3: Strategy Implementation</Title>
            <Paragraph>
              Create actionable strategies to achieve your goals and measure progress along the way.
            </Paragraph>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BusiSteps;
