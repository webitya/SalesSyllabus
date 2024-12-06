import React from "react";
import { StarFilled } from "@ant-design/icons";

const Testimonials = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl text-center">
          What Our Clients Say
        </h2>
        
        <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto text-center">
          Hear from the businesses we’ve helped grow and succeed.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center border-t-4 border-blue-500">
            <StarFilled className="text-yellow-500 text-3xl mb-4" />
            <p className="text-lg text-gray-900">
              "CharanWellness transformed our business with their strategic branding. We’ve seen a huge increase in customer loyalty!"
            </p>
            <p className="mt-4 text-base text-gray-600 font-semibold">— Alex Johnson, CEO of HealthSync</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center border-t-4 border-pink-500">
            <StarFilled className="text-yellow-500 text-3xl mb-4" />
            <p className="text-lg text-gray-900">
              "The team’s expertise in community building helped us create a loyal client base. Highly recommend their services!"
            </p>
            <p className="mt-4 text-base text-gray-600 font-semibold">— Sarah Thompson, Founder of GreenSpace</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center border-t-4 border-blue-500">
            <StarFilled className="text-yellow-500 text-3xl mb-4" />
            <p className="text-lg text-gray-900">
              "Their influencer campaigns took our reach to the next level. CharanWellness helped us grow beyond expectations!"
            </p>
            <p className="mt-4 text-base text-gray-600 font-semibold">— David Martinez, Marketing Director at FitWorks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
