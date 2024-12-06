import React from "react";
import { Card, Typography, List } from "antd";
import {
  FundProjectionScreenOutlined,
  UserAddOutlined,
  DesktopOutlined,
  RetweetOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const services = [
  {
    title: "Paid Search (PPC)",
    icon: <FundProjectionScreenOutlined className="text-blue-600 text-2xl" />,
  },
  {
    title: "Paid Social Media Campaigns",
    icon: <UserAddOutlined className="text-blue-600 text-2xl" />,
  },
  {
    title: "Display Advertising",
    icon: <DesktopOutlined className="text-blue-600 text-2xl" />,
  },
  {
    title: "Retargeting Campaigns",
    icon: <RetweetOutlined className="text-blue-600 text-2xl" />,
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    icon: <LineChartOutlined className="text-blue-600 text-2xl" />,
  },
];

const PerfoSteps = () => {
  return (
    <div className="bg-gray-50 p-10">
      <Card className="shadow-lg rounded-lg p-8 border border-blue-500 transition duration-300 ease-in-out hover:shadow-xl hover:border-blue-600">
        <Title level={3} className="text-gray-800 text-center mb-6">
          {/* What We Offer */}
        </Title>
        <List
          itemLayout="horizontal"
          dataSource={services}
          renderItem={(item) => (
            <List.Item className="border-b border-gray-200 hover:bg-gray-100 transition duration-300 ease-in-out rounded-lg">
              <List.Item.Meta
                avatar={item.icon}
                title={<span className="text-gray-700 font-semibold">{item.title}</span>}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default PerfoSteps;
