import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./A2CTA.css";

const CallToActionA2 = () => {
  return (
    <div className="bg-gray-100 md:py-20 py-10 px-5 md:px-10 rounded-lg text-center relative">
      <h1 className="text-3xl font-bold text-blue-800 mb-5">
        Gain insights from our proven track record and successful historical data to refine your business strategy
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Our services support organizations in transforming their business to drive growth and stay competitive in an ever-changing environment.
      </p>

      {/* Updated Buttons Section */}
      <div className="flex justify-center gap-6 mb-4">
        <Link
          to="https://calendly.com/salessyllabus"
          className="rectangle-button flex items-center justify-center gap-3 text-white py-3 px-8 transition-all duration-300"
        >
          <span>Claim Your Free Data Analysis Session</span>
          <ArrowRightOutlined className="text-lg" />
        </Link>
        <Link
          to="/case-studies"
          className="border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white"
        >
          See Our Success Stories
        </Link>
      </div>
    </div>
  );
};

export default CallToActionA2;
