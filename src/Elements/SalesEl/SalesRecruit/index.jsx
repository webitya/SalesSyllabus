import React from "react";

const SalesRecruitment = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Sales Recruitment
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Attract and hire top-tier sales talent with our specialized recruitment services. 
            We ensure your team is composed of high-performing individuals who drive success.
          </p>

          <p className="mt-4 text-lg text-gray-600">
            Our tailored recruitment strategies not only focus on filling positions but also emphasize finding candidates who align with your company's culture and values. 
            This approach leads to greater employee satisfaction and retention.
          </p>

          <p className="mt-4 text-lg text-gray-600">
            We leverage advanced assessment techniques and industry insights to identify candidates with the right skills and potential. 
            Our comprehensive process ensures you have access to a diverse talent pool, enabling you to make informed hiring decisions.
          </p>

          <div className="mt-8 bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800">What We Offer:</h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>• Comprehensive candidate sourcing and screening.</li>
              <li>• Tailored interviews and assessment processes.</li>
              <li>• Ongoing support to integrate new hires into your team.</li>
              <li>• In-depth market analysis to identify top talent trends.</li>
              <li>• Behavioral and competency-based interviews to assess candidate fit.</li>
              <li>• Collaboration with your team to ensure alignment with business objectives.</li>
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center p-4">
          <img
            src="/recruitment.svg" // Replace with your actual image URL
            alt="Sales Recruitment"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default SalesRecruitment;
