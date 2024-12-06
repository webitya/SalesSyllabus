import React from 'react';
import { SolutionOutlined, LineChartOutlined, BarChartOutlined } from '@ant-design/icons';

const KeyServicesSection = () => {
  const services = [
    {
      title: "Campaign Optimization",
      description: "We optimize every aspect of your campaigns for the highest possible returns.",
      icon: <SolutionOutlined className="service-icon" />,
    },
    {
      title: "Analytics & Reporting",
      description: "Detailed analytics and reporting ensure full transparency and performance tracking.",
      icon: <LineChartOutlined className="service-icon" />,
    },
    {
      title: "A/B Testing",
      description: "Experiment with different strategies to find what works best for your audience.",
      icon: <BarChartOutlined className="service-icon" />,
    }
  ];

  return (
    <div className="key-services-section bg-[#E8F0FE] py-20 px-6 lg:px-16"> {/* Changed background color */}
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-16">
          Our Key Services
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-200">
              {/* Icon */}
              <div className="icon-container mb-6 text-[#E6377A] text-4xl">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyServicesSection;
