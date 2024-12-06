import {
    ProfileOutlined, FileSearchOutlined, LineChartOutlined, BugOutlined,
    TeamOutlined, SolutionOutlined, UserAddOutlined, DashboardOutlined,
    BulbOutlined, BookOutlined, RiseOutlined, GlobalOutlined, CrownOutlined,
    ArrowRightOutlined
  } from '@ant-design/icons';
  import { Button } from 'antd';
  import { useState } from 'react';
  
  const services = [
    {
      icon: <ProfileOutlined />,
      title: "Marketing Process",
      description: "Build a robust strategy with detailed planning.",
      features: [
        { text: "Planning & Strategy", icon: <FileSearchOutlined /> },
        { text: "KPIs & Metrics Setup", icon: <LineChartOutlined /> },
        { text: "Problem Discovery", icon: <BugOutlined /> }
      ],
      button: "Learn More"
    },
    {
      icon: <TeamOutlined />,
      title: "Sales Process",
      description: "Streamline sales for better lead conversion.",
      features: [
        { text: "KRA & KPI Framework", icon: <SolutionOutlined /> },
        { text: "Sales Recruitment", icon: <UserAddOutlined /> },
        { text: "SPMS Implementation", icon: <DashboardOutlined /> }
      ],
      pricing: "₹10 to ₹15 Lakhs",
      button: "Learn More"
    },
    {
      icon: <BulbOutlined />,
      title: "Marketing Outsourcing",
      description: "Outsource marketing for end-to-end execution.",
      features: [
        { text: "Content Marketing", icon: <BookOutlined /> },
        { text: "Performance Marketing", icon: <RiseOutlined /> },
        { text: "Branding & Community", icon: <GlobalOutlined /> }
      ],
      button: "Outsource Now"
    },
  ];
  
  const ServicesSection = () => {
    return (
        
        <>
        <div className="text-center mb-5 py-5">
  <h2 className="text-4xl font-bold text-gray-800">
    Transform Your Business with Our Services
  </h2>
</div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 p-5">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="relative flex flex-col justify-between h-[450px] p-8 bg-gradient-to-br from-pink-100 via-white to-blue-100 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300 ease-out"
          >
         
            <div className="flex items-center justify-center text-5xl text-pink-500 mb-6">
              <div className="relative animate-pulse">{service.icon}</div>
            </div>
      
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-3">
                {service.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-pink-400">{feature.icon}</span>
                    <span className="text-gray-700">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
      
            <div className="mt-6">
              {service.comingSoon ? (
                <Button
                  type="primary"
                  disabled
                  className="w-full bg-gray-300 text-gray-500 cursor-not-allowed"
                >
                  Coming Soon
                </Button>
              ) : (
                <Button
                  type="primary"
                  className="w-full flex items-center justify-center bg-gradient-to-r from-pink-400 to-red-500 hover:from-red-500 hover:to-pink-500 text-white"
                >
                  {service.button} <ArrowRightOutlined className="ml-2" />
                </Button>
              )}
            </div>
          </div>
        ))}
      </div> */}
        </>
    );
  };
  
  export default ServicesSection;
  