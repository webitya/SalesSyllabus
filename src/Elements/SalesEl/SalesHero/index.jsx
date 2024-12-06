import React from "react";
import { RocketOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const SalesHero = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <RocketOutlined style={{ fontSize: '50px', color: "#E6377A" }} />
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
          Elevate Your Sales Performance
        </h1>
        
        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-300">
          Drive exceptional results with our proven sales consulting strategies. From recruitment to training, 
          we empower your sales team to reach new heights.
        </p>

        <div className="mt-8">
          <Link
            to="/contact-us"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-500 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SalesHero;
