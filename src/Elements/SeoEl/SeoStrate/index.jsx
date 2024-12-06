import React from "react";
import { Card } from "antd";
import { SearchOutlined, SignalFilled, FunnelPlotOutlined, MessageOutlined } from "@ant-design/icons";
import 'antd/dist/reset.css';

const StagesOfSEO = () => {
  const seoStages = [
    {
      title: "Make Brand Searchable",
      description: "Ensure your brand is easily discoverable by optimizing for search engines.",
      icon: <SearchOutlined style={{ fontSize: "36px", color: "#E6377A" }} />
    },
    {
      title: "Understand Visitor Intent",
      description: "Incorporate behavioral data and intent signals to understand visitor motivations.",
      icon: <SignalFilled style={{ fontSize: "36px", color: "#E6377A" }} />
    },
    {
      title: "Develop Funnels & Track Leads",
      description: "Create a funnel to target, track, and convert users using data analytics.",
      icon: <FunnelPlotOutlined style={{ fontSize: "36px", color: "#E6377A" }} />
    },
    {
      title: "Deliver Personalized Messages",
      description: "Send the right message to the right user at the right time for optimal engagement.",
      icon: <MessageOutlined style={{ fontSize: "36px", color: "#E6377A" }} />
    },
  ];

  return (
    <section className="p-8 bg-gray-50">
      {/* Title and Description */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Stages of SEO Success</h2>
        <p className="text-lg text-gray-600">Explore the fundamental stages that drive effective SEO strategy, from making your brand visible to delivering personalized messages that convert users.</p>
      </div>

      {/* SEO Stages */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {seoStages.map((stage, index) => (
          <Card
            key={index}
            className="w-full md:w-1/4 shadow-lg transition-transform transform hover:scale-105"
            hoverable
            style={{
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderColor: "#E6377A",
            }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">{stage.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{stage.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{stage.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default StagesOfSEO;
