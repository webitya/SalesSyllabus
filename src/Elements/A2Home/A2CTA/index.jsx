import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { CheckCircleOutlined, DatabaseOutlined, BarChartOutlined } from "@ant-design/icons";
import "./A2CTA.css";

const CallToActionA2 = () => {
  return (
    <div className="bg-white md:py-2 py-2 px-2 md:px-10 rounded-lg text-center relative shadow-lg">
      <h1 className="text-3xl font-semibold text-blue-900">
      The Change We Bring
      </h1>
      <h3 className="text-2xl p-4"> We revolutionize how sales and marketing functions deliver results by:</h3>

      {/* Points in 3 rows with icons and descriptions only */}
      <div className="space-y-8 mb-8">
        <div className="flex items-start justify-start gap-4">
          <CheckCircleOutlined className="text-blue-600 text-2xl" />
          <p className="text-gray-600">
          Enhancing team workflows and task execution to meet individual and organizational goals.
          </p>
        </div>

        <div className="flex items-start justify-start gap-4">
          <DatabaseOutlined className="text-blue-600 text-2xl" />
          <p className="text-gray-600">
          Redefining how efforts are measured, analyzed, and improved by management.
          </p>
        </div>

        <div className="flex items-start justify-start gap-4">
          <BarChartOutlined className="text-blue-600 text-2xl" />
          <p className="text-gray-600">
          Instilling a data-driven and computational mindset within management behaviors.
          </p>
        </div>
      </div>

      {/* Updated Buttons Section */}
      <div className="flex justify-center gap-6 mb-4">
        <Link
          to="https://calendly.com/salessyllabus"
          className="rectangle-button flex items-center justify-center gap-3 text-white py-3 px-8 transition-all duration-300"
        >
          <span>Talk to Experts to Know ROI</span>
          <ArrowRightOutlined className="text-lg" />
        </Link>
        <Link
          to="/case-studies"
          className="border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white"
        >
          Explore Our Success Stories
        </Link>
      </div>
    </div>
  );
};

export default CallToActionA2;
