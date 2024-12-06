import React from "react";

const SalesPerformance = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex justify-center items-center !p-4">
          <img
            src="/sales.svg" // Replace with your actual image URL
            alt="Sales Performance Management"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Sales Performance Management Systems
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Enhance your sales team's performance with our tailored management tools and strategies. 
            Our solutions drive results and keep your team focused on what matters.
          </p>

          <p className="mt-4 text-lg text-gray-600">
            By implementing our performance management systems, you can expect improved visibility into sales activities, 
            allowing for proactive decision-making. Our tools are designed to help identify top performers, 
            recognize areas for improvement, and provide actionable insights that lead to continuous growth.
          </p>

          <div className="mt-8 bg-gray-200 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800">Key Benefits:</h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>• Customized performance tracking systems.</li>
              <li>• Automated insights and reporting.</li>
              <li>• Strategies designed for maximum efficiency.</li>
              <li>• Real-time analytics to monitor team performance.</li>
              <li>• Goal-setting frameworks to align with business objectives.</li>
              <li>• Training resources to help teams utilize tools effectively.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPerformance;
