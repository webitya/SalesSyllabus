



import React, { useState } from "react";
import { SolutionOutlined, LineChartOutlined, DollarOutlined } from "@ant-design/icons";

const tabData = [
  {
    title: "Business Planning",
    content: [
      {
        title: "Startup",
        description: "Focuses on initial business setup, funding, and market entry.",
        icon: <SolutionOutlined className="animated-icon" />,
        additionalInfo: ["Business setup", "Funding strategies", "Market entry planning"],
      },
      {
        title: "Internal",
        description: "Created for organizational use, guiding management.",
        icon: <SolutionOutlined className="animated-icon" />,
        additionalInfo: ["Operational guidance", "Management objectives", "Resource allocation"],
      },
      {
        title: "Strategic",
        description: "Outlines long-term goals and strategies.",
        icon: <SolutionOutlined className="animated-icon" />,
        additionalInfo: ["Long-term goals", "Competitive analysis", "Growth strategies"],
      },
      {
        title: "Feasibility",
        description: "Tests whether a business idea is viable.",
        icon: <SolutionOutlined className="animated-icon" />,
        additionalInfo: ["Market research", "Financial viability", "Risk assessment"],
      },
    ],
  },
  {
    title: "Marketing Solution",
    content: [
      {
        title: "SEO and Content Marketing",
        description: "Comprehensive analysis and strategic SEO to improve search visibility and drive organic traffic.",
        icon: <LineChartOutlined className="animated-icon" />,
        additionalInfo: [
          "SEO audit and issue identification",
          "Keyword research for high-intent keywords",
          "Content creation: blogs, case studies, landing pages",
          "Technical SEO and Local SEO optimization",
          "Regular competitor analysis to stay ahead"
        ],
      },
      {
        title: "Paid Advertising and Retargeting",
        description: "Targeted ads and optimization to drive conversions and recapture audience interest.",
        icon: <LineChartOutlined className="animated-icon" />,
        additionalInfo: [
          "Social media campaigns on LinkedIn, Facebook, Instagram",
          "High-intent PPC campaigns for purchase-ready keywords",
          "Retargeting to re-engage interested visitors",
          "Conversion Rate Optimization (CRO) to improve ad performance",
        ],
      },
      {
        title: "Online Reputation Management",
        description: "Protect and enhance brand reputation through active engagement and monitoring.",
        icon: <LineChartOutlined className="animated-icon" />,
        additionalInfo: [
          "Encourage reviews on relevant platforms",
          "Monitor and engage on social media",
          "Crisis management for potential negative feedback",
          "Sentiment analysis for real-time brand perception",
        ],
      },
      {
        title: "Community Building & Brand Engagement",
        description: "Create a loyal customer community and enhance brand engagement through strategic content.",
        icon: <LineChartOutlined className="animated-icon" />,
        additionalInfo: [
          "Develop a social media content calendar",
          "Encourage user-generated content",
          "Host webinars and online events",
          "Email newsletters for regular updates",
          "Establish a community platform and ambassador program",
        ],
      },
    ],
  },
  {
    title: "Sales Consulting",
    content: [
      {
        title: "Sales Foundation & Training",
        description: "Establish essential sales foundations and provide comprehensive training to ensure effective selling techniques.",
        icon: <LineChartOutlined className="animated-icon" />,
        additionalInfo: [
          "Sales foundation setup",
          "Custom sales training for teams",
          "Structured framework for lead qualification"
        ],
      },
      {
        title: "Performance Metrics & KPI Tracking",
        description: "Set up performance metrics and KPIs to track sales efficiency and support data-driven decision making.",
        icon: <LineChartOutlined className="animated-icon" />,
        additionalInfo: [
          "Define and monitor key performance indicators (KPIs)",
          "Implement systems for tracking sales performance",
          "CRM setup and lead tracking mechanisms",
        ],
      },
      {
        title: "Sales Recruitment & Coaching",
        description: "Provide recruitment support and coaching to build high-performing sales teams.",
        icon: <LineChartOutlined className="animated-icon" />,
        additionalInfo: [
          "Sales recruitment strategies",
          "Sales coaching for skill enhancement",
          "Performance management systems setup",
        ],
      },
      {
        title: "Sales Analytics & Support",
        description: "Enhance sales performance with advanced analytics and support for ongoing improvement.",
        icon: <LineChartOutlined className="animated-icon" />,
        additionalInfo: [
          "Advanced sales analytics for insights",
          "Regular participation in performance reviews",
          "Strategic adjustments based on data analysis",
        ],
      },
    ],
  },
  ];

const HomeTabMobile = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className="md:hidden block p-4 space-y-4 bg-gray-50 rounded-lg">
      <h1 className="text-zinc-700 text-4xl font-extrabold mb-6">Comprehensive Business Solutions</h1>
        <p className="text-blue-500 mb-10 text-lg leading-relaxed">
          Unlock your business's potential with tailored strategies and solutions.
        </p>
      {tabData.map((tab, index) => (
        <div key={index} className="mb-4">
          <button
            className={`w-full text-left font-semibold py-3 px-4 rounded-lg transition-colors duration-300 ${
              activeTab === index ? "bg-indigo-600 text-white" : "bg-indigo-100 text-indigo-700"
            }`}
            onClick={() => toggleTab(index)}
          >
            {tab.title}
          </button>

          {activeTab === index && (
            <div className="grid gap-4 pt-4">
              {tab.content.map((card, idx) => (
                <div
                  key={idx}
                  className="p-4 border rounded-lg bg-white shadow-sm transition transform hover:scale-105"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-xl">{card.icon}</div>
                    <h3 className="font-semibold text-gray-800">{card.title}</h3>
                  </div>
                  <p className="mt-2 text-gray-600">{card.description}</p>
                  <ul className="mt-3 pl-4 list-disc text-sm text-gray-500 space-y-1">
                    {card.additionalInfo.map((info, id) => (
                      <li key={id}>{info}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeTabMobile;
