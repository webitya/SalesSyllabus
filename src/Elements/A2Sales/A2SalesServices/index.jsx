import React from 'react';
import { CompassOutlined, SyncOutlined, DashboardOutlined, TeamOutlined, UserAddOutlined, HeartOutlined } from '@ant-design/icons';

const servicesList = [
  {
    icon: <CompassOutlined style={{ fontSize: '2rem', color: '#4a90e2' }} />,
    title: "Sales Strategy Development",
    description: [
      "In-depth assessment of current sales performance",
      "Customized sales strategy roadmap",
      "Data-backed insights for decision-making"
    ],
    bgColor: "bg-blue-50",
    borderColor: "border-blue-300"
  },
  {
    icon: <SyncOutlined style={{ fontSize: '2rem', color: '#ff7f50' }} />,
    title: "Sales Process Optimization",
    description: [
      "Streamlining lead qualification",
      "Automation for improved efficiency",
      "Optimization from prospecting to closing"
    ],
    bgColor: "bg-orange-50",
    borderColor: "border-orange-300"
  },
  {
    icon: <DashboardOutlined style={{ fontSize: '2rem', color: '#4caf50' }} />,
    title: "Sales Performance Management",
    description: [
      "KPI & KRA Setup for tracking progress",
      "Real-time performance monitoring",
      "Regular reviews and feedback loops"
    ],
    bgColor: "bg-green-50",
    borderColor: "border-green-300"
  },
  {
    icon: <TeamOutlined style={{ fontSize: '2rem', color: '#ffb6c1' }} />,
    title: "Sales Team Training & Development",
    description: [
      "Ongoing training tailored to each member",
      "Continuous mentoring for skill growth",
      "Sales leadership training"
    ],
    bgColor: "bg-pink-50",
    borderColor: "border-pink-300"
  },
  {
    icon: <UserAddOutlined style={{ fontSize: '2rem', color: '#ba68c8' }} />,
    title: "Sales Recruitment & Onboarding",
    description: [
      "Customized recruitment strategy",
      "Efficient onboarding processes",
      "Retention strategies for team motivation"
    ],
    bgColor: "bg-purple-50",
    borderColor: "border-purple-300"
  },
  {
    icon: <HeartOutlined style={{ fontSize: '2rem', color: '#f06292' }} />,
    title: "Lead Nurturing & Conversion Post-Marketing",
    description: [
      "Post-marketing lead nurturing",
      "Continuous follow-ups",
      "Assessment of lead nurturing effectiveness"
    ],
    bgColor: "bg-red-50",
    borderColor: "border-red-300"
  }
];

const ServicesSection = () => {
  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
          Our Premium Sales Consulting Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out transform hover:-translate-y-1 border-2 ${service.bgColor} ${service.borderColor}`}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-white rounded-full shadow-md">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                {service.title}
              </h3>
              <ul className="text-gray-600 text-sm list-inside space-y-1">
                {service.description.map((item, idx) => (
                  <li key={idx} className="text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
