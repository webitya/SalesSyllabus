import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/HomePage";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Faqs from "./Components/Faqs";
import Blogs from "./Components/Blogs";
import CaseStudies from "./Components/CaseStudies";
import CaseStudy1 from "./Elements/Cases/Case1";
import CaseStudy2 from "./Elements/Cases/Case2";
import CaseStudy3 from "./Elements/Cases/Case3";
import CaseStudy4 from "./Elements/Cases/Case4";
import Blog1 from "./Elements/Blogs/Blog1";
import Blog2 from "./Elements/Blogs/Blog2";
import Blog3 from "./Elements/Blogs/Blog3";
import Blog4 from "./Elements/Blogs/Blog4";
import Blog5 from "./Elements/Blogs/Blog5";
import Blog6 from "./Elements/Blogs/Blog6";
import Blog7 from "./Elements/Blogs/Blog7";
import Blog8 from "./Elements/Blogs/Blog8";
import Blog9 from "./Elements/Blogs/Blog9";
import Blog10 from "./Elements/Blogs/Blog10";
import BusinessPlanning from "./Components/BusinessPlanning";
import PerformanceMarketing from "./Components/PerformanceMarketing";
import Orm from "./Components/Orm/idex";
import Seo from "./Components/Seo";
import Branding from "./Components/Branding";
import WebsiteDesign from "./Components/WebsiteDesign";
import SalesConsulting from "./Components/SalesConsulting";
import TawkTo from "./Shared/Tawk";
import Resources from "./Components/Resources";
import Strategy from "./Components/Strategy";


const App=()=>{
  const display=(
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/free-resources" element={<Resources/>} />
          <Route path="/faqs" element={<Faqs/>}/>
          <Route path="/blog" element={<Blogs/>}/>
          <Route path="/case-studies" element={<CaseStudies/>}/>
          {/* ============S E R V I C E S =====================*/}
          <Route path="/market-analysis" element={<BusinessPlanning />} />{/*Market Analysis */}
          <Route path="/content-marketing" element={<PerformanceMarketing />} />{/*Performance Marketing */}
          <Route path="/online-reputation-management" element={<Orm/>} />
          <Route path="/search-engine-optimization" element={<Seo />} />
          <Route path="/branding-community-building" element={<Branding />} />
          <Route path="/website-design" element={<WebsiteDesign />} />
          <Route path="/Sales-framework" element={<SalesConsulting />} />
          <Route path="/marketing-communication" element={<Strategy />} />  {/* Maketing Communication */}
          {/* =============================================== */}
          <Route path="/blogs/sales-talent-management" element={<Blog1 />} />
          <Route path="/blogs/sales-hiring-challenges" element={<Blog2 />} />
          <Route path="/blogs/talent-development-sales-hiring" element={<Blog3 />} />
          <Route path="/blogs/sales-performance-management" element={<Blog4 />} />
          <Route path="/blogs/support-problem-solving" element={<Blog5/>} />
          <Route path="/blogs/attrition-management" element={<Blog6 />} />
          <Route path="/blogs/sales-performance-attrition" element={<Blog7 />} />
          <Route path="/blogs/attracting-sales-talent" element={<Blog8 />} />
          <Route path="/blogs/build-sales-team" element={<Blog9 />} />
          <Route path="/blogs/marketing-strategy" element={<Blog10 />} />
          <Route path="/case-study-1" element={<CaseStudy1 />} />
          <Route path="/case-study-2" element={<CaseStudy2 />} />
          <Route path="/case-study-3" element={<CaseStudy3 />} />
          <Route path="/case-study-4" element={<CaseStudy4 />} />
         
        </Routes>
        {/* <TawkTo/> */}
       </BrowserRouter>
    </>
  )
  return display;
}
export default App