import React from "react";
import { FileTextOutlined, MonitorOutlined, GlobalOutlined, BulbOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";  // Re-add Tooltip
import { motion } from "framer-motion";

const BrandPositioningJourney = () => {
  const timelineData = [
    {
      year: "2024",
      icon: <FileTextOutlined style={{ fontSize: 32 }} />,
      description: "B2B buying behavior shifts to online research.",
      fullDescription: "Modern B2B buying behavior is increasingly driven by extensive online research.",
    },
    {
      year: "2025",
      icon: <MonitorOutlined style={{ fontSize: 32 }} />,
      description: "Content marketing creates long-term value via digital assets.",
      fullDescription: "Content marketing creates enduring digital assets that deliver long-term value.",
    },
    {
      year: "2026",
      icon: <GlobalOutlined style={{ fontSize: 32 }} />,
      description: "Positions your brand as a trusted authority adapting to changes.",
      fullDescription: "Content marketing positions your brand as a trusted authority, empowering your company to adapt seamlessly to shifting buying behaviors.",
    },
    {
      year: "2027",
      icon: <BulbOutlined style={{ fontSize: 32 }} />,
      description: "B2B marketing projected to shift online, with 60% of interactions.",
      fullDescription: "By 2028, up to 60% of B2B marketing interactions are projected to transition from traditional methods to online platforms.",
    },
  ];

  return (
    <div className="bg-white py-16 px-6 md:px-16 lg:px-32">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
        Brand Positioning Journey
      </h2>

      {/* Timeline */}
      <div className="relative flex flex-col md:flex-row justify-between items-center">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center space-y-4 w-full md:w-1/4 relative group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            {/* Connecting Lines */}
            {index > 0 && (
              <motion.div
                className="absolute top-16 -left-12 hidden md:block"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" className="h-12 w-24">
                  <path
                    d="M 0 25 Q 50 0, 100 25 T 200 25"
                    fill="none"
                    stroke="rgb(29, 78, 216)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                </svg>
              </motion.div>
            )}

            {/* Tooltip for whole content */}
            <Tooltip title={item.fullDescription} placement="top">
              <div className="flex flex-col items-center space-y-2 group-hover:scale-105 transition-transform">
                {/* Icon */}
                <div className="bg-blue-100 text-blue-700 p-4 rounded-full flex items-center justify-center shadow-md">
                  {item.icon}
                </div>

                {/* Year Badge */}
                <motion.div
                  className="bg-gradient-to-r from-blue-900 to-blue-600 text-white text-center py-1 px-6 rounded-full font-bold shadow-md group-hover:shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.year}
                </motion.div>

                {/* Short Description */}
                <motion.p
                  className="text-gray-700 text-sm md:text-base group-hover:text-blue-900 transition-colors duration-300"
                >
                  {item.description}
                </motion.p>
              </div>
            </Tooltip>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BrandPositioningJourney;
