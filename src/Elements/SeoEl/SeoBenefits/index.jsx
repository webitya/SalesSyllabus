import React from 'react';
import { BarChartOutlined, RiseOutlined, TeamOutlined } from '@ant-design/icons';

const BenefitsB2B = () => {
  const benefits = [
    {
      icon: <TeamOutlined style={{ fontSize: '2rem', color: '#E6377A' }} />,
      title: 'Increased Visibility',
      description: 'Improve your brand’s visibility to decision-makers actively searching for solutions in your industry.'
    },
    {
      icon: <RiseOutlined style={{ fontSize: '2rem', color: '#E6377A' }} />,
      title: 'Higher Website Ranking',
      description: 'Boost your website’s ranking in search engine results to attract more qualified traffic.'
    },
    {
      icon: <BarChartOutlined style={{ fontSize: '2rem', color: '#E6377A' }} />,
      title: 'Long-term Organic Growth',
      description: 'Achieve sustained organic growth with valuable, research-backed content that builds authority.'
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Benefits for B2B
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsB2B;
