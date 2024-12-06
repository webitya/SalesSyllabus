import React from 'react';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const SeoHero = () => {
  return (
    <div className="bg-blue-50 py-20 flex justify-center items-center">
      <div className="max-w-7xl text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Drive Searchability with Expert SEO Strategies
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Our SEO strategies ensure your brand is not only visible but positioned at the top of search engine results, driving organic traffic and boosting growth.
        </p>
        <Link to="/contact-us">
        <Button 
          type="primary" 
          size="large" 
          icon={<SearchOutlined />} 
          className="bg-[#E6377A] hover:bg-[#d52f68] px-8 py-2 text-white"
        >
          Learn More
        </Button></Link>
      </div>
    </div>
  );
};

export default SeoHero;
