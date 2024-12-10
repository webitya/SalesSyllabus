import React from 'react';
import { 
  FileTextOutlined, 
  SolutionOutlined, 
  SearchOutlined, 
  LineChartOutlined, 
  BookOutlined, 
  BulbOutlined 
} from '@ant-design/icons';

const ContentMarketingSection = () => {
  const items = [
    {
      title: "In-Depth Research & White Papers",
      icon: <FileTextOutlined />,
      gradient: "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600",
      text: "Establish your brand as a thought leader with expertly researched white papers and reports.",
    },
    {
      title: "Case Studies & Real-World Insights",
      icon: <SolutionOutlined />,
      gradient: "bg-gradient-to-r from-pink-400 via-red-500 to-orange-600",
      text: "Showcase real-world results with case studies that add credibility and build trust.",
    },
    {
      title: "SEO-Optimized Blogs & Articles",
      icon: <SearchOutlined />,
      gradient: "bg-gradient-to-r from-yellow-400 via-green-500 to-teal-600",
      text: "Drive organic traffic with SEO-driven content tailored to capture your audience.",
    },
    {
      title: "Data-Driven Content Strategy",
      icon: <LineChartOutlined />,
      gradient: "bg-gradient-to-r from-indigo-400 via-blue-500 to-green-600",
      text: "Create a content roadmap that resonates and aligns with your brand’s goals.",
    },
    {
      title: "Brand Storytelling & Editorial Expertise",
      icon: <BookOutlined />,
      gradient: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-600",
      text: "Develop an authentic brand story that connects with your audience on a deeper level.",
    },
    {
      title: "Innovative Content Ideation",
      icon: <BulbOutlined />,
      gradient: "bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600",
      text: "Brainstorm and develop unique content ideas that stand out in your industry.",
    },
  ];

  return (
    <section className="bg-indigo-50 md:pt-20 py-10 md:px-8 px-2" id="contentMarketingSection">
      <div className="text-center mb-10">
        <h2 className="text-3xl text-blue-900">Content Marketing: The Core of Your Brand's Success</h2>
        <p className="text-gray-700 mt-2">Crafting Content That Engages, Educates, and Elevates</p>
      </div>
      {/* Two-column layout */}
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-start p-5 bg-white rounded-lg shadow-lg">
            {/* Icon with gradient background */}
            <div className={`${item.gradient} p-3 rounded-full text-white text-2xl flex items-center justify-center`}>
              {item.icon}
            </div>
            <div className="ml-5">
              <h3 className="text-xl text-blue-900 font-medium">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentMarketingSection;
