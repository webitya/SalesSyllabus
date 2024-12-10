import React from "react";
import { Card } from "antd";
import { AppstoreAddOutlined, SearchOutlined, BarChartOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import "tailwindcss/tailwind.css";

const toolsAndExpertise = [
  { icon: <AppstoreAddOutlined className="text-3xl text-blue-600" />, title: "Market Research Tools", description: "For detailed industry and competitor data" },
  { icon: <SearchOutlined className="text-3xl text-green-600" />, title: "Customer Surveys and Analytics", description: "For direct insights from your target audience" },
  { icon: <BarChartOutlined className="text-3xl text-purple-600" />, title: " Data Visualization Software", description: "To present insights in a clear and actionable format" },
  { icon: <UsergroupAddOutlined className="text-3xl text-red-600" />, title: " Experienced Analysts", description: " Professionals with years of experience in sales and marketing strategy." },
];

const ToolsAndExpertiseSection = () => (
  <section className="w-full md:py-20 py-5 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl  text-gray-800">Our Tools & Expertise</h2>
        <p className="text-lg">At Sales Syllabus, we use a combination of cutting-edge tools and expert analysis to 
        deliver reliable market insights</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {toolsAndExpertise.map((item, index) => (
          <Card
            key={index}
            className="shadow-sm hover:shadow-md transition-shadow duration-200 border-none bg-white rounded-lg p-4"
          >
            <div className="flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center">{item.title}</h3>
            <p className="text-gray-600 text-center">{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ToolsAndExpertiseSection;
