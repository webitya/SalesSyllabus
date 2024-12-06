import React from 'react';
import { Button } from 'antd';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="w-full py-16 bg-blue-800 text-white">
      <div className="mx-auto px-4 text-center">
        <h2 className="text-xl  mb-6">Market analysis is not just about understanding your market—it's about translating 
insights into strategic actions that drive results. Let Sales Syllabus guide your business 
planning with the clarity and confidence that comes from data-backed decisions.</h2>
        <p className="text-sm mb-8">
          Ready to drive strategic growth with data-driven insights? Partner with us to shape your future with informed, actionable business plans.
        </p>
        <Link to='/contact-us'>
          <Button
            size="large"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
