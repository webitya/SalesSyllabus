import React from 'react';

const UserFeedback = () => {
  const feedbacks = [
    {
      name: "Alex Johnson",
      feedback: "The white papers here are top-notch! They provided us with valuable insights that helped shape our marketing strategy.",
    },
    {
      name: "Sandra Lee",
      feedback: "Great resources! The market research is always up-to-date and relevant to our industry. Highly recommended!",
    },
    {
      name: "Michael Smith",
      feedback: "I found exactly what I needed. The case studies are especially helpful to understand real-world applications.",
    },
  ];

  return (
    <section className="py-8 px-4 bg-white">
      <h2 className="text-xl font-semibold text-center text-blue-900 mb-6">
        What Users Are Saying
      </h2>
      
      <div className="space-y-4 max-w-3xl mx-auto">
        {feedbacks.map((item, index) => (
          <div key={index} className="p-4 bg-indigo-50 shadow-sm rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-blue-800 font-medium text-sm">{item.name}</h3>
            <p className="text-gray-700 text-sm mt-1">{item.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserFeedback;
