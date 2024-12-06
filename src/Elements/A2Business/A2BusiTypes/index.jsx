import React from "react";
import { LineChartOutlined, RiseOutlined, SearchOutlined, HomeOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import { Card } from "antd";
import "tailwindcss/tailwind.css";

const marketAnalysisApproach = [
  { icon: <LineChartOutlined className="text-2xl text-blue-600" />, title: "Industry Research", description: "We analyze industry trends, growth forecasts, and technological advancements that could impact your business." },
  { icon: <SearchOutlined className="text-2xl text-green-600" />, title: "Competitor Analysis", description: "Gain in-depth insights into your competitors' strategies, market share, pricing, and customer engagement practices." },
  { icon: <CustomerServiceOutlined className="text-2xl text-red-600" />, title: "Customer Insights", description: "Leverage data to understand customer preferences, pain points, and buying behaviors, creating a foundation for targeted marketing." },
  { icon: <HomeOutlined className="text-2xl text-purple-600" />, title: "Geographic Market Segmentation", description: "Whether you’re expanding regionally or targeting global markets, we assess regional demand, cultural nuances, and economic conditions." },
  { icon: <RiseOutlined className="text-2xl text-yellow-600" />, title: "Trend Spotting", description: "Identify emerging opportunities by analyzing market patterns, innovations, and disruptions." },
  { icon: <LineChartOutlined className="text-2xl text-orange-600" />, title: "Data-Driven Decision Making", description: "We help turn insights into actionable strategies, ensuring informed decisions for sustainable growth." }
];

const BusinessPlanPage = () => (
  <div className="w-full py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <section>
        <h2 className="text-3xl  text-center mb-2 text-gray-800">Our Market Analysis Approach</h2>
        <p className="text-center text-sm py-3">Sales Syllabus takes a structured and data-driven approach to market analysis, ensuring 
        actionable insights tailored to your business needs</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {marketAnalysisApproach.map((approach, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-1">
                {approach.icon}
                <h3 className=" font-semibold ml-4">{approach.title}</h3>
              </div>
              <p className="text-gray-600">{approach.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default BusinessPlanPage;
