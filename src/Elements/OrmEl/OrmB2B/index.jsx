import React from 'react';
import { TeamOutlined, TrophyOutlined, RiseOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import './OrmB2B.css';  // Custom CSS for extra styling

const OrmB2BSection = () => {
  return (
    <div className="b2b-section py-16 bg-gradient-to-r from-blue-50 to-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
          Why ORM is Critical for B2B Success
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          In the competitive landscape of B2B, maintaining a stellar online reputation is not just beneficial—it's essential. Here’s how ORM can transform your business relationships and growth trajectory:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="b2b-item p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <TeamOutlined className="text-5xl text-indigo-600 mb-4 animate-bounce" />
            <h3 className="text-2xl font-semibold mb-2">Build Trust</h3>
            <p className="text-gray-600">
              Establish trust among potential business partners by maintaining a positive online reputation. Research shows that 70% of B2B buyers consider a company's online reputation as a crucial factor in their decision-making.
            </p>
          </div>
          <div className="b2b-item p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <TrophyOutlined className="text-5xl text-indigo-600 mb-4 animate-bounce" />
            <h3 className="text-2xl font-semibold mb-2">Manage Competition</h3>
            <p className="text-gray-600">
              Stay ahead in competitive industries by ensuring your brand's reputation is well-managed and favorable. Companies with strong reputations attract better business opportunities and partnerships.
            </p>
          </div>
          <div className="b2b-item p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <RiseOutlined className="text-5xl text-indigo-600 mb-4 animate-bounce" />
            <h3 className="text-2xl font-semibold mb-2">Turn Feedback into Growth</h3>
            <p className="text-gray-600">
              Leverage customer feedback as an opportunity for growth, improving your services based on real-world responses. 88% of consumers trust online reviews as much as personal recommendations—make them work for you!
            </p>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default OrmB2BSection;
