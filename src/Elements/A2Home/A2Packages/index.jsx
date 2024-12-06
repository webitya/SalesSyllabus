import React from "react";
import { Button, Card } from "antd";
import { CheckCircleOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import A2ContentMarketingPackage from "./A2ContentPackages";

// The Ant Design Meta component is imported but not used, so you can remove it if not needed.
const { Meta } = Card;

const BusinessTransformation = () => {
  const packages = [
    {
      title: "Basic Package",
      description: "Foundational strategies with market analysis, goal setting, and performance tracking.",
      details: [
        "For small organizations or startups",
        "Duration: 4 weeks",
      ],
      buttonText: "Contact Us",
    },
    {
      title: "Advanced Package",
      description: "Expand with communication strategies, execution, and refinement.",
      details: [
        "For mid-sized companies with established sales teams",
        "Duration: 8 weeks",
      ],
      buttonText: "Contact Us",
    },
    {
      title: "Premium Package",
      description: "Full-scale transformation with team training, advanced reporting, and scalability planning.",
      details: [
        "For large enterprises aiming for sustainable growth",
        "Duration: 8–16 weeks",
      ],
      buttonText: "Contact Us",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-850 to-black py-12 pt-15 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Apply the font-family 'Playfair Display' to the title */}
        <h1 className="text-3xl md:text-4xl font-playfair text-white text-center mb-12 tracking-wide">
          Business Transformation Packages
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="bg-gray-800 rounded-xl shadow-md p-6 text-center transition-transform transform hover:-translate-y-1 hover:scale-105"
              title={<h2 className="text-2xl font-playfair text-white mb-4">{pkg.title}</h2>}
              bordered
            >
              <p className="text-white text-sm leading-relaxed mb-4">{pkg.description}</p>
              <div className="mt-4 text-left text-white space-y-2">
                {pkg.details.map((detail, i) => (
                  <p key={i} className="text-xs flex items-center space-x-2">
                    <CheckCircleOutlined className="text-lg text-teal-400" />
                    <span>{detail}</span>
                  </p>
                ))}
              </div>
              <Link to="/contact-us" target="_blank">
              <Button
                className="mt-6 text-white bg-teal-500 hover:bg-teal-600 text-base px-6 py-2 !hover:text-gray-700"
                style={{ borderRadius: "5px", border: "1px solid white" }}
              >
                {pkg.buttonText}
              </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
      <A2ContentMarketingPackage/>
    </div>
  );
};

export default BusinessTransformation;
