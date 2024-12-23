import { Drawer, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CustomDrawer = ({ toggleDrawer, isDrawerOpen }) => {
  const navigate = useNavigate();
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State for Services submenu
  const [isResourcesOpen, setIsResourcesOpen] = useState(false); // State for Resources submenu

  // Handle submenu toggle for Services
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // Handle submenu toggle for Resources
  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
    {
      label: "Services",
      submenu: [
        { label: "Market Analysis", href: "/market-analysis", image: "/lg4.png" },
        // { label: "Content Marketing ", href: "/content-marketing", image: "/lg4.png" },
        { label: "Marketing Communication", href: "/marketing-communication", image: "/lg4.png" },
        // { label: "Online Reputation Management (ORM)", href: "/online-reputation-management", image: "/lg4.png" },
        // { label: "Search Engine Optimization (SEO)", href: "/search-engine-optimization", image: "/lg4.png" },
        // { label: "Branding & Community Building", href: "/branding-community-building", image: "/lg4.png" },
        // { label: "Website Design", href: "/website-design", image: "/lg4.png" },
        { label: "Reporting Framework", href: "/Sales-framework", image: "/lg4.png" },
      ],
    },
    {
      label: "Resources",
      submenu: [
        { label: "FAQs", href: "/faqs" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Blogs", href: "/blog" },
        { label: "Free Resources", href: "/free-resources" },
      ],
    },
    {
      label: "Addons",
      submenu: [
        { label: "Content Marketing", href: "/content-marketing" },
      ],
    },
  ];

  return (
    <Drawer
      style={{ padding: '16px', backgroundColor: '#f0f4f8' }} // Soft blue background
      className="custom-drawer shadow-xl"
      placement="left"
      onClose={toggleDrawer}
      open={isDrawerOpen}
      width={280}
      closeIcon={<span className="text-gray-600 hover:text-gray-800 text-3xl">&times;</span>}
    >
      <ul className="drawer-menu-list text-lg font-semibold text-gray-800 space-y-5">
        {navigationLinks.map((item) => (
          <li key={item.label} className="drawer-menu-item hover:text-blue-400 transition-all ease-in-out bg-white rounded-md">
            {item.submenu ? (
              <>
                <button
                  className="w-full text-left flex items-center justify-between focus:outline-none hover:bg-gray-100 rounded-md px-3 py-2"
                  onClick={item.label === "Services" ? toggleServices : toggleResources}
                >
                  <span>{item.label}</span>
                  <span>{(item.label === "Services" ? isServicesOpen : isResourcesOpen) ? '-' : '+'}</span>
                </button>
                {(item.label === "Services" ? isServicesOpen : isResourcesOpen) && (
                  <ul className="submenu-list mt-2 space-y-3">
                    {item.submenu.map((submenuItem) => (
                      <li key={submenuItem.label} className="submenu-item bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg px-2 py-1">
                        <Link
                          to={submenuItem.href}
                          className="w-full flex items-center hover:text-blue-400 transition-colors"
                          onClick={toggleDrawer} // Close drawer on link click
                        >
                          {submenuItem.image && <img src={submenuItem.image} alt={submenuItem.label} className="w-6 h-6 mr-2" />}
                          <span className="block font-semibold">{submenuItem.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link to={item.href} onClick={toggleDrawer} className="block w-full px-3 py-2 rounded-md hover:bg-gray-100">
                {item.label}
              </Link>
            )}
          </li>
        ))}

        <li className="drawer-menu-item mt-6">
          <Link to="https://calendly.com/salessyllabus" target='_blank'>
            <Button
            
              className="w-full py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 transition-all"
            >
              Book Appointment
            </Button>
          </Link>
        </li>
      </ul>
    </Drawer>
  );
};

export default CustomDrawer;
