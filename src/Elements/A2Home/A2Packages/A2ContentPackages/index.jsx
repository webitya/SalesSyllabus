import React from "react";
import { Card, Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const CompactContentMarketingPackage = () => {
  const packageDetails = [
    {
      title: "Content Marketing Package (Add-On)",
      content: [
        "Strategic content development in multiple formats: PPT, text, video, and data-driven infographics",
        "Content distribution – Organic and Inorganic: SEO, Social Media, Website, Community Building, Paid Ads, Email Marketing, Events",
        "Performance analysis: Engagement analysis, CTR optimization, lead quality monitoring, performance tracking",
      ],
    },
    {
      title: "Add-Ons",
      content: [
        "Sales training for your team",
        "Specialized problem-solving workshops",
        "Bespoke consultancy for brainstorming",
        "Sales recruitment services",
        "New market identification",
      ],
    },
  ];

  return (
    <div className="bg-transparent pt-5 pb-12">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packageDetails.map((detail, index) => (
            <Card
              key={index}
              className="bg-gray-800 rounded-lg shadow-md p-6 text-white transition-transform transform hover:-translate-y-1 hover:scale-102"
              bordered
            >
              <h2 className="text-xl font-bold mb-4 text-teal-400">{detail.title}</h2>
              <ul className="space-y-3 text-sm">
                {detail.content.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircleOutlined className="text-teal-400 mr-2 text-base" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {(index === 1 || index === 0) && (
                <Link to="/contact-us" target="_blank">
                  <Button className="mt-6 bg-teal-500 hover:bg-teal-600 text-white rounded-md px-6 py-2 text-sm">
                  Contact Us
                  </Button>
                </Link>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompactContentMarketingPackage;
