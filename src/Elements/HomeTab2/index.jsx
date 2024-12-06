import React, { useState } from "react";
import { SolutionOutlined, LineChartOutlined, DollarOutlined } from "@ant-design/icons";
import "./HomeTab2.css";
import { motion } from "framer-motion";

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
        title: "Performance Marketing",
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
        icon: <DollarOutlined className="animated-icon" />,
        additionalInfo: [
          "Sales foundation setup",
          "Custom sales training for teams",
          "Structured framework for lead qualification"
        ],
      },
      {
        title: "Performance Metrics & KPI Tracking",
        description: "Set up performance metrics and KPIs to track sales efficiency and support data-driven decision making.",
        icon: <DollarOutlined className="animated-icon" />,
        additionalInfo: [
          "Define and monitor key performance indicators (KPIs)",
          "Implement systems for tracking sales performance",
          "CRM setup and lead tracking mechanisms",
        ],
      },
      {
        title: "Sales Recruitment & Coaching",
        description: "Provide recruitment support and coaching to build high-performing sales teams.",
        icon: <DollarOutlined className="animated-icon" />,
        additionalInfo: [
          "Sales recruitment strategies",
          "Sales coaching for skill enhancement",
          "Performance management systems setup",
        ],
      },
      {
        title: "Sales Analytics & Support",
        description: "Enhance sales performance with advanced analytics and support for ongoing improvement.",
        icon: <DollarOutlined className="animated-icon" />,
        additionalInfo: [
          "Advanced sales analytics for insights",
          "Regular participation in performance reviews",
          "Strategic adjustments based on data analysis",
        ],
      },
    ],
  },
];

const HomeTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="hidden md:flex flex-col md:flex-row bg-gray-200 p-8 shadow-2xl">

      <div className="md:w-5/12 flex flex-col pr-8">
        <h1 className="text-zinc-700 text-4xl font-extrabold mb-6">Comprehensive Business Solutions</h1>
        <p className="text-blue-500 mb-10 text-lg leading-relaxed">
          Unlock your business's potential with tailored strategies and solutions.
        </p>
        <div className="grid grid-cols-1 gap-4">
          {tabData.map((tab, index) => (
            <motion.button
              key={index}
              whileTap={{ scale: 0.97 }}
              className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-all duration-300 
              ${activeTab === index 
                  ? "bg-blue-800 text-white shadow-lg scale-105" 
                  : "bg-blue-200 text-blue-800 hover:bg-blue-300 shadow-md"}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div
        className="md:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {tabData[activeTab].content.map((card, index) => (
          <motion.div
            className={`card-glassmorphism 
                        ${index % 4 === 0 ? "bg-soft-blue" : 
                        index % 4 === 1 ? "bg-soft-silver" : 
                        index % 4 === 2 ? "bg-soft-gold" : 
                        "bg-soft-cyan"}`}
            key={index}
            whileHover={{ scale: 1.03 }}
          >
            <motion.div
              className="text-white text-4xl mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              {card.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold text-blue-900">{card.title}</h3>
            <p className="text-zinc-900 mt-2">{card.description}</p>
            <ul className="list-disc list-inside mt-4 text-zinc-900 space-y-1">
              {card.additionalInfo.map((info, idx) => (
                <li key={idx}>{info}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HomeTab;
