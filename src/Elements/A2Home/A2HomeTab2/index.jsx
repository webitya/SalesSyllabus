import React, { useState } from "react";
import {
  SolutionOutlined,
  LineChartOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import "./A2HomeTab2.css";

// Updated tab data with your provided content
const tabData = [
  {
    title: "Business Planning",
    content: {
      title: "Business Planning",
      description:
        "A business plan is a formal document outlining the objectives, strategies, and operational framework of a business. It acts as a roadmap, guiding the business toward its goals and covering critical areas like marketing, finance, operations, and sales.",
      output:
        "Output: A well-defined business strategy document aligned with organizational objectives. This leads to improved resource allocation, minimizes errors and inefficiencies, and supports better decision-making.",
      icon: <SolutionOutlined className="animated-icon" />,
    },
  },
  {
    title: "Content Marketing",
    content: {
      title: "Content Marketing",
      description:
        "Strategic content creation designed to attract and engage the target audience, establish trust, and address their needs. Content marketing forms the foundation of digital marketing efforts, driving brand promotion, increasing traffic, and boosting conversions.",
      output:
        "Output: Build trust and position your brand as an expert by delivering content that solves audience challenges.",
      icon: <LineChartOutlined className="animated-icon" />,
    },
  },
  {
    title: "Sales Consulting",
    content: {
      title: "Sales Consulting",
      description:
        "Optimization of sales processes and continuous support for sales teams to improve performance and outcomes.",
      output:
        "Output: Enhanced sales productivity, increased ROI, and more confident, empowered sales teams.",
      icon: <DollarOutlined className="animated-icon" />,
    },
  },
];

const A2HomeTab2 = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mx-auto md:py-16 p-8 bg-gradient-to-br from-indigo-200 via-purple-100 to-white shadow-xl transition-all duration-500">
      {/* Tabs Section */}
      <div className="md:flex flex-col md:flex-row items-start">
        {/* Left Side Tabs */}
        <div className="md:w-5/12 flex flex-col pr-8 mb-6 md:mb-0">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Our Services</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Leverage our expertise to transform your business strategies.
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

        {/* Right Side Single Card */}
        <motion.div
          className="md:w-7/12 mt-10 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="card-glassmorphism p-8 rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 bg-gradient-to-r from-blue-50 via-blue-100 to-white"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-purple-600 text-4xl mb-6">
              {tabData[activeTab].content.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {tabData[activeTab].content.title}
            </h3>
            <p className="text-gray-700 mb-4">{tabData[activeTab].content.description}</p>
            <p className="text-gray-500 italic">{tabData[activeTab].content.output}</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default A2HomeTab2;
