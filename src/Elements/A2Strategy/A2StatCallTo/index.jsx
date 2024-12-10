import React from 'react';
import { Button } from 'antd';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

const A2StatCallToAction = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
        Ready to Transform Your Business?
        </h2>
        <p className="text-lg mb-8">
        Take the first step toward sustainable growth with a strategy designed for success.

        </p>
        <Link to="https://calendly.com/salessyllabus">
          <Button
            size="large"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300"
          >
            Let's Builds Your Strategy
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default A2StatCallToAction;
