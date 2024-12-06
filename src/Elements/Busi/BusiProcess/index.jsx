import React from "react";
import { Card, Typography, Steps } from "antd";
import { AimOutlined, BarChartOutlined, FileTextOutlined, ProjectOutlined } from "@ant-design/icons";
import 'tailwindcss/tailwind.css';

const { Title } = Typography;
const { Step } = Steps;

const BusiProcess = () => {
  return (
    <div className="bg-gradient-to-r from-[#f3f4f6] to-[#e5e7eb] py-4">
      <div className="container mx-auto px-4">
        <Title className="text-[#46077A] font-bold text-2xl text-center mb-2">
          Our Business Planning Process
        </Title>

        <div className="max-w-4xl mx-auto">
          <Steps direction="vertical" current={0} className="mb-6" progressDot>
            <Step
              title={<span className="text-lg text-[#7E1E43]">Discovery</span>}
              icon={<AimOutlined className="text-3xl text-[#7E1E43]" />}
              description={
                <Card className="border-none shadow-sm hover:shadow-md transition duration-300">
                  <span className="text-gray-700 text-sm">
                    Understanding your business needs and goals to set a solid foundation.
                  </span>
                </Card>
              }
            />
            <Step
              title={<span className="text-lg text-[#7E1E43]">In-Depth Market Analysis</span>}
              icon={<BarChartOutlined className="text-3xl text-[#7E1E43]" />}
              description={
                <Card className="border-none shadow-sm hover:shadow-md transition duration-300">
                  <span className="text-gray-700 text-sm">
                    Analyzing market trends, customer behavior, and competitor strategies for insights.
                  </span>
                </Card>
              }
            />
            <Step
              title={<span className="text-lg text-[#7E1E43]">Strategy Development</span>}
              icon={<FileTextOutlined className="text-3xl text-[#7E1E43]" />}
              description={
                <Card className="border-none shadow-sm hover:shadow-md transition duration-300">
                  <span className="text-gray-700 text-sm">
                    Crafting a tailored business plan that aligns with your goals and resources.
                  </span>
                </Card>
              }
            />
            <Step
              title={<span className="text-lg text-[#7E1E43]">Implementation & Support</span>}
              icon={<ProjectOutlined className="text-3xl text-[#7E1E43]" />}
              description={
                <Card className="border-none shadow-sm hover:shadow-md transition duration-300">
                  <span className="text-gray-700 text-sm">
                    Putting the plan into action with continuous monitoring and agile adjustments.
                  </span>
                </Card>
              }
            />
          </Steps>
        </div>
      </div>
    </div>
  );
};

export default BusiProcess;
