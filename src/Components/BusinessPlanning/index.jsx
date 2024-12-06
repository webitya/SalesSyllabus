// import A2MarketAnalysisSection from "../../Elements/A2Business/A2BusiAnalysis"
// import CallToAction from "../../Elements/A2Business/A2BusiCTA/idex"
// import BusinessPlanningHero from "../../Elements/A2Business/A2BusiHero"
// import A2InsightsToActionSection from "../../Elements/A2Business/A2BusiInsight"
// import A2BusinessPlanPage from "../../Elements/A2Business/A2BusiPlanIntro"
// import A2ToolsAndExpertiseSection from "../../Elements/A2Business/A2BusiTools"
// import A2BusiCompany from "../../Elements/A2Business/A2BusiTrust"
// import BusinessPlanTypes from "../../Elements/A2Business/A2BusiTypes"
// import BusinessGrowthChart from "../../Elements/Busi/BusiGraph"
// import LayoutEl from "../../Shared/LayoutEl"


// const BusinessPlanning=()=>{
//     const display=(
//         <>
//         <LayoutEl>
//             <BusinessPlanningHero/>
//             <A2BusinessPlanPage/>
//             <BusinessPlanTypes/>
//             <BusinessGrowthChart/>
//             <A2InsightsToActionSection/>
//             <A2MarketAnalysisSection/>
//             <A2ToolsAndExpertiseSection/>
//             <A2BusiCompany/>
//             <CallToAction/>
//         </LayoutEl>
        
//         </>
//     )
//     return display
// }
// export default BusinessPlanning

import React, { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import A2MarketAnalysisSection from "../../Elements/A2Business/A2BusiAnalysis";
import CallToAction from "../../Elements/A2Business/A2BusiCTA";
import BusinessPlanningHero from "../../Elements/A2Business/A2BusiHero";
import A2InsightsToActionSection from "../../Elements/A2Business/A2BusiInsight";
import A2BusinessPlanPage from "../../Elements/A2Business/A2BusiPlanIntro";
import A2ToolsAndExpertiseSection from "../../Elements/A2Business/A2BusiTools";
import A2BusiCompany from "../../Elements/A2Business/A2BusiTrust";
import BusinessPlanTypes from "../../Elements/A2Business/A2BusiTypes";
import BusinessGrowthChart from "../../Elements/Busi/BusiGraph";
import LayoutEl from "../../Shared/LayoutEl";
import FooterEl from "../../Shared/FooterEl";

const BusinessPlanning = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setSidebarOpen(false); // Close sidebar on link click
  };

  const navLinks = [

    { id: "business-plan", label: "Business Plan" },
    { id: "plan-types", label: "Plan Types" },
    { id: "growth-chart", label: "Growth Chart" },
    { id: "insights", label: "Insights to Action" },
    { id: "market-analysis", label: "Market Analysis" },
    { id: "tools-expertise", label: "Tools & Expertise" },
    { id: "company-trust", label: "Our Partners" },
    { id: "call-to-action", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          if (top <= 150 && bottom >= 150) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <LayoutEl>
      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <CloseOutlined className="text-lg" /> : <MenuOutlined className="text-lg" />}
      </button>

      {/* Sidebar Navigation */}
      <aside
  className={`fixed top-20 left-0 h-full w-40 bg-white border-r border-gray-300 transform transition-transform duration-300 ease-in-out z-40 ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  } lg:translate-x-0 lg:block`}
>
  <ul className="space-y-3 py-5 px-4">
    {navLinks.map(({ id, label }) => (
      <li
        key={id}
        className={`cursor-pointer text-sm p-2 rounded-md transition-colors duration-200 ${
          activeSection === id
            ? "bg-blue-50 text-blue-600"
            : "text-gray-700 hover:bg-gray-100"
        }`}
        onClick={() => scrollToSection(id)}
      >
        {label}
      </li>
    ))}
  </ul>
</aside>


      {/* Main Content */}
      <main
        className={`transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-40" : "ml-0"
        } lg:ml-40`}
      >
        <section id="hero">
          <BusinessPlanningHero />
        </section>
        <section id="business-plan">
          <A2BusinessPlanPage />
        </section>
        <section id="plan-types">
          <BusinessPlanTypes />
        </section>
        <section id="growth-chart">
          <BusinessGrowthChart />
        </section>
        <section id="insights">
          <A2InsightsToActionSection />
        </section>
        <section id="market-analysis">
          <A2MarketAnalysisSection />
        </section>
        <section id="tools-expertise">
          <A2ToolsAndExpertiseSection />
        </section>
        <section id="company-trust">
          <A2BusiCompany />
        </section>
        <section id="call-to-action">
          <CallToAction />
        </section>
        <FooterEl/>
      </main>
    </LayoutEl>
  );
};

export default BusinessPlanning;
