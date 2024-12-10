import React from "react";
import { BookOutlined } from "@ant-design/icons";
import { Card } from "antd";

const A2ContentMarketingIntro = () => {
  return (
    <div className="py-20">
      <Card className="shadow-sm border-none bg-white rounded-sm  transition-shadow">
        {/* Icon and Title */}
        {/* <div className="flex items-center mb-6 justify-center">
          <BookOutlined className="text-4xl text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900 text-center">Content Marketing</h2>
        </div> */}

        {/* Content */}
        <h1 className="text-center text-3xl pb-5">What is Content Marketing ?</h1>
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          Content marketing is a strategic approach to creating, publishing, and distributing{" "}
          <span className="font-semibold">valuable, relevant, and consistent content</span> to attract and engage a clearly defined audience. The ultimate goal is to drive profitable customer actions, such as purchasing a product, subscribing to a service, or becoming brand advocates.
        </p>
      </Card>
    </div>
  );
};

export default A2ContentMarketingIntro;
