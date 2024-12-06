import React from 'react';
import { BulbOutlined, TeamOutlined, SyncOutlined, SettingOutlined, DatabaseOutlined, HeartOutlined } from '@ant-design/icons';
import "./A2WhyChoose.css";

const services = [
  {
    icon: <BulbOutlined />,
    title: "Tailored Sales Strategies",
    description: "We create customized sales strategies aligned with your business goals to drive conversion rates and revenue growth.",
    color: '#1890ff'
  },
  {
    icon: <TeamOutlined />,
    title: "Expert Sales Team Recruitment",
    description: "Our recruitment services help you hire top-tier talent who contribute to long-term success.",
    color: '#ff5733'
  },
  {
    icon: <SyncOutlined />,
    title: "Ongoing Sales Training & Mentoring",
    description: "Continuous training and mentoring ensure your team stays ahead of industry trends.",
    color: '#28a745'
  },
  {
    icon: <SettingOutlined />,
    title: "Optimized Sales Processes",
    description: "We streamline your sales workflows with automation and best practices to boost efficiency.",
    color: '#ffc107'
  },
  {
    icon: <DatabaseOutlined />,
    title: "Data-Driven Sales Performance Management",
    description: "We set up KPIs and KRAs to monitor progress and continuously improve performance.",
    color: '#6f42c1'
  },
  {
    icon: <HeartOutlined />,
    title: "Lead Nurturing Beyond Marketing",
    description: "Personalized follow-ups and engagement strategies convert leads into loyal customers.",
    color: '#dc3545'
  }
];

const WhyChooseSection = () => {
  return (
    <div className="bg-gray-50 md:pt-20 py-5  px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          Why Choose Sales Syllabus for Sales Consulting?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 bg-white"
            >
              <div
                className="mb-3"
                style={{ color: service.color, fontSize: '2rem' }}
              >
                {React.cloneElement(service.icon, { style: { fontSize: '2rem' } })}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
