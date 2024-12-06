import React from "react";
import { Steps } from "antd";
import {
  ClockCircleOutlined,
  TrophyOutlined,
  RiseOutlined,
  CheckCircleOutlined,
  TeamOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css"; // Ant Design base styles
import "./TimelineComponent.css"; // Custom styles

const { Step } = Steps;

const timelineData = [
  {
    year: "2017",
    title: "Launched as a Business Consulting Company",
    description: "Serving 5 clients.",
    icon: <ClockCircleOutlined />,
  },
  {
    year: "2018",
    title: "Developed Proven Process",
    description: "Expanded to serve 50+ clients.",
    icon: <TrophyOutlined />,
  },
  {
    year: "2020",
    title: "Shifted Focus to Specialized Consulting",
    description: "Focused on sales and marketing consulting.",
    icon: <RiseOutlined />,
  },
  {
    year: "2021",
    title: "Created Core Syllabus and Systems",
    description: "Developed Sales Performance Management Systems and a Marketing Success Framework, addressing sales and marketing challenges, tested across 25 companies.",
    icon: <CheckCircleOutlined />,
  },
  {
    year: "2024",
    title: "Validated Solutions Across Companies",
    description: "Successfully addressed sales and marketing challenges for numerous companies, validating the Sales Performance Management System and Marketing Success Framework with over 100 companies.",
    icon: <SettingOutlined />,
  },
];

const TimelineComponent = () => {
  return (
    <div className="timeline-container">
      <h1 className="timeline-title">Our Journey</h1>
      <div className="timeline-steps">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-step">
            <div className="step-icon">{item.icon}</div>
            <div className="step-content">
              <h3>{item.year}</h3>
              <p>{item.title}</p>
              <p className="step-description">{item.description}</p>
            </div>
            {index < timelineData.length - 1 && <div className="divider" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineComponent;
