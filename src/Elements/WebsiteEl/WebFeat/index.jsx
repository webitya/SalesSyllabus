import React from "react";
import {
  AntDesignOutlined,
  MobileOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  FileTextOutlined,
  LineChartOutlined,
} from '@ant-design/icons';

const WebsiteDesignFeatures = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-900 sm:text-4xl lg:text-5xl">
          Our Website Design Services
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          We offer a comprehensive range of services tailored to meet your unique business needs.
        </p>

        {/* First row - Light background */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-indigo-50 py-10 px-6 rounded-lg">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <AntDesignOutlined className="text-4xl text-teal-600" />
            <h3 className="text-xl font-semibold text-indigo-900 mt-4">Custom Design</h3>
            <p className="mt-2 text-gray-700">
              We create tailored website designs that reflect your brand identity and resonate with your audience.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <MobileOutlined className="text-4xl text-teal-600" />
            <h3 className="text-xl font-semibold text-indigo-900 mt-4">Responsive Layouts</h3>
            <p className="mt-2 text-gray-700">
              Our designs are mobile-friendly and ensure a seamless user experience across all devices.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <SearchOutlined className="text-4xl text-teal-600" />
            <h3 className="text-xl font-semibold text-indigo-900 mt-4">SEO Optimization</h3>
            <p className="mt-2 text-gray-700">
              We implement best practices for SEO, helping your site rank higher and attract more visitors.
            </p>
          </div>
        </div>

        {/* Second row - Darker background */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-indigo-100 py-10 px-6 rounded-lg">
          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <ShoppingCartOutlined className="text-4xl text-teal-600" />
            <h3 className="text-xl font-semibold text-indigo-900 mt-4">E-Commerce Solutions</h3>
            <p className="mt-2 text-gray-700">
              Our e-commerce designs are built to drive sales and provide a smooth shopping experience for your customers.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FileTextOutlined className="text-4xl text-teal-600" />
            <h3 className="text-xl font-semibold text-indigo-900 mt-4">Content Management</h3>
            <p className="mt-2 text-gray-700">
              We provide user-friendly CMS solutions, allowing you to manage your website content easily.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <LineChartOutlined className="text-4xl text-teal-600" />
            <h3 className="text-xl font-semibold text-indigo-900 mt-4">Analytics and Reporting</h3>
            <p className="mt-2 text-gray-700">
              Our integrated analytics tools help you track performance and make data-driven decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDesignFeatures;
