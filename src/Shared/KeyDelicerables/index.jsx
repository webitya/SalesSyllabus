import React from "react";
import { Link } from "react-router-dom";
import {
  FileTextOutlined,
  LineChartOutlined,
  CommentOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  AimOutlined,
  BarChartOutlined,
  ExclamationCircleOutlined,
  DollarCircleOutlined,
  FundOutlined,
} from "@ant-design/icons";

const FrameworkAuthenticity = () => {
  const features = [
    {
      icon: <FileTextOutlined className="text-blue-600 text-3xl mr-4" />,
      description: "Record client-facing efforts quantitatively and qualitatively.",
    },
    {
      icon: <LineChartOutlined className="text-blue-600 text-3xl mr-4" />,
      description: "Focus efforts on high-paying segments.",
    },
    {
      icon: <CommentOutlined className="text-blue-600 text-3xl mr-4" />,
      description:
        "Align business communication with the pain points of prospective customers, building trust and credibility.",
    },
    {
      icon: <TeamOutlined className="text-blue-600 text-3xl mr-4" />,
      description: "Facilitate self-reflection and motivation among client-facing teams.",
    },
    {
      icon: <ClockCircleOutlined className="text-blue-600 text-3xl mr-4" />,
      description: "Reduce unproductive time by 40-50% through effective guidance.",
    },
    {
      icon: <AimOutlined className="text-blue-600 text-3xl mr-4" />,
      description:
        "Link team efforts to annual goals and milestones, enabling immediate interventions for identified gaps.",
    },
    {
      icon: <BarChartOutlined className="text-blue-600 text-3xl mr-4" />,
      description:
        "Provide executive-level insights for problem-solving and performance tracking.",
    },
    {
      icon: <ExclamationCircleOutlined className="text-blue-600 text-3xl mr-4" />,
      description: "Present precise issues to management for quick resolution.",
    },
    {
      icon: <DollarCircleOutlined className="text-blue-600 text-3xl mr-4" />,
      description:
        "Conduct ROI and financial analyses to refine marketing channels, vendors, and strategies.",
    },
    {
      icon: <FundOutlined className="text-blue-600 text-3xl mr-4" />,
      description:
        "Enable management to make real-time, data-driven decisions, reducing problem-solving time by 90%.",
    },
    {
      icon: <LineChartOutlined className="text-blue-600 text-3xl mr-4" />,
      description:
        "Monitor progress in alignment with ideal goals, milestones, and performance benchmarks.",
    },
  ];

  return (
    <div className="w-full px-4 py-8 bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-6">
          <img src="/logob.png" style={{ width: "80px" }} alt="Logo" />
        </div>
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Key Deliverables</h2>
        <ul className="text-left text-lg text-gray-800 mb-4">
          <li>1. Ideal Customer Profile</li>
          <li>2. Marketing Communication Strategy</li>
          <li>3. Reporting System and Framework</li>
          <li>4. Support and Execution</li>
        </ul>
        <p className="text-gray-700">
          Proven across 100+ companies, the framework empowers organizations to:
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-4xl w-full text-left grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            {feature.icon}
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-10">
        <Link to="https://calendly.com/salessyllabus" target="_blank">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md shadow-md hover:bg-blue-700 transition">
            Book Consultation Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FrameworkAuthenticity;
