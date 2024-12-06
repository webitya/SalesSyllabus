import React from 'react';
import { MonitorOutlined, MessageOutlined, HeartOutlined, SafetyOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import './OrmService.css';  // Custom CSS for any extra styling

const OrmServicesSection = () => {
  return (
    <div className="services-section py-16 bg-gray-100 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="service-item p-6 bg-white shadow-lg rounded-lg">
            <MonitorOutlined className="text-5xl text-indigo-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Review Management</h3>
            <p className="text-gray-600">
              Manage and respond to customer reviews to maintain a positive brand image.
            </p>
          </div>
          <div className="service-item p-6 bg-white shadow-lg rounded-lg">
            <MessageOutlined className="text-5xl text-indigo-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Crisis Management</h3>
            <p className="text-gray-600">
              Swiftly handle social media crises to prevent reputational damage.
            </p>
          </div>
          <div className="service-item p-6 bg-white shadow-lg rounded-lg">
            <HeartOutlined className="text-5xl text-indigo-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Brand Sentiment Analysis</h3>
            <p className="text-gray-600">
              Analyze how customers feel about your brand to guide business strategies.
            </p>
          </div>
          <div className="service-item p-6 bg-white shadow-lg rounded-lg">
            <SafetyOutlined className="text-5xl text-indigo-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">PR & Crisis Strategies</h3>
            <p className="text-gray-600">
              Develop effective PR strategies to manage brand reputation during a crisis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrmServicesSection;
