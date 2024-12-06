// import { EditOutlined, CheckCircleOutlined } from "@ant-design/icons";
// import { Card, Button } from "antd";
// import { Link } from "react-router-dom";

// const sections = [
//   {
//     title: "Business Plan",
//     items: [
//       { name: "Clear Vision and Strategic Goals" },
//       { name: "Data-Driven Market Analysis" },
//       { name: "Financial Planning" },
//       { name: "Operational Efficiency and Automation" },
//       { name: "Reducing unnecessary expenses" },
//     ],
//     overviewLink: "/business-planning",
//     borderColor: "border-rose-500",
//     gradient: "from-rose-400 to-rose-600",
//   },
//   {
//     title: "Marketing Execution",
//     items: [
//       { name: "Brand Awareness & Reach" },
//       { name: "Lead Generation" },
//       { name: "Customer Acquisition & Retention" },
//       { name: "Digital Asset Performance" },
//       { name: "Marketing ROI & Cost Efficiency" },
//     ],
//     overviewLink: "/performance-marketing",
//     borderColor: "border-teal-500",
//     gradient: "from-teal-400 to-teal-600",
//   },
//   {
//     title: "Sales Execution",
//     items: [
//       { name: "Lead Management & Qualification" },
//       { name: "Sales Productivity & Efficiency" },
//       { name: "Pipeline & Forecast Accuracy" },
//       { name: "Revenue & Profitability Metrics" },
//       { name: "Sales Team Performance" },
//     ],
//     overviewLink: "/sales-consulting",
//     borderColor: "border-indigo-500",
//     gradient: "from-indigo-400 to-indigo-600",
//   },
// ];

// const LeadsSectionA2 = () => {
//   return (
//     <div
//       className="w-full py-12 px-6 lg:px-16 bg-gradient-to-br from-blue-50 to-white"
//       id="info"
//     >
//       {/* Section Heading */}
//       <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 tracking-tight">
//       Key  <span style={{color:"#FA9439"}}>pillars</span> of business transformation
//       </h2>

//       {/* Cards Container */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {sections.map((section, index) => (
//           <Card
//             key={index}
//             className={`relative shadow-md rounded-lg border-t-4 ${section.borderColor} overflow-hidden transition-transform duration-300 transform hover:scale-105`}
//             style={{
//               background: `linear-gradient(145deg, #ffffff, #f7f7f7)`,
//               padding: "10px", // Adjusted padding for smaller cards
//             }}
//           >
//             {/* Card Content */}
//             <div className="flex flex-col h-full p-4">
//               {/* Card Title */}
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 {section.title}
//               </h3>

//               {/* List of Items with Icons */}
//               <ul className="space-y-2 flex-grow">
//                 {section.items.map((item, idx) => (
//                   <li
//                     key={idx}
//                     className="flex items-center text-sm text-gray-700 hover:text-gray-900 transition duration-200"
//                   >
//                     <CheckCircleOutlined className="text-yellow-500 mr-2" />
//                     {item.name}
//                   </li>
//                 ))}
//               </ul>

//               {/* Learn More Button */}
//               <div className="mt-6">
//                 <Link to={section.overviewLink}>
//                   <Button
//                     className="w-full text-white bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 rounded-lg shadow-md"
//                     icon={<EditOutlined />}
//                     size="medium" // Reduced button size
//                   >
//                     Learn More
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LeadsSectionA2;
import { EditOutlined, CheckCircleOutlined, LinkOutlined } from "@ant-design/icons";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";

