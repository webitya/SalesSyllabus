import React from "react";
import { Card } from "antd";
import { BarChartOutlined, BulbOutlined, FundOutlined, LineChartOutlined, SyncOutlined, SafetyOutlined } from "@ant-design/icons";
import "tailwindcss/tailwind.css";

const businessPlanningSteps = [
  { icon: <BarChartOutlined className="text-4xl text-blue-600" />, title: "Strategic Goal Setting", description: "Use market insights to define short-term and long-term objectives that are realistic and impactful." },
  { icon: <BulbOutlined className="text-4xl text-green-600" />, title: "Product and Service Development", description: "Align your offerings with market demand, ensuring relevance and competitive value." },
  { icon: <FundOutlined className="text-4xl text-red-600" />, title: "Sales and Marketing Strategies", description: "Optimize sales and marketing efforts with data-driven targeting and positioning." },
  { icon: <LineChartOutlined className="text-4xl text-purple-600" />, title: "Financial Projections", description: "Create accurate revenue and expense forecasts grounded in market realities." },
  { icon: <SyncOutlined className="text-4xl text-yellow-600" />, title: "Adaptation and Growth", description: "Continuously adapt your plans based on updated market insights to stay ahead of the competition." },
  { icon: <SafetyOutlined className="text-4xl text-indigo-600" />, title: "Risk Management and Mitigation", description: "Identify potential risks early and develop strategies to mitigate them, ensuring business resilience." },
];

const MarketAnalysisSection = () => (
  <section className="w-full md:py-20 py-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
    <div className="mx-auto px-6">
      <div className="text-center mb-3">
        <h2 className="text-3xl  text-gray-800">How Market Analysis Shapes Business Planning</h2>
        <p className="mt-2 text-lg text-gray-600  mx-auto mb-5">We integrate our findings into your business planning process to build a roadmap for 
        sustainable growth</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {businessPlanningSteps.map((step, index) => (
          <Card key={index} className="shadow-xl hover:shadow-2xl transition-shadow duration-300 border-none bg-white rounded-xl overflow-hidden">
            <div className="flex items-center space-x-3 p-2">
              {step.icon}
              <h3 className=" font-semibold text-gray-800">{step.title}</h3>
            </div>
            <p className="text-gray-600 text-sm px-5 pb-5">{step.description}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default MarketAnalysisSection;
