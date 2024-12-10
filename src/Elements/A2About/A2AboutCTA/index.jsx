import { Link } from "react-router-dom";
import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

const CallToAction = () => {
  return (
    <div className="bg-blue-600 text-white text-center md:py-20 py-10  px-10 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Let’s transform your business together.</h2>
        <p className="text-lg mb-6">
          Reach out today to discover how Sales Syllabus can be your partner in success.
        </p>
       <div className="w-full flex justify-center">
       <Link to="/contact-us">
          <Button
            type="primary"
            className="bg-green-500 hover:bg-green-600 border-none font-semibold px-6 py-3 flex items-center space-x-2"
            icon={<MailOutlined />}
          >
            Contact Us
          </Button>
        </Link>
       </div>
      </div>
    </div>
  );
};

export default CallToAction;
