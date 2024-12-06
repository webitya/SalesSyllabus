import React from "react";
import { LineChartOutlined, UserSwitchOutlined, HeartOutlined } from "@ant-design/icons";

const WhyB2B = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="lg:pr-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Why It’s Essential for B2B
          </h2>
          
          <p className="mt-4 text-lg text-gray-500">
            Our branding strategies and community-building efforts are not just for consumer brands. 
            B2B companies benefit greatly from creating lasting relationships and industry leadership. 
            Here’s why it matters:
          </p>

          {/* Benefits List */}
          <ul className="mt-8 space-y-6">
            <li className="flex items-start">
              <LineChartOutlined style={{ fontSize: '30px', color: "#4C6DC7" }} />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">Industry Leadership</h3>
                <p className="mt-2 text-base text-gray-500">
                  Position your business as a leader in your industry, gaining authority and influence.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <UserSwitchOutlined style={{ fontSize: '30px', color: "#E6377A" }} />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">Building Relationships</h3>
                <p className="mt-2 text-base text-gray-500">
                  Foster long-term relationships with key stakeholders and clients.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <HeartOutlined style={{ fontSize: '30px', color: "#4C6DC7" }} />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">Enhancing Loyalty</h3>
                <p className="mt-2 text-base text-gray-500">
                  Strengthen brand loyalty, turning your clients into advocates for your business.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Illustration / Icon Section */}
        <div className="flex justify-center items-center lg:pl-8">
          <img
            src="/b2b.svg"
            alt="B2B Benefits Illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyB2B;
