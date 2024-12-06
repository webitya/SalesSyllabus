import React from 'react';
import { Card } from 'antd';

const services = [
  {
    title: 'Business Planning',
    description: 'Strategic roadmaps for scalable success.',
    icon: '📊', // You can replace this with an actual icon from Ant Design or any other library
  },
  {
    title: 'Branding & Community',
    description: 'Building a powerful brand presence.',
    icon: '🌟',
  },
  {
    title: 'Performance Marketing',
    description: 'Precision-focused marketing campaigns.',
    icon: '📈',
  },
  {
    title: 'Sales Consulting',
    description: 'Optimizing your sales operations.',
    icon: '💼',
  },
  {
    title: 'Online Reputation Management',
    description: 'Controlling your brand narrative.',
    icon: '🛡️',
  },
  {
    title: 'SEO & Website Design',
    description: 'Ensuring visibility in search engines.',
    icon: '🔍',
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              title={service.title}
              extra={<span className="text-4xl">{service.icon}</span>} // Replace with an Ant Design icon if desired
              bordered={false}
            >
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
