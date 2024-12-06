import React from "react";
import { Link } from "react-router-dom";
import { FileSearchOutlined, ScheduleOutlined, BuildOutlined, RocketOutlined } from "@ant-design/icons"; // Import Ant Design icons

const KeyDeliverableEl = () => {
  // Array of deliverables
  const deliverables = [
    {
      icon: <FileSearchOutlined />, // Add the corresponding icon
      title: "ICP Research and Documentation",
      description:
        "A detailed document defining the target audience and identifying high-potential market segments.",
    },
    {
      icon: <ScheduleOutlined />, // Add the corresponding icon
      title: "Strategic Planning and Resource Allocation",
      description:
        "A comprehensive business communication plan outlining strategies to reach the target and high-potential market segments effectively.",
    },
    {
      icon: <BuildOutlined />, // Add the corresponding icon
      title: "Sales Framework Development",
      description:
        "A detailed operational framework for the team to acquire high-potential market segments. This includes reports, problem management strategies, KPIs, KRAs, activities, stakeholder responsibilities, manpower planning, and ROI analysis.",
    },
    {
      icon: <RocketOutlined />, // Add the corresponding icon
      title: "Support and Execution",
      description:
        "End-to-end support for execution and iterative improvements until proof of concept (POC) is achieved and self-dependency is established.",
    },
  ];

  return (
    <div className="w-full text-center px-5 py-2">
      <div className="flex justify-center">
        <img src="/logob.png" style={{ width: "80px" }} alt="Logo" />
      </div>
      {/* Title */}
      <h2 className="text-2xl font-bold mb-3" style={{ color: "#F49465" }}>
        Key Deliverables
      </h2>

      {/* Section Content */}
      <div className="text-left mx-auto text-gray-700">
        {deliverables.map((item, index) => (
          <div key={index} className="mb-3 flex items-start">
            {/* <div className="text-blue-600 text-xl mr-2">{item.icon}</div> */}
            <div>
              <h3 className="text-lg text-blue-600 mb-1">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Link to="https://calendly.com/salessyllabus" target="_blank">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Book Consultation Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default KeyDeliverableEl;
