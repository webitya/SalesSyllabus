import React from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';

const ORMIntroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-wide">
          What is Online Reputation Management?
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto">
          Online Reputation Management (ORM) is the process of managing and influencing your business’s reputation online. It includes monitoring feedback, responding to reviews, and creating positive content to shape how your business is perceived.
        </p>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center p-8 shadow-lg rounded-lg bg-white transform transition-transform hover:scale-105">
            <CheckCircleOutlined className="text-blue-500 text-5xl mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Monitor Reviews</h3>
            <p className="text-gray-600">Track feedback on platforms like Google, Trustpilot, and social media to stay ahead of potential issues.</p>
          </div>
          <div className="flex flex-col items-center p-8 shadow-lg rounded-lg bg-white transform transition-transform hover:scale-105">
            <CheckCircleOutlined className="text-blue-500 text-5xl mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Build Trust</h3>
            <p className="text-gray-600">Establish credibility and trust by showcasing positive testimonials and success stories from your clients.</p>
          </div>
          <div className="flex flex-col items-center p-8 shadow-lg rounded-lg bg-white transform transition-transform hover:scale-105">
            <CheckCircleOutlined className="text-blue-500 text-5xl mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Manage Visibility</h3>
            <p className="text-gray-600">Ensure your business is visible across key platforms and ranks well for relevant search queries.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ORMIntroSection;
