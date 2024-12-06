import React from 'react';
import { SafetyCertificateOutlined, EyeOutlined, SyncOutlined } from '@ant-design/icons';

const ORMImportanceSection = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Why is Online Reputation Management Important?
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          Managing your online reputation is crucial for building trust, enhancing your business's visibility, and ensuring customer loyalty. Here's why it matters:
        </p>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow rounded-lg">
            <div className="flex justify-center items-center mb-4">
              <SafetyCertificateOutlined className="text-green-600 text-5xl" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Build Trust</h3>
            <p className="text-gray-600">A strong reputation shows reliability and builds customer confidence in your business.</p>
          </div>
          
          <div className="p-6 bg-white shadow rounded-lg">
            <div className="flex justify-center items-center mb-4">
              <EyeOutlined className="text-blue-600 text-5xl" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Increase Visibility</h3>
            <p className="text-gray-600">A positive online presence helps your business rank higher and become more visible to clients.</p>
          </div>
          
          <div className="p-6 bg-white shadow rounded-lg">
            <div className="flex justify-center items-center mb-4">
              <SyncOutlined className="text-purple-600 text-5xl" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Ensure Retention</h3>
            <p className="text-gray-600">Satisfied clients are more likely to stay loyal and recommend your business to others.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ORMImportanceSection;
