import React from "react";
import { Card, Typography, Button } from "antd";
import { BarChartOutlined, FileTextOutlined, AimOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const BusiHero = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <Title className="text-[#46077A] font-bold text-4xl mb-4">Business Planning: Your Blueprint for Success</Title>
        <Paragraph className="text-gray-700 text-lg mb-8">
          We craft detailed business plans that set the course for market leadership and profitability.
        </Paragraph>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-md rounded-lg p-5">
            <AimOutlined className="text-[#7E1E43] text-3xl mb-4" />
            <Title level={4} className="text-[#46077A]">Strategic Direction</Title>
            <Paragraph>
              In-Depth Market Analysis: Every plan is backed by exhaustive market and competitor analysis to inform strategic decision-making.
            </Paragraph>
          </Card>
          
          <Card className="bg-white shadow-md rounded-lg p-5">
            <BarChartOutlined className="text-[#7E1E43] text-3xl mb-4" />
            <Title level={4} className="text-[#46077A]">Scalable Growth</Title>
            <Paragraph>
              Our business plans are not just about today; they’re built to ensure your business continues to grow and succeed over the long term.
            </Paragraph>
          </Card>
          
          <Card className="bg-white shadow-md rounded-lg p-5">
            <FileTextOutlined className="text-[#7E1E43] text-3xl mb-4" />
            <Title level={4} className="text-[#46077A]">Key Outcomes</Title>
            <Paragraph>
              Clarity in decision-making, alignment of marketing efforts with business goals, identification of new revenue streams and business opportunities.
            </Paragraph>
          </Card>
        </div>

        <Button className="mt-8 bg-[#7E1E43] text-white hover:bg-[#4C6DC7]">Get Started</Button>
      </div>
    </div>
  );
};

export default BusiHero;
