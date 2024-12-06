// import AboutWhyChooseUs from "../../Elements/A2About/A2AbChoose"
// import CallToAction from "../../Elements/A2About/A2AboutCTA"
// import AboutOurVision from "../../Elements/A2About/A2AbVisi"
// import AboutWhatWeDo from "../../Elements/A2About/A2AbWhat"
// import AboutWhoWeAre from "../../Elements/A2About/A2AbWhy"
// import AboutHero from "../../Elements/A2About/A2Hero"
// import AboutExperience from "../../Elements/AboutExperienceEl"
// import TimelineComponent from "../../Elements/HomeJourney"
// import LayoutEl from "../../Shared/LayoutEl"



// const AboutUs=()=>{
//     const display=(
//         <>
//           <LayoutEl>
            
//              <AboutHero/>
//              <AboutWhoWeAre/>
//              <AboutWhatWeDo/>
//              <AboutOurVision/>
//              <AboutWhyChooseUs/>
//              <AboutExperience/>
//              <TimelineComponent/>
//              <CallToAction/>

            
//           </LayoutEl>
//         </>
//     )
//     return display
// }
// export default AboutUs
import React, { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import AboutWhyChooseUs from "../../Elements/A2About/A2AbChoose";
import CallToAction from "../../Elements/A2About/A2AboutCTA";
import AboutOurVision from "../../Elements/A2About/A2AbVisi";
import AboutWhatWeDo from "../../Elements/A2About/A2AbWhat";
import AboutWhoWeAre from "../../Elements/A2About/A2AbWhy";
import AboutHero from "../../Elements/A2About/A2Hero";
import AboutExperience from "../../Elements/AboutExperienceEl";
import TimelineComponent from "../../Elements/HomeJourney";
import LayoutEl from "../../Shared/LayoutEl";
import FooterEl from "../../Shared/FooterEl";

const AboutUs = () => {
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
    { id: "who-we-are", label: "Who We Are" },
    { id: "what-we-do", label: "What We Do" },
    { id: "our-vision", label: "Our Vision" },
    { id: "why-choose-us", label: "Why Choose Us" },
    { id: "experience", label: "Experience" },
    { id: "timeline", label: "Our Journey" },
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
        className="fixed top-4 left-4 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg "
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
        className={`cursor-pointer text-sm  p-2 rounded-md transition-colors duration-200 ${
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
        {/* <section id="hero"> */}
          <AboutHero />
        {/* </section> */}
        <section id="who-we-are">
          <AboutWhoWeAre />
        </section>
        <section id="what-we-do">
          <AboutWhatWeDo />
        </section>
        <section id="our-vision">
          <AboutOurVision />
        </section>
        <section id="why-choose-us">
          <AboutWhyChooseUs />
        </section>
        <section id="experience">
          <AboutExperience />
        </section>
        <section id="timeline">
          <TimelineComponent />
        </section>
        <section id="call-to-action">
          <CallToAction />
        </section>
        <FooterEl/>
      </main>
     
    </LayoutEl>
  );
};

export default AboutUs;









