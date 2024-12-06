import React from 'react';
import { AuditOutlined, LinkOutlined, SearchOutlined, FileTextOutlined } from '@ant-design/icons';

const WhatWeOffer = () => {
  const services = [
    {
      icon: <AuditOutlined style={{ fontSize: '2rem', color: '#E6377A' }} />,
      title: 'Technical SEO Audits',
      description: 'Comprehensive technical SEO audits to identify and fix critical issues that affect your website’s performance.'
    },
    {
      icon: <SearchOutlined style={{ fontSize: '2rem', color: '#E6377A' }} />,
      title: 'Keyword Research & Strategy',
      description: 'In-depth keyword research to find the best opportunities for ranking and drive highly targeted traffic.'
    },
    {
      icon: <LinkOutlined style={{ fontSize: '2rem', color: '#E6377A' }} />,
      title: 'Link Building',
      description: 'High-quality link building to improve your website’s authority and drive sustainable organic growth.'
    },
    {
      icon: <FileTextOutlined style={{ fontSize: '2rem', color: '#E6377A' }} />,
      title: 'Content Marketing',
      description: 'Create compelling, research-backed content including white papers and in-depth articles to attract and engage your audience.'
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#E6377A] mb-10">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
