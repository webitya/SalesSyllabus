import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";

const WhatWeOffer = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl text-center">
          What We Offer
        </h2>
        
        <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto text-center">
          Our services help you build, maintain, and grow your brand through strategic efforts.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
          {/* Offer 1 */}
          <div className="text-center bg-gray-50 border-2 border-blue-500 shadow-lg rounded-lg p-6">
            <CheckCircleOutlined style={{ fontSize: '40px', color: "#4C6DC7" }} />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Brand Identity Creation</h3>
            <p className="mt-2 text-base text-gray-500">
              Develop a clear, cohesive brand identity that stands out in the market.
            </p>
          </div>

          {/* Offer 2 */}
          <div className="text-center bg-gray-50 border-2 border-pink-500 shadow-lg rounded-lg p-6">
            <CheckCircleOutlined style={{ fontSize: '40px', color: "#E6377A" }} />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Message Development</h3>
            <p className="mt-2 text-base text-gray-500">
              Craft impactful messaging that resonates with your audience.
            </p>
          </div>

          {/* Offer 3 */}
          <div className="text-center bg-gray-50 border-2 border-blue-500 shadow-lg rounded-lg p-6">
            <CheckCircleOutlined style={{ fontSize: '40px', color: "#4C6DC7" }} />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Community Engagement</h3>
            <p className="mt-2 text-base text-gray-500">
              Build a loyal community that supports and advocates for your brand.
            </p>
          </div>

          {/* Highlighted Offer */}
          <div className="text-center bg-gray-50 border-2 border-pink-500 shadow-lg rounded-lg p-6">
            <CheckCircleOutlined style={{ fontSize: '40px', color: "#E6377A" }} />
            <h3 className="mt-4 text-xl font-semibold text-pink-600">Influencer Campaigns</h3>
            <p className="mt-2 text-base text-gray-500">
              Run campaigns with influencers to extend your brand’s reach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
