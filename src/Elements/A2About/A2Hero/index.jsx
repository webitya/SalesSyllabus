import React from 'react';
import { Button, Card } from 'antd';
import { Link as ScrollLink } from 'react-scroll';
import { RightOutlined, StarOutlined, BarChartOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';
// bg-gradient-to-r from-blue-500 via-teal-400 to-blue-300 
const HeroSection = () => {
  return (
    <section className="w-full md:py-20 py-10 relative" style={{backgroundColor:"#007B82"}}>
      {/* Decorative Background Image */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?business,technology')"
        }}
      ></div>

      <div className="relative z-10 mx-auto px-2 lg:px-12 flex flex-col md:flex-row items-center justify-between h-full">
        
        {/* Left Section - Text and Call to Action */}
        <div className="md:w-1/2 text-left md:pr-1 animate__animated animate__fadeInLeft">
          <h1 className="text-3xl md:text-3xl font-bold text-white leading-tight mb-6">
            Empower Your Business with <br /> Sales Syllabus
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            Discover data-driven Busines transformation  that drive impactful, sustainable growth.
          </p>
          <ScrollLink to="whatwedo" smooth={true} duration={500} offset={-70}>
          <Button
           
            size="large"
            className="rounded-full bg-gradient-to-r from-blue-500 to-orange-500 text-white font-semibold hover:from-blue-700 hover:to-green-700 transition-transform transform hover:scale-105 shadow-xl"
            icon={<RightOutlined />}
          >
            Explore Now
          </Button>
          </ScrollLink>
        </div>

        {/* Right Section - Highlighted Features */}
        <div className="md:w-1/2 mt-12 md:mt-0 grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          <Card
            className=" text-white shadow-xl rounded-xl transform hover:scale-105 transition-transform duration-300"
            bordered={false} style={{backgroundColor:"#1C54BC"}}
          >
            <div className="flex items-center">
              <BarChartOutlined className="text-4xl text-white mr-4 animate__animated animate__bounce animate__infinite" />
              <h3 className="text-2xl font-semibold">Market Analysis </h3>
            </div>
            <p className="mt-4 text-gray-200">
              Use analytics to craft solutions that propel growth and maximize impact.
            </p>
          </Card>
          
          <Card
            className=" text-white shadow-xl rounded-xl transform hover:scale-105 transition-transform duration-300"
            bordered={false} style={{backgroundColor:"#F49464"}}
          >
            <div className="flex items-center">
              <StarOutlined className="text-4xl text-white mr-4 animate__animated animate__bounce animate__infinite" />
              <h3 className="text-2xl font-semibold">Guided Expertise</h3>
            </div>
            <p className="mt-4 text-gray-200">
              Our experts provide hands-on support to implement lasting strategies.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
