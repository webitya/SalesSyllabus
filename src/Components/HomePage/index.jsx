import A2Company from "../../Elements/A2Home/A2Company";
import CallToActionA2 from "../../Elements/A2Home/A2CTA";
import DataAnalysisComponent from "../../Elements/A2Home/A2FirstAnalytics";
import OptimizationGrowthComponent from "../../Elements/A2Home/A2FirstGrowth";
import BuildingStrategyComponent from "../../Elements/A2Home/A2FirstStrategy";

import HeroSectionA2 from "../../Elements/A2Home/A2Hero";

import InfographicSectionA2 from "../../Elements/A2Home/A2Info";

import A2BusinessPackages from "../../Elements/A2Home/A2Packages";

import A2Testimonials from "../../Elements/A2Home/A2Testimonial";
import LeadsSectionA2 from "../../Elements/A2Home/A2Vetices";
import SalesSyllabusComponent from "../../Elements/A2Home/SalesSyllabusComponent";

import HomeFAQSection from "../../Elements/HomeFaqs";

import PerformanceMixedChart from "../../Elements/HomeGraph";
import FooterEl from "../../Shared/FooterEl";

import LayoutEl from "../../Shared/LayoutEl";
const Homepage = () => {
  const display = (
    <>
      <LayoutEl>
        <HeroSectionA2 />
        {/* <div className="w-full py-8 px-4 lg:px-24 bg-white shadow-lg rounded-lg">
  <h2 className="text-3xl font-semibold text-center text-gray-900 mb-4 tracking-wide">
    What is Sales Syllabus?
  </h2>
  <p className="text-center text-gray-700 mx-auto">
    Sales Syllabus is a premium business consulting company specializing in achieving business transformation by optimizing sales and marketing functions. Through the implementation of our in-house Sales Syllabus Pro Framework, we enable entire sales and marketing teams to deliver measurable and impactful outcomes.
  </p>
</div> */}

        <A2Company />
        <LeadsSectionA2 />
        <InfographicSectionA2 />
        <div className="!p-5 mb-16" style={{ backgroundColor: "#F9FAFB" }}>
          <DataAnalysisComponent />
          <BuildingStrategyComponent />
          <OptimizationGrowthComponent />
        </div>
       
        <CallToActionA2 />
        <PerformanceMixedChart />
        <SalesSyllabusComponent/>
       
        <A2Testimonials />
        <A2BusinessPackages />
        <HomeFAQSection />
        <FooterEl/>
      </LayoutEl>
    </>
  );
  return display;
};
export default Homepage;


// import React, { useState, useEffect } from "react";
// import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
// import A2Company from "../../Elements/A2Home/A2Company";
// import CallToActionA2 from "../../Elements/A2Home/A2CTA";
// import DataAnalysisComponent from "../../Elements/A2Home/A2FirstAnalytics";
// import OptimizationGrowthComponent from "../../Elements/A2Home/A2FirstGrowth";
// import BuildingStrategyComponent from "../../Elements/A2Home/A2FirstStrategy";
// import HeroSectionA2 from "../../Elements/A2Home/A2Hero";
// import InfographicSectionA2 from "../../Elements/A2Home/A2Info";
// import A2BusinessPackages from "../../Elements/A2Home/A2Packages";
// import A2Testimonials from "../../Elements/A2Home/A2Testimonial";
// import LeadsSectionA2 from "../../Elements/A2Home/A2Vetices";
// import HomeFAQSection from "../../Elements/HomeFaqs";
// import PerformanceMixedChart from "../../Elements/HomeGraph";
// import LayoutEl from "../../Shared/LayoutEl";
// import FooterEl from "../../Shared/FooterEl";

// const Homepage = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("hero");

//   const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//     setSidebarOpen(false); // Close sidebar on link click
//   };

//   const navLinks = [
//     { id: "hero", label: "Hero" },
//     { id: "company", label: "Company" },
//     { id: "leads", label: "Leads" },
//     { id: "infographic", label: "Infographic" },
//     { id: "data-analysis", label: "Data Analysis" },
//     { id: "strategy", label: "Strategy" },
//     { id: "growth", label: "Growth" },
//     { id: "packages", label: "Business Packages" },
//     { id: "call-to-action", label: "Call to Action" },
//     { id: "performance-chart", label: "Performance Chart" },
//     { id: "testimonials", label: "Testimonials" },
//     { id: "faq", label: "FAQ" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       navLinks.forEach(({ id }) => {
//         const section = document.getElementById(id);
//         if (section) {
//           const { top, bottom } = section.getBoundingClientRect();
//           if (top <= 150 && bottom >= 150) {
//             setActiveSection(id);
//           }
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [navLinks]);

//   return (
//     <LayoutEl>
//       {/* Toggle Button */}
//       <button
//         className="fixed top-4 left-4 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg"
//         onClick={toggleSidebar}
//         aria-label="Toggle Sidebar"
//       >
//         {isSidebarOpen ? <CloseOutlined className="text-lg" /> : <MenuOutlined className="text-lg" />}
//       </button>

//       {/* Sidebar Navigation */}
//       <aside
//         className={`fixed top-20 left-0 h-full w-40 bg-gray-100 shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } lg:translate-x-0 lg:block`}
//       >
//         <ul className="space-y-4">
//           {navLinks.map(({ id, label }) => (
//             <li
//               key={id}
//               className={`cursor-pointer text-sm p-2 rounded-md transition-all ${
//                 activeSection === id
//                   ? "text-green-500"
//                   : "text-gray-700 hover:bg-gray-200"
//               }`}
//               onClick={() => scrollToSection(id)}
//             >
//               {label}
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main
//         className={`transition-all duration-300 ease-in-out ${
//           isSidebarOpen ? "ml-40" : "ml-0"
//         } lg:ml-40`}
//       >
//         <section id="hero">
//           <HeroSectionA2 />
//         </section>
//         <section id="company">
//           <A2Company />
//         </section>
//         <section id="leads">
//           <LeadsSectionA2 />
//         </section>
//         <section id="infographic">
//           <InfographicSectionA2 />
//         </section>
//         <div className="!p-5 mb-16" style={{ backgroundColor: "#F9FAFB" }}>
//           <section id="data-analysis">
//             <DataAnalysisComponent />
//           </section>
//           <section id="strategy">
//             <BuildingStrategyComponent />
//           </section>
//           <section id="growth">
//             <OptimizationGrowthComponent />
//           </section>
//         </div>
//         <section id="packages">
//           <A2BusinessPackages />
//         </section>
//         <section id="call-to-action">
//           <CallToActionA2 />
//         </section>
//         <section id="performance-chart">
//           <PerformanceMixedChart />
//         </section>
//         <section id="testimonials">
//           <A2Testimonials />
//         </section>
//         <section id="faq">
//           <HomeFAQSection />
//         </section>
//         <FooterEl/>
//       </main>
//     </LayoutEl>
//   );
// };

// export default Homepage;