// const sections = [
//   {
//     title: "Market Analysis",
//     subTitle:
//       "We start with a deep dive into your market and competitors, using data to",
//     items: [
//       "Identify key metrics and trends",
//       "Define target audiences and high-potential market segments",
//       "Set achievable short- and long-term sales goals",
//     ],
//     overviewLink: "/market-analysis",
//     borderColor: "border-blue-500",
//     gradient: "from-blue-400 to-blue-600",
//   },
//   {
//     title: "Strategic Planning",
//     subTitle: "We design a comprehensive strategy that includes",
//     items: [
//       "High-impact marketing collateral aligned with your brand",
//       "Tailored marketing and communication strategies",
//       "Selection of the best marketing channels for maximum ROI",
//     ],
//     overviewLink: "/strategic-planning",
//     borderColor: "border-green-500",
//     gradient: "from-green-400 to-green-600",
//     callToAction: "ok done",
//   },
//   {
//     title: "Sales Framework",
//     subTitle: "We set up systems to ensure transparency and accountability",
//     items: [
//       "Define KPIs and KRAs for team and individual performance tracking",
//       "Real-time dashboards to monitor progress and outcomes",
//       "Regular feedback loops to address problems and provide solutions",
//     ],
//     overviewLink: "/sales-performance",
//     borderColor: "border-orange-500",
//     gradient: "from-orange-400 to-orange-600",
//   },
// ];
const sections = [
  {
    title: "Market Analysis",
    subTitle:
      "We start with a deep dive into your market and competitors, using data to",
    items: [
      "Identify key metrics and trends",
      "Define target audiences and high-potential market segments",
      "Set achievable short- and realistic long-term sales goals",
      "Thoroughly analyze competitor strengths and weaknesses",
    ],
    overviewLink: "/market-analysis",
    borderColor: "border-blue-500",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    title: "Strategic Planning",
    subTitle: "We design a comprehensive strategy that includes",
    items: [
      "High-impact marketing collateral aligned with your brand",
      "Tailored marketing and communication strategies",
      "Selection of the best marketing channels for maximum ROI",
    ],
    overviewLink: "/Strategic-planning",
    borderColor: "border-green-500",
    gradient: "from-green-400 to-green-600",
    callToAction: "ok done",
  },
  {
    title: "Sales Framework",
    subTitle: "We set up systems to ensure transparency and accountability",
    items: [
      "Define KPIs and KRAs for team and individual performance tracking",
      "Real-time dashboards to monitor progress and outcomes",
      "Regular feedback loops to address problems and provide solutions",
      "Implement training programs for sales team skill enhancement",
    ],
    overviewLink: "/Sales-framework",
    borderColor: "border-orange-500",
    gradient: "from-orange-400 to-orange-600",
  },
];

const LeadsSectionA2 = () => {
  return (
    <div
      className="w-full py-12 px-6 lg:px-16 bg-gradient-to-br from-blue-50 to-white"
      id="info"
    >
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 tracking-tight">
        Key <span style={{ color: "#FA9439" }}>Pillars</span> of Business
        Transformation
      </h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <Card
            key={index}
            className={`relative shadow-md rounded-lg border-t-4 ${section.borderColor} overflow-hidden transition-transform duration-300 transform hover:scale-105`}
            style={{
              background: `linear-gradient(145deg, #ffffff, #f7f7f7)`,
              padding: "0px",
            }}
          >
            {/* Card Content */}
            <div className="flex flex-col h-full p-2">
              {/* Card Title */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {section.title}
              </h3>
              <h4 className="text-sm text-gray-400 mb-2">{section.subTitle}</h4>

              {/* List of Items with Icons */}
              <ul className="space-y-2 flex-grow">
                {section.items.map((item, idx) => {
                  return (
                    <>
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-700 hover:text-gray-900 transition duration-200"
                      >
                        <CheckCircleOutlined className="text-green-500 mr-2" />
                        {item}
                      </li>
                      {section.callToAction && idx==2 &&<div className="flex">
                        
                        <Link to="/content-marketing" className="flex items-center gap-1">
                        <LinkOutlined className="text-blue-500"/>
                        <h2 className="text-blue-400">Want to build trust and establish thought leadership with content marketing </h2>
                        </Link>
                        </div>}
                    </>
                  );
                })}
              </ul>

              {/* Learn More Button */}
              <div className="mt-6">
                <Link to={section.overviewLink}>
                  <Button
                    className="w-full text-white bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 rounded-lg shadow-md"
                    icon={<EditOutlined />}
                    size="medium"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LeadsSectionA2;
