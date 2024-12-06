import React from "react";
import { Card } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import "tailwindcss/tailwind.css";

const actionableInsights = [
  "Set measurable goals.",
  "Design customer-centric products and services.",
  "Refine marketing and sales strategies.",
  "Build accurate financial forecasts.",
  "Adapt plans as market conditions evolve.",
];

const A2InsightsToActionSection = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className=" mx-auto px-4">
        <Card className="shadow-lg border-none p-6 bg-white">
          <h2 className="text-3xl  text-gray-800 mb-6 text-center">
            Turning Insights into Actionable Plans
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
            Our market analysis feeds directly into your business planning to:
          </p>
          <ul className="space-y-4">
            {actionableInsights.map((insight, index) => (
              <li
                key={index}
                className="flex items-center space-x-4 text-gray-800 text-lg"
              >
                <CheckCircleOutlined className="text-blue-500 text-xl" />
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default A2InsightsToActionSection;
