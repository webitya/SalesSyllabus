import React from "react";
import { Button } from "antd";
import {
  AimOutlined,
  BuildOutlined,
  RocketOutlined,
  FileDoneOutlined,
  SyncOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import "tailwindcss/tailwind.css";

const stages = [
  {
    id: 1,
    title: "Foundation",
    icon: <AimOutlined className="text-2xl text-white" />,
    description: "Define target market and KPIs.",
    bgColor: "bg-gradient-to-r from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Build Sales & Marketing Processes",
    icon: <BuildOutlined className="text-2xl text-white" />,
    description: "Develop messaging, reporting structure, and workflows.",
    bgColor: "bg-gradient-to-r from-blue-400 to-blue-500",
  },
  {
    id: 3,
    title: "Launch Lead Generation Campaigns",
    icon: <RocketOutlined className="text-2xl text-white" />,
    description: "Launch and test campaigns for lead generation.",
    bgColor: "bg-gradient-to-r from-blue-500 to-blue-600",
  },
  {
    id: 4,
    title: "Sales Execution & Closing",
    icon: <FileDoneOutlined className="text-2xl text-white" />,
    description: "Refine communication and set performance standards.",
    bgColor: "bg-gradient-to-r from-blue-500 to-blue-600",
  },
  {
    id: 5,
    title: "Performance Review & Adjustment",
    icon: <SyncOutlined className="text-2xl text-white" />,
    description: "Review performance and adjust to hit sales targets.",
    bgColor: "bg-gradient-to-r from-blue-500 to-blue-600",
  },
  {
    id: 6,
    title: "Customer Retention & Relationship",
    icon: <SmileOutlined className="text-2xl text-white" />,
    description: "Post-purchase follow-ups for long-term relationships.",
    bgColor: "bg-gradient-to-r from-blue-500 to-blue-600",
  },
];

const CompactSalesProcessSteps = () => {
  return (
    <div className="py-8 px-4 relative bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100">
      {/* Page Header */}
      <div className="text-center mb-4">
        <h1 className="md:text-3xl text-3xl font-bold text-gray-800">
          How We Achieve Success
        </h1>
        <p className="text-base text-gray-700  mx-auto mt-2">
          Our sales process implementation plan is divided into 6 stages for sustainable growth.
        </p>
      </div>

      {/* Compact Process List */}
      <div className="space-y-1 mx-auto">
        {stages.map((stage, index) => (
          <div key={stage.id} className="flex items-start relative">
            {/* Connecting Line */}
            {index !== stages.length - 1 && (
              <div className="absolute left-6 top-full border-l-2 border-gray-300"></div>
            )}

            {/* Step Icon with Background */}
            <div
              className={`${stage.bgColor} flex-shrink-0 w-12 h-12 flex items-center justify-center shadow-md rounded-full`}
            >
              {stage.icon}
            </div>

            {/* Step Content with Overlay */}
            <div className="ml-6 flex-1 bg-white bg-opacity-80 p-2 rounded-md shadow text-gray-900">
              <h2 className="" >
                Stage {stage.id}: {stage.title}
              </h2>
              <p className="text-sm mt-1 text-zinc-700">{stage.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Sticky Button for Success Stories */}
      <Button
        type=""
        className="fixed bottom-6 left-6 bg-gradient-to-r from-blue-500 to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white shadow-lg rounded-full px-4 py-3"
        onClick={() => window.open("/case-studies", "_blank")}
      >
        Read Success Stories
      </Button>
    </div>
  );
};

export default CompactSalesProcessSteps;
