import React from 'react';
import { BarChartOutlined, UsergroupAddOutlined, ShareAltOutlined } from '@ant-design/icons';

const BenefitsOfORMSection = () => {
  return (
    <div className="bg-blue-50 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          Benefits of Online Reputation Management
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl mb-16 max-w-3xl mx-auto text-gray-700">
          Implementing an effective ORM strategy offers numerous advantages for your business. Here are some key benefits:
        </p>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white shadow-lg rounded-lg transition-shadow hover:shadow-xl">
            <div className="flex justify-center items-center mb-4">
              <BarChartOutlined className="text-yellow-500 text-6xl animate-bounce" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Increased Sales</h3>
            <p className="text-gray-600">Positive reviews and reputation can significantly boost your sales and conversion rates.</p>
          </div>
          
          <div className="p-8 bg-white shadow-lg rounded-lg transition-shadow hover:shadow-xl">
            <div className="flex justify-center items-center mb-4">
              <UsergroupAddOutlined className="text-teal-500 text-6xl animate-bounce" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Loyal Customer Base</h3>
            <p className="text-gray-600">A solid reputation fosters customer loyalty, leading to repeat business and referrals.</p>
          </div>
          
          <div className="p-8 bg-white shadow-lg rounded-lg transition-shadow hover:shadow-xl">
            <div className="flex justify-center items-center mb-4">
              <ShareAltOutlined className="text-indigo-500 text-6xl animate-bounce" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Improved Brand Awareness</h3>
            <p className="text-gray-600">A good reputation enhances your brand’s visibility and presence in the marketplace.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfORMSection;
