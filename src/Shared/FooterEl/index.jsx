import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './FooterEl.css';

const FooterEl = () => {
  return (
    <footer className='footer-section w-full'>
      <div className=" py-4 px-4">
        <div className="footer-content">

          {/* Column 1: About Us */}
          <FooterColumn title="About Us">
            <p>
            Sales Syllabus is a premium business consulting company specializing in achieving business transformation by optimizing sales and marketing functions.<br></br>
            {/* <i className='text-white'>The aim is not only to generate leads but to ensure these leads are effectively converted into sales, improving the overall revenue and sales performance.</i> */}
            </p>
            <Link to="/about-us" target="_blank" className='py-3 my-2'>
              <Button className='footer-button my-2' type="primary" shape="round">Discover More</Button>
            </Link>
          </FooterColumn>

          {/* Column 2: Our Services */}
          <FooterColumn title="Our Services">
            <FooterLink to="/market-analysis">Market Analysis</FooterLink>
            <FooterLink to="/marketing-communication">Marketing Communication</FooterLink>
            {/* <FooterLink to="/online-reputation-management">Online Reputation Management</FooterLink> */}
            {/* <FooterLink to="/search-engine-optimization">Search Engine Optimization</FooterLink> */}
            {/* <FooterLink to="/branding-community-building">Branding & Community Building</FooterLink> */}
            {/* <FooterLink to="/website-design">Website Design</FooterLink> */}
            <FooterLink to="/Sales-framework">Reporting Framework</FooterLink>
          </FooterColumn>

          {/* Column 3: Get In Touch */}
          <FooterColumn title="Get In Touch">
            <FooterLink to="/free-resources">Free Resources</FooterLink>
            <FooterLink to="/blog">Blogs</FooterLink>
            <FooterLink to="/case-studies">Case Studies</FooterLink>
            <FooterLink to="/faqs">FAQs</FooterLink>
            <FooterLink to="/contact-us">Contact Us</FooterLink>
          </FooterColumn>

          {/* Column 4: Contact & Social Links */}
          <FooterColumn title="Contact Us">
            <ContactInfo />
            <SocialLinks />
          </FooterColumn>

        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};

const FooterColumn = ({ title, children }) => (
  <div className="footer-column">
    <h5 className='footer-title'>{title}</h5>
    {children}
  </div>
);

const FooterLink = ({ to, children }) => (
  <ul className="footer-list">
    <li>
      <Link to={to} target="_blank" className='footer-link'>{children}</Link>
    </li>
  </ul>
);

const ContactInfo = () => (
  <>
    <p><strong>Address:</strong> D Block, Jayshree Green City, Argora, Ranchi</p>
    <p><strong>Phone:</strong> +91 6200207379</p>
    <p><strong>Email: </strong><a href="mailto:salessyllabus@gmail.com" target="_blank" className='footer-link'>sandeep@salessyllabus.com</a></p>
  </>
);

const SocialLinks = () => (
  <>
    <h5 className='footer-title mt-4'>Connect With Us</h5>
    <div className="social-icons">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='social-icon'><FacebookOutlined /></a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className='social-icon'><TwitterOutlined /></a>
      <a href="https://www.linkedin.com/in/sandeep-gupta-31baa82b/" target="_blank" rel="noopener noreferrer" className='social-icon'><LinkedinOutlined /></a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='social-icon'><InstagramOutlined /></a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className='social-icon'><YoutubeOutlined /></a>
    </div>
  </>
);

const FooterBottom = () => (
  <div className="footer-bottom">
    <p>© 2024 Sales Syllabus. All rights reserved.</p>
  </div>
);

export default FooterEl;
