// import HeroSection from "../../Elements/A2Sales"
// import A2SalesProcessConsulting from "../../Elements/A2Sales/A2SalesProConsult"
// import TestimonialsSection from "../../Elements/A2Sales/A2SalesTes"
// import A2SalKeyDeliverables from "../../Elements/A2Sales/A2SalKeyDelivers"
// import A2SalWhyChooseSalesSyllabus from "../../Elements/A2Sales/A2SalWhyChoose"
// import CallToActionSection from "../../Elements/A2Sales/SalesCTA"
// import LayoutEl from "../../Shared/LayoutEl"



// const SalesConsulting=()=>{
//     const display=(
//         <>
//           <LayoutEl>
//             <HeroSection/>
//             <A2SalesProcessConsulting/>
//             <A2SalKeyDeliverables/>
//             <A2SalWhyChooseSalesSyllabus/>
//             <TestimonialsSection/>
//             <CallToActionSection/>
//           </LayoutEl>
//         </>
//     )
//     return display
// }
// export default SalesConsulting

import React, { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import HeroSection from "../../Elements/A2Sales";
import A2SalesProcessConsulting from "../../Elements/A2Sales/A2SalesProConsult";
import TestimonialsSection from "../../Elements/A2Sales/A2SalesTes";
import A2SalKeyDeliverables from "../../Elements/A2Sales/A2SalKeyDelivers";
import A2SalWhyChooseSalesSyllabus from "../../Elements/A2Sales/A2SalWhyChoose";
import CallToActionSection from "../../Elements/A2Sales/SalesCTA";
import LayoutEl from "../../Shared/LayoutEl";
import FooterEl from "../../Shared/FooterEl";

const SalesConsulting = () => {
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
   
    { id: "process", label: "Sales Framework" },
    { id: "key-deliverables", label: "Key Deliverables" },
    { id: "why-choose", label: "Why Choose Sales Syllabus" },
    { id: "testimonials", label: "Testimonials" },
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
  className={`fixed top-20 left-0 h-full w-40 bg-white border-r border-gray-200 shadow-sm transform transition-transform duration-300 ease-in-out z-40 ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  } lg:translate-x-0 lg:block`}
>
  <ul className="space-y-2 p-4">
    {navLinks.map(({ id, label }) => (
      <li
        key={id}
        className={`cursor-pointer text-sm font-medium p-2 rounded-md transition-all ${
          activeSection === id
            ? "bg-gray-100 text-blue-500"
            : "text-gray-700 hover:bg-gray-50"
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
        <section id="process">
          <A2SalesProcessConsulting />
        </section>
        <section id="key-deliverables">
          <A2SalKeyDeliverables />
        </section>
        <section id="why-choose">
          <A2SalWhyChooseSalesSyllabus />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="cta">
          <CallToActionSection />
        </section>
        <FooterEl/>
      </main>
    </LayoutEl>
  );
};

export default SalesConsulting;
