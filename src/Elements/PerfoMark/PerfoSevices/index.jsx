import React from "react";
import { Card, Typography } from "antd";
import {
  FundProjectionScreenOutlined,
  InstagramOutlined,
  FacebookOutlined,
  GoogleOutlined,
  DesktopOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const services = [
  {
    title: "Paid Search (PPC)",
    icon: <GoogleOutlined className="text-blue-500 text-3xl" />,
    description:
      "Leverage paid search to get your business in front of potential customers at the moment they are searching.",
  },
  {
    title: "Paid Social Media Campaigns",
    icon: <FacebookOutlined className="text-blue-500 text-3xl" />,
    description:
      "Target your audience effectively with paid campaigns on platforms like Facebook and Instagram.",
  },
  {
    title: "Display Advertising",
    icon: <DesktopOutlined className="text-blue-500 text-3xl" />,
    description:
      "Engage users with visually appealing display ads across the web, tailored to reach your ideal audience.",
  },
  {
    title: "Retargeting Campaigns",
    icon: <FundProjectionScreenOutlined className="text-blue-500 text-3xl" />,
    description:
      "Re-engage visitors who have previously interacted with your brand, converting them into customers.",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    icon: <LineChartOutlined className="text-blue-500 text-3xl" />,
    description:
      "Improve your website's user experience to maximize conversions and drive sales.",
  },
];

const PerfoServices = () => {
  return (
    <div className="bg-gray-50 p-10">
      <Title level={3} className="text-center text-gray-800 !mb-10">
        Our Performance Marketing Services
      </Title>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-3">
        {services.map((service, index) => (
          <Card
            key={index}
            className="rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl"
            style={{
              backgroundColor: "#7E1E43",
              color: "white",
              position: "relative",
              padding: "20px",
            }}
          >
            <div className="absolute -top-6 left-4 p-3 bg-white rounded-full shadow-md">
              {service.icon}
            </div>
            <Title level={4} className="mt-2 !text-white">
              {service.title}
            </Title>
            <Paragraph className="text-white">{service.description}</Paragraph>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PerfoServices;
