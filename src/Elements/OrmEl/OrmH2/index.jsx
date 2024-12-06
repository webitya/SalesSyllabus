import React from 'react';
import { SolutionOutlined, LineChartOutlined, StarOutlined, CheckCircleOutlined } from '@ant-design/icons';

const OnlineReputationSection = () => {
  return (
    <div className="online-reputation-section py-20 px-6 lg:px-16 bg-white">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Understanding Online Reputation
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-12">
          Explore the critical elements that shape your brand's online image.
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Item 1: What is Online Reputation */}
          <div className="reputation-card bg-gray-50 rounded-lg p-6 shadow-md transition-shadow duration-200 hover:shadow-lg">
            <CheckCircleOutlined className="text-[#E6377A] text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">What is Online Reputation?</h3>
            <p className="text-gray-600 text-base">
              Online reputation is the perception of your brand based on digital interactions and customer feedback found online.
            </p>
          </div>

          {/* Item 2: Online vs Offline Reputation */}
          <div className="reputation-card bg-gray-50 rounded-lg p-6 shadow-md transition-shadow duration-200 hover:shadow-lg">
            <StarOutlined className="text-[#4C6DC7] text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Online vs Offline Reputation</h3>
            <p className="text-gray-600 text-base">
              Online reputation can change rapidly, unlike offline reputation, which is built over time through personal interactions.
            </p>
          </div>

          {/* Item 3: Importance Today */}
          <div className="reputation-card bg-gray-50 rounded-lg p-6 shadow-md transition-shadow duration-200 hover:shadow-lg">
            <SolutionOutlined className="text-[#E6377A] text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Why is it Required Today?</h3>
            <p className="text-gray-600 text-base">
              A strong online reputation is essential for attracting and retaining customers, especially in the digital age.
            </p>
          </div>

          {/* Item 4: Impact on Sales */}
          <div className="reputation-card bg-gray-50 rounded-lg p-6 shadow-md transition-shadow duration-200 hover:shadow-lg">
            <LineChartOutlined className="text-[#4C6DC7] text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Impact on Sales</h3>
            <p className="text-gray-600 text-base">
              Positive online reviews and a solid reputation can lead to higher conversion rates and increased sales.
            </p>
          </div>

          {/* Item 5: Process and Approach */}
          <div className="reputation-card bg-gray-50 rounded-lg p-6 shadow-md transition-shadow duration-200 hover:shadow-lg">
            <CheckCircleOutlined className="text-[#E6377A] text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Process and Approach</h3>
            <p className="text-gray-600 text-base">
              Managing online reputation involves monitoring feedback, engaging with customers, and addressing concerns promptly.
            </p>
          </div>

          {/* Item 6: KPIs */}
          <div className="reputation-card bg-gray-50 rounded-lg p-6 shadow-md transition-shadow duration-200 hover:shadow-lg">
            <StarOutlined className="text-[#4C6DC7] text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Performance Indicators (KPIs)</h3>
            <p className="text-gray-600 text-base">
              Measure success through metrics like review ratings, social media engagement, and website traffic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineReputationSection;
