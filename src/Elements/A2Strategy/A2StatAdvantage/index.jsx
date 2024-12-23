import React from "react";
import { Layout, Card } from "antd";
import { AimOutlined, BulbOutlined, LineChartOutlined, RiseOutlined } from "@ant-design/icons";

const { Content } = Layout;

const advantages = [
  {
    id: 1,
    icon: <BulbOutlined className="text-5xl text-yellow-500" />,
    title: "Customization",
    description:
      "No one-size-fits-all solutions—your Communication strategy is as unique as your business.",
  },
  {
    id: 2,
    icon: <LineChartOutlined className="text-5xl text-blue-500" />,
    title: "Data-Driven Insights",
    description: "Strategies informed by research and analytics.",
  },
  {
    id: 3,
    icon: <RiseOutlined className="text-5xl text-green-500" />,
    title: "Scalable Solutions",
    description: "Plans that evolve as your business grows.",
  },
];

const A2SalesSyllabusAdvantage = () => {
  return (
    <Layout className="bg-gray-50 py-12">
      <Content className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            The Sales Syllabus Advantage
          </h1>
          <p className="text-lg text-gray-600">
            The effectiveness of marketing communication will be continuously measured 
            through a reporting framework, enabling businesses to accurately identify, monitor, 
            and address growth barriers. This approach uncovers actionable insights, empowering teams to:
          </p>
        </div>

        {/* Action Points */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <div className="flex items-center gap-4">
            <AimOutlined className="text-4xl text-blue-400" />
            <span className="text-xl  text-gray-700">
              Resolve challenges independently.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <AimOutlined className="text-4xl text-blue-400" />
            <span className="text-xl  text-gray-700">
              Optimize performance continuously.
            </span>
          </div>
        </div>

        {/* Advantages Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage) => (
            <Card
              key={advantage.id}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6"
              bordered={false}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{advantage.icon}</div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {advantage.title}
                </h2>
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
