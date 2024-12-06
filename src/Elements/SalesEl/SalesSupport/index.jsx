import React from "react";

const SalesTeamSupport = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex justify-center items-center p-4">
          <img
            src="/support.svg" // Replace with your actual image URL
            alt="Sales Team Support"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Sales Team Support
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            We provide training, coaching, and ongoing support to ensure your sales team performs at its peak. 
            Our comprehensive solutions equip your team with the tools and resources necessary for closing deals and building long-term client relationships.
          </p>

          <p className="mt-4 text-lg text-gray-600">
            With a focus on continuous improvement, we work closely with your team to develop their skills in real-world scenarios. 
            Our experts share best practices and actionable insights that empower your team to exceed targets and foster client loyalty.
          </p>

          <div className="mt-8 bg-gray-200 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800">Our Support Services:</h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>• Customized training programs tailored to your team's needs.</li>
              <li>• One-on-one coaching sessions to enhance skills.</li>
              <li>• Ongoing performance evaluations and feedback.</li>
              <li>• Workshops focusing on effective communication and negotiation tactics.</li>
              <li>• Access to a resource library with tools and templates.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTeamSupport;
