import React from 'react';
import { Button } from 'antd';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="w-full md:py-20  bg-blue-800 text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Drive Sales Success Today</h2>
        <p className="text-lg mb-8">
          Empower your sales team with the tools, insights, and accountability they need to achieve unparalleled results.
        </p>
        <Link to='https://calendly.com/salessyllabus' target='_blank'>
          <Button
            size="large"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
          >
            Book a Free Consultation
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
