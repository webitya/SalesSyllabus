import { useState, useEffect } from "react";
import { Button } from "antd";
import { Link, NavLink } from "react-router-dom";
import { MenuOutlined, CloseOutlined, FormOutlined, DownOutlined } from "@ant-design/icons";
import CustomDrawer from "../DrawerEl";
import "./NavbarEl3.css";

const NavbarEl3 = () => {
  const menus = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Market Analysis", href: "/market-analysis" },
    { label: "Marketing Communication", href: "/marketing-communication" },
    // { label: "Content Marketing ", href: "/content-marketing" },
    { label: "Reporting Framework", href: "/Sales-framework" },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isResourcesOpen1, setIsResourcesOpen1] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <nav
        className={`navbar ${isSticky ? "sticky-navbar" : ""}`}
        style={{
          backgroundColor: isSticky ? "white" : "white",
          boxShadow: isSticky ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none",
          position: "fixed",
          width: "100%",
          zIndex: 1000,
          transition: "all 0.3s ease",
        }}
      >
        <div className="navbar-brand">
          <NavLink to="/">
            <img src="/logobbyy.svg" alt="brand-logo" width="110px" />
          </NavLink>
        </div>

        <div className="navbar-menu sm:flex hidden">
          {menus.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              className={({ isActive }) => (isActive ? "active-link" : "navlink")}
              style={{
                color: "#333",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {item.label}
            </NavLink>
          ))}

          {/* Resources Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <span className="navlink" style={{ fontWeight: "normal", textDecoration: "none" }}>Resources <DownOutlined style={{fontSize:"13px"}}/></span>
            {isResourcesOpen && (
              <div className="dropdown-menu">
                <NavLink to="/faqs" className="dropdown-item">FAQs</NavLink>
                <NavLink to="/case-studies" className="dropdown-item">Case Studies</NavLink>
                <NavLink to="/blog" className="dropdown-item">Blogs</NavLink>
                <NavLink to="/free-resources" className="dropdown-item">Free Resources</NavLink>
              </div>
            )}
          </div>
          {/* ===========Addons======== */}
          <div
            className="dropdown mr-6"
            onMouseEnter={() => setIsResourcesOpen1(true)}
            onMouseLeave={() => setIsResourcesOpen1(false)}
          >
            <span className="navlink" style={{ fontWeight: "normal", textDecoration: "none" }}>Add-on <DownOutlined style={{fontSize:"13px"}}/></span>
            {isResourcesOpen1 && (
              <div className="dropdown-menu w-40">
                <NavLink to="/content-marketing" className="dropdown-item text-sm">Content Marketing</NavLink>
              </div>
            )}
          </div>
          {/* ========================= */}

          <Link to="https://calendly.com/salessyllabus" target="_blank">
      <Button
        className="premium-button"
        style={{
          backgroundColor: "#007BFF",
          color: "#fff",
          fontWeight: "600",
          borderRadius: "8px",
          padding: "10px 30px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        Book Appointment <FormOutlined />
      </Button>
    </Link>
        </div>

        <Button
          className="menu-toggle sm:hidden"
          type="text"
          aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
          style={{
            color: isDrawerOpen ? "#FF0000" : "#0047FF",
            fontSize: "24px",
          }}
          onClick={toggleDrawer}
        >
          {isDrawerOpen ? <CloseOutlined /> : <MenuOutlined />}
        </Button>
      </nav>

      <CustomDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default NavbarEl3;
