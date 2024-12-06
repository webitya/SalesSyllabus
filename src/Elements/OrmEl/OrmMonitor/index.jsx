import React from 'react';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <div className="bg-gray-900 py-20 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 opacity-60"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Enhance Your Online Reputation?
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Contact us today to discover how our Online Reputation Management solutions can help you build trust, increase visibility, and drive success in your business.
        </p>

        {/* Call to Action Button */}
        <Link 
          to="/contact-us" // Link to your contact page
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default CallToActionSection;
