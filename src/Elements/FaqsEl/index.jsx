import React from 'react';
import { Collapse, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import "./FaqlEl.css";

const { Panel } = Collapse;

const FAQPageEl = () => {
  return (
    <div className="p-1">
      {/* FAQ Hero Section */}
     
      {/* FAQ Section */}
      <section className="py-20 w-full">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Your Questions Answered
        </h2>
        <Collapse>
          <Panel 
            header="What services does SalesSyllabus offer?" 
            key="1" 
            extra={<QuestionCircleOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
            className="bg-blue-50"
          >
            <p className="text-base">
            We provide strategic consulting services aimed at transforming business performance. Our focus is on enhancing three core pillars of your organization: business planning, marketing execution, and sales execution. Explore our individual service pages to learn more about how we drive impactful transformation

            </p>
          </Panel>
          <Panel 
  header="How do you build a sales and marketing strategy?" 
  key="2" 
  extra={<QuestionCircleOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
  className="bg-green-50"
>
  <ol className="text-base list-decimal list-inside space-y-2">
    <li>Perform data analysis to identify gaps and opportunities for improvement</li>
    <li>Develop a strategy that aligns revenue goals with the right customer fit, optimizes pricing, and enhances the value proposition.</li>
    <li>Continuously monitor key performance metrics.</li>
    <li>Understand the intent of visitors and prospects across digital and traditional channels.</li>
    <li>Build a sales funnel based on successful, data-driven metrics.</li>
    <li>Deliver the right message to visitors and prospects at the right time.</li>
    <li>
      Strengthen sales capabilities by:
      <ul className="list-disc list-inside ml-4">
        <li>Recruiting and onboarding the sales team.</li>
        <li>Developing sales performance management systems.</li>
        <li>Providing rapid support to resolve work-related queries for the sales team.</li>
      </ul>
    </li>
  </ol>
</Panel>

          <Panel 
            header="Can you help improve my sales team’s performance?" 
            key="3" 
            extra={<QuestionCircleOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
            className="bg-yellow-50"
          >
            <p className="text-base">
              Our Performance Management system is designed to help your team meet their objectives through measurable KPIs and continuous feedback, ultimately driving success.
            </p>
          </Panel>
          <Panel 
            header="What support does your Sales Support Desk provide?" 
            key="4" 
            extra={<QuestionCircleOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
            className="bg-red-50"
          >
            <p className="text-base">
              We offer ongoing training, mentorship, and real-time problem-solving to ensure your sales team stays productive and motivated.
            </p>
          </Panel>
          <Panel 
            header="How do I get started with SalesSyllabus?" 
            key="5" 
            extra={<QuestionCircleOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
            className="bg-purple-50"
          >
            <p className="text-base">
              Reach out to us for a free consultation. Our team will evaluate your sales processes and develop a customized solution to meet your needs.
            </p>
          </Panel>
          <Panel 
            header="Do you offer custom solutions for unique business needs?" 
            key="6" 
            extra={<QuestionCircleOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
            className="bg-teal-50"
          >
            <p className="text-base">
              Absolutely! We tailor our services to address the specific challenges and objectives of your business, no matter how unique.
            </p>
          </Panel>
          <Panel 
            header="What is your pricing model?" 
            key="7" 
            extra={<QuestionCircleOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
            className="bg-indigo-50"
          >
            <p className="text-base">
              We offer customized pricing based on the specific needs and scope of your project. Contact us for a detailed quote.
            </p>
          </Panel>
          <Panel 
            header="How can I track the progress of my sales team?" 
            key="8" 
            extra={<QuestionCircleOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
            className="bg-orange-50"
          >
            <p className="text-base">
              We provide regular performance reports and analytics to help you track the progress and success of your sales team.
            </p>
          </Panel>
          {/*  */}
          <Panel 
            header="Do you help in lead generation?" 
            key="9" 
            extra={<QuestionCircleOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
            className="bg-pink-50"
          >
            <p className="text-base">
              Yes
            </p>
          </Panel>
          {/*  */}
          <Panel 
            header=" Do you help in sales closures?" 
            key="10" 
            extra={<QuestionCircleOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
            className="bg-blue-50"
          >
            <p className="text-base">
              Yes
            </p>
          </Panel>
        </Collapse>
      </section>
    </div>
  );
};

export default FAQPageEl;
