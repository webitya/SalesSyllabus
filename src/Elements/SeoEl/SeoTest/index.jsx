import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SmileOutlined, LikeOutlined, MessageOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';

const ClientTestimonials = () => {
  const testimonials = [
    {
      icon: <SmileOutlined style={{ fontSize: '2rem', color: '#E6377A' }} />,
      name: 'Jane Doe, CEO at Tech Solutions',
      feedback: 'The SEO services provided by this team have completely transformed our business. Our organic traffic has increased by 120% within six months!'
    },
    {
      icon: <LikeOutlined style={{ fontSize: '2rem', color: '#E6377A' }} />,
      name: 'John Smith, Marketing Director at Innovate Corp',
      feedback: 'Thanks to their strategic approach, we’ve consistently ranked higher for competitive keywords. Their data-driven insights made all the difference.'
    },
    {
      icon: <MessageOutlined style={{ fontSize: '2rem', color: '#E6377A' }} />,
      name: 'Sarah Lee, Founder of Bright Ideas',
      feedback: 'They provided clear, actionable insights and helped us optimize our content. Our lead generation has significantly improved!'
    },
    // Add more testimonials if needed
  ];

  // Settings for react-slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <RightOutlined style={{ fontSize: '2rem', color: '#E6377A' }} />,
    prevArrow: <LeftOutlined style={{ fontSize: '2rem', color: '#E6377A' }} />,
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          What Our Clients Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
              <div className="text-center mb-4">
                {testimonial.icon}
              </div>
              <p className="text-lg text-gray-700 italic mb-4">"{testimonial.feedback}"</p>
              <h3 className="text-md font-semibold text-gray-800 text-center">{testimonial.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientTestimonials;
