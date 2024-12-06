import React from "react";
import { Card, Typography } from "antd";
import { UnlockOutlined, AimOutlined, RiseOutlined, DashboardOutlined } from "@ant-design/icons"; // Use AimOutlined instead

const { Title, Paragraph } = Typography;

const BusiBenefits = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <Title className="text-[#46077A] font-bold text-4xl mb-6">Benefits of Effective Business Planning</Title>
        <Paragraph className="text-gray-700 text-lg mb-8">
          Discover how strategic planning can transform your business.
        </Paragraph>

        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-white shadow-md rounded-lg p-5">
            <UnlockOutlined className="text-[#7E1E43] text-3xl mb-4" />
            <Title level={4} className="text-[#46077A]">Increased Clarity</Title>
            <Paragraph>
              Clear goals and strategies lead to informed decision-making.
            </Paragraph>
          </Card>

          <Card className="bg-white shadow-md rounded-lg p-5">
            <AimOutlined className="text-[#7E1E43] text-3xl mb-4" /> {/* Updated icon */}
            <Title level={4} className="text-[#46077A]">Goal Alignment</Title>
            <Paragraph>
              Align your marketing efforts with business objectives for optimal performance.
            </Paragraph>
          </Card>

          <Card className="bg-white shadow-md rounded-lg p-5">
            <RiseOutlined className="text-[#7E1E43] text-3xl mb-4" />
            <Title level={4} className="text-[#46077A]">Scalable Growth</Title>
            <Paragraph>
              Build a foundation for sustainable growth and long-term success.
            </Paragraph>
          </Card>

          <Card className="bg-white shadow-md rounded-lg p-5">
            <DashboardOutlined className="text-[#7E1E43] text-3xl mb-4" />
            <Title level={4} className="text-[#46077A]">Enhanced Performance</Title>
            <Paragraph>
              Improve operational efficiency and track performance metrics effectively.
            </Paragraph>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BusiBenefits;
