import React, { useState } from "react";
import {
  SolutionOutlined,
  LineChartOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import "./A2HomeTab.css";

const tabData = [
  {
    title: "Organizational Asset Building",
    content: [
      {
        title: "Marketing Process",
        description:
          "Detailed planning and strategy on generating leads, communicating with the audience, and building brand perception.",
        output:
          "Output: A well-defined marketing strategy document that aligns with organizational objectives.",
        icon: <SolutionOutlined className="animated-icon" />,
      },
      {
        title: "Sales Process",
        description:
          "A strategy on nurturing leads generated from marketing efforts, covering KPIs, CRM setup, and performance management.",
        output: "Output: Lead Nurturing and Sales Enablement Plan",
        icon: <SolutionOutlined className="animated-icon" />,
      },
    ],
  },
  {
    title: "End-to-End Marketing Solutions",
    content: [
      {
        title: "Content Marketing",
        description:
          "Strategic content creation to attract and engage a target audience, establishing trust and solving their needs.",
        output: "Output: build Trust  and establish  a brand as an expert  by delivering content that solves audience problems",
        icon: <LineChartOutlined className="animated-icon" />,
      },
      {
        title: "Digital Marketing",
        description:
          "Leveraging digital channels to promote brands, drive traffic, and generate conversions.",
        output: "Output:To promote and create awareness about brand",
        icon: <LineChartOutlined className="animated-icon" />,
      },
    ],
  },
  {
    title: "Sales Enablement",
    content: [
      {
        title: "Continuous Coaching",
        description:
          "Ongoing guidance to enhance sales teams' skills and performance through personalized coaching.",
          output: "Output: Increased sales productivity, and more confident, empowered sales teams",
        
        icon: <DollarOutlined className="animated-icon" />,
      },
      {
        title: "Leadership Sessions",
        description:
          "Problem-solving sessions with leadership to address challenges, focusing on actionable solutions.",
          output: "Output: Faster problem resolution, increased sales productivity, and more confident, empowered sales teams",
        icon: <DollarOutlined className="animated-icon" />,
      },
    ],
  },
];

const A2HomeTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mx-auto md:py-16 p-8 bg-gradient-to-br from-indigo-200 via-purple-100 to-white shadow-xl transition-all duration-500">
      {/* Tabs Section */}
      <div className="md:flex flex-col md:flex-row items-start">
        {/* Left Side Tabs */}
        <div className="md:w-5/12 flex flex-col pr-8 mb-6 md:mb-0">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Our Services</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Leverage our expertise to transform your sales, marketing, and operational strategies.
          </p>
          <div className="grid grid-cols-1 gap-4">
            {tabData.map((tab, index) => (
              <motion.button
                key={index}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-4 px-6 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg 
                ${
                  activeTab === index
                    ? "bg-gradient-to-r from-blue-500 to-purple-700 text-white scale-105"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right Side Content */}
        <motion.div
          className="md:w-7/12 grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {tabData[activeTab].content.map((card, index) => (
            <motion.div
              key={index}
              className={`card-glassmorphism p-8 rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 
                ${
                  index % 4 === 0
                    ? "bg-gradient-to-r from-blue-50 via-blue-100 to-white"
                    : index % 4 === 1
                    ? "bg-gradient-to-r from-green-50 via-green-100 to-white"
                    : index % 4 === 2
                    ? "bg-gradient-to-r from-yellow-50 via-yellow-100 to-white"
                    : "bg-gradient-to-r from-pink-50 via-pink-100 to-white"
                }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-purple-600 text-4xl mb-6">{card.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-700 mb-4">{card.description}</p>
              <p className="text-gray-500 italic">{card.output}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default A2HomeTab;
