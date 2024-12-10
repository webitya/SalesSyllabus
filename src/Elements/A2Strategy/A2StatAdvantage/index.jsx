import React from "react";
import { Layout, Card } from "antd";
import { BulbOutlined, LineChartOutlined, RiseOutlined } from "@ant-design/icons";

const { Content } = Layout;

// Array for advantages
const advantages = [
  {
    id: 1,
    icon: <BulbOutlined className="text-4xl text-yellow-500" />,
    title: "Customization",
    description:
      "No one-size-fits-all solutions—your strategy is as unique as your business.",
  },
  {
    id: 2,
    icon: <LineChartOutlined className="text-4xl text-blue-500" />,
    title: "Data-Driven Insights",
    description: "Strategies informed by research and analytics.",
  },
  {
    id: 3,
    icon: <RiseOutlined className="text-4xl text-green-500" />,
    title: "Scalable Solutions",
    description: "Plans that evolve as your business grows.",
  },
];

const A2SalesSyllabusAdvantage = () => {
  return (
    <Layout className="bg-gray-50 py-10">
      <Content className="mx-auto px-6">
        <h1 className="text-3xl text-center text-gray-800 mb-8">
          The Sales Syllabus Advantage
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Our strategic planning isn’t just about creating a plan—it’s about crafting a tailored 
          strategy that aligns with your business vision and delivers measurable results.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage) => (
            <Card
              key={advantage.id}
              className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl p-6"
              bordered={false}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{advantage.icon}</div>
                <h2 className="text-xl font-semibold mb-2">{advantage.title}</h2>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Content>
    </Layout>
  );
};

export default A2SalesSyllabusAdvantage;
