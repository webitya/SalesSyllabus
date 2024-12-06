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
    title: "Generate Content – Research & Development",
    description: "Create high-quality content like blogs, PPTs, videos, and valuable information to position yourself as a thought leader.",
    icon: <FundProjectionScreenOutlined className="text-blue-600 text-2xl" />,
    group: 1,
  },
  {
    title: "Distribute Content – Organic Marketing",
    description: "Use strategic SEO, SMM, website publications, and community building to organically distribute your content.",
    icon: <UserAddOutlined className="text-blue-600 text-2xl" />,
    group: 2, // Group 2
  },
  {
    title: "Distribute Content – Inorganic Marketing",
    description: "Use paid search ads, social media ads, affiliate marketing, email marketing, and events (online & offline) to boost content visibility.",
    icon: <DesktopOutlined className="text-blue-600 text-2xl" />,
    group: 2, // Group 2
  },
  {
    title: "Analysis & Improvement – Engagement & Impressions",
    description: "Track engagement, impressions, and optimize to boost audience interaction and exposure.",
    icon: <RetweetOutlined className="text-blue-600 text-2xl" />,
    group: 3, // Group 3
  },
  {
    title: "Analysis & Improvement – Lead Generation & CTR",
    description: "Focus on increasing CTR, lead generation, and overall lead performance by refining strategies.",
    icon: <LineChartOutlined className="text-blue-600 text-2xl" />,
    group: 3, // Group 3
  },
];

const ContentSteps = () => {
  return (
    <div className="bg-gray-50 md:p-10 p-2" id="stepsOfContentMarketing">
      <Card className="shadow-lg rounded-lg border border-blue-500 transition duration-300 ease-in-out hover:shadow-xl hover:border-blue-600">
        <Title level={3} className="text-gray-800 text-center mb-6">
          Steps of Content Marketing
        </Title>
        <List
          itemLayout="horizontal"
          dataSource={services}
          renderItem={(item) => (
            <List.Item
              className={`border-b border-gray-200 hover:bg-gray-100 transition duration-300 ease-in-out ${
                item.group === 1
                  ? "bg-blue-100 border-l-4 border-blue-500 pl-0"
                  : item.group === 2
                  ? "bg-yellow-100 border-l-4 border-yellow-500 pl-0"
                  : item.group === 3
                  ? "bg-green-100 border-l-4 border-green-500 pl-0"
                  : ""
              }`}
            >
              <List.Item.Meta
                avatar={item.icon}
                title={<span className="text-gray-700 font-semibold">{item.title}</span>}
                description={<span className="text-gray-600">{item.description}</span>}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default ContentSteps;
