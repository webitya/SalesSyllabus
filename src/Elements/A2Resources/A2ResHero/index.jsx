import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-6 text-center">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">
        Explore Our Free Resources on Industry Insights and Thought Leadership
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Access exclusive research and white papers to stay ahead in sales and marketing.
      </p>
      <div className="flex justify-center space-x-4">
      <a 
  href="/Accelerating Digital Transformation How IT Service Providers Can Drive Business Growth for Clients.pdf" 
  target="_blank" 
  download
>
  <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition">
    Download Now
  </button>
</a>

        
        <ScrollLink to="resources" smooth={true} duration={500} offset={-70}>
        <button className="bg-gray-200 text-blue-600 py-2 px-6 rounded hover:bg-gray-300 transition">
          Explore Resources
        </button>
          </ScrollLink>
      </div>
    </section>
  );
};

export default HeroSection;
