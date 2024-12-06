import React from 'react';
import './HomeFounders.css'; // Ensure to create this CSS file for styles
import { DollarOutlined } from '@ant-design/icons';

const HomeFounders = () => {
  return (
    <div className="home-founders-banner">
      <h2 className="banner-title">Who is SalesSyllabus for?</h2>
      <p className="banner-description">
      Perfect for people leaders, CXOs, and founders looking to achive success in sales and marketing  <DollarOutlined className='text-blue-500'/>
      </p>
      <h2 className="banner-button" onClick={() => alert("Booking a call with our benefits expert!")}>
        Book a call with our expert
      </h2>
    </div>
  );
};

export default HomeFounders;
