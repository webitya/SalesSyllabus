// import A2SalesSyllabusAdvantage from "../../Elements/A2Strategy/A2StatAdvantage"
// import A2StatCallToAction from "../../Elements/A2Strategy/A2StatCallTo"
// import A2StatHeroSection from "../../Elements/A2Strategy/A2StatHero"
// import A2OfferingsSection from "../../Elements/A2Strategy/A2StatOffering"
// import LayoutEl from "../../Shared/LayoutEl"



// const Strategy=()=>{
//     const display=(
//         <>
//           <LayoutEl>
//             <A2StatHeroSection/>
//             <A2OfferingsSection/>
//             <A2SalesSyllabusAdvantage/>
//             <A2StatCallToAction/>
//           </LayoutEl>
//         </>
//     )
//     return display
// }
// export default Strategy

import React, { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import A2SalesSyllabusAdvantage from "../../Elements/A2Strategy/A2StatAdvantage";
import A2StatCallToAction from "../../Elements/A2Strategy/A2StatCallTo";
import A2StatHeroSection from "../../Elements/A2Strategy/A2StatHero";
import A2OfferingsSection from "../../Elements/A2Strategy/A2StatOffering";
import LayoutEl from "../../Shared/LayoutEl";
import FooterEl from "../../Shared/FooterEl";

const Strategy = () => {
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
    // { id: "hero", label: "Hero" },
    { id: "offerings", label: "What We offer" },
    { id: "advantage", label: "Sales Syllabus Advantage" },
    { id: "cta", label: "Contact Us" },
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
  <ul className="space-y-3 p-4">
    {navLinks.map(({ id, label }) => (
      <li
        key={id}
        className={`cursor-pointer text-sm font-medium p-2 rounded-md transition-all ${
          activeSection === id
            ? "bg-gray-100 text-blue-500"
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
          <A2StatHeroSection />
        </section>
        <section id="offerings">
          <A2OfferingsSection />
        </section>
        <section id="advantage">
          <A2SalesSyllabusAdvantage />
        </section>
        <section id="cta">
          <A2StatCallToAction />
        </section>
        <FooterEl/>
      </main>
    </LayoutEl>
  );
};

export default Strategy;
