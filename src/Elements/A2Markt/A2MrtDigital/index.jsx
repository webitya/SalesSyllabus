import React from 'react';
import { FundProjectionScreenOutlined, TeamOutlined, GlobalOutlined, LikeOutlined } from '@ant-design/icons';

const DigitalMarketingSection = () => {
  const items = [
    {
      icon: <FundProjectionScreenOutlined className="text-5xl text-blue-600 mb-4" />,
      title: "Performance Marketing to Maximize Reach",
      color: "text-blue-700",
      text: "Leverage performance marketing strategies to increase your brand's reach and visibility through digital channels.",
    },
    {
      icon: <LikeOutlined className="text-5xl text-blue-600 mb-4" />,
      title: "Enhanced Online Reputation Management",
      color: "text-teal-700",
      text: "Build a strong online reputation with data-backed strategies that improve customer trust and satisfaction.",
    },
    {
      icon: <TeamOutlined className="text-5xl text-blue-600 mb-4" />,
      title: "Community Building Through Engaging Content",
      color: "text-lime-700",
      text: "Create valuable content to build a loyal community around your brand and strengthen audience relationships.",
    },
    {
      icon: <GlobalOutlined className="text-5xl text-blue-600 mb-4" />,
      title: "SEO & Organic Content Strategy",
      color: "text-purple-700",
      text: "Drive organic traffic with SEO-focused content strategies that improve visibility and bring targeted visitors.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-50 to-blue-50 py-10 px-6" id="digitalMarketingSection">
      <div className="text-center mb-8">
        <h2 className="text-3xl  text-blue-700 mb-3 animate__animated animate__fadeIn">
          Comprehensive Digital Marketing with Content at the Heart
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-0.5s">
          Amplifying Content Through Performance Marketing, SEO, and Brand Building
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-2 shadow rounded-lg transform hover:-translate-y-1 transition hover:shadow-lg">
            <div className="flex flex-col items-start">
              {item.icon}
              {/* <h3 className={`text-xl ${item.color} mt-2`}>{item.title}</h3> */}
              <h3 className={`text-xl text-zinc-800 mt-2`}>{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalMarketingSection;
