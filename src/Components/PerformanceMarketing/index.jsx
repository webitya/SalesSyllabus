
// import A2BrandPositioningJourney from "../../Elements/A2Markt/A2BrandJourney"
// import A2ContentMarketingBenefits from "../../Elements/A2Markt/A2MarktContBenefits"
// import A2ContentMarketingIntro from "../../Elements/A2Markt/A2MarktIntro"
// import StepsOfContentMarketingSection from "../../Elements/A2Markt/A2MrtConSteps"
// import ContentMarketingSection from "../../Elements/A2Markt/A2MrtContent"
// import PremiumContentAdvantageSection from "../../Elements/A2Markt/A2MrtCTA"
// import HeroSection from "../../Elements/A2Markt/A2MrtHero"


// import LayoutEl from "../../Shared/LayoutEl"


// const PerformanceMarketing=()=>{
//     const display=(
//         <>
//         <LayoutEl>
//             <HeroSection/>
//             <A2ContentMarketingIntro/>
//             <ContentMarketingSection/>
//             <StepsOfContentMarketingSection/>
//             <A2ContentMarketingBenefits/>
//             <A2BrandPositioningJourney/>
//             <PremiumContentAdvantageSection/>
//         </LayoutEl>
//         </>
//     )
//     return display
// }
// export default PerformanceMarketing

import React, { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import A2BrandPositioningJourney from "../../Elements/A2Markt/A2BrandJourney";
import A2ContentMarketingBenefits from "../../Elements/A2Markt/A2MarktContBenefits";
import A2ContentMarketingIntro from "../../Elements/A2Markt/A2MarktIntro";
import StepsOfContentMarketingSection from "../../Elements/A2Markt/A2MrtConSteps";
import ContentMarketingSection from "../../Elements/A2Markt/A2MrtContent";
import PremiumContentAdvantageSection from "../../Elements/A2Markt/A2MrtCTA";
import HeroSection from "../../Elements/A2Markt/A2MrtHero";
import LayoutEl from "../../Shared/LayoutEl";
import FooterEl from "../../Shared/FooterEl";

const PerformanceMarketing = () => {
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
    { id: "intro", label: "Introduction" },
    { id: "content", label: "Content Marketing" },
    { id: "steps", label: "Steps" },
    { id: "benefits", label: "Benefits" },
    { id: "positioning", label: "Brand Positioning" },
    { id: "premium-advantage", label: "Premium Advantage" },
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
  className={`fixed top-20 left-0 h-full w-40 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out z-40 ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  } lg:translate-x-0 lg:block`}
>
  <ul className="space-y-3 py-6 px-4">
    {navLinks.map(({ id, label }) => (
      <li
        key={id}
        className={`cursor-pointer text-sm font-medium p-2 rounded-md transition-all ${
          activeSection === id
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-gray-50"
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
          <HeroSection />
        </section>
        <section id="intro">
          <A2ContentMarketingIntro />
        </section>
        <section id="content">
          <ContentMarketingSection />
        </section>
        <section id="steps">
          <StepsOfContentMarketingSection />
        </section>
        <section id="benefits">
          <A2ContentMarketingBenefits />
        </section>
        <section id="positioning">
          <A2BrandPositioningJourney />
        </section>
        <section id="premium-advantage">
          <PremiumContentAdvantageSection />
        </section>
        <FooterEl/>
      </main>
    </LayoutEl>
  );
};

export default PerformanceMarketing;
