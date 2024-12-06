import React from 'react';
import { BarChartOutlined, RetweetOutlined, BookOutlined } from '@ant-design/icons';

const successFactors = [
  {
    icon: <BarChartOutlined style={{ fontSize: '2rem', color: '#1D4ED8' }} />,
    title: "Data-Driven Insights & Analytics",
    description: "We rely on real-time data to continuously monitor sales performance and make adjustments that lead to higher conversions and overall sales growth.",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-400",
    iconBgColor: "bg-blue-200"
  },
  {
    icon: <RetweetOutlined style={{ fontSize: '2rem', color: '#059669' }} />,
    title: "Holistic Sales Process Optimization",
    description: "From recruitment to performance management, we optimize every aspect of your sales process to ensure smooth workflows and maximum efficiency.",
    bgColor: "bg-green-50",
    borderColor: "border-green-400",
    iconBgColor: "bg-green-200"
  },
  {
    icon: <BookOutlined style={{ fontSize: '2rem', color: '#EA580C' }} />,
    title: "Continuous Training & Mentoring",
    description: "Sales Syllabus provides ongoing support, training, and mentoring, ensuring your team continually improves and adapts to the market.",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-400",
    iconBgColor: "bg-orange-200"
  }
];

const HowWeAchieveSuccess = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-12">
          How We Achieve Success
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successFactors.map((factor, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:-translate-y-2 border-t-4 ${factor.bgColor} ${factor.borderColor}`}
            >
              <div className={`mb-6 p-4 rounded-full ${factor.iconBgColor}`}>
                {factor.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                {factor.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeAchieveSuccess;
