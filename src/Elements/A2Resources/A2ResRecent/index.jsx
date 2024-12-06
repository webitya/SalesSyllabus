import React from 'react';

const RecentlyAddedResources = () => {
  const recentResources = [
    {
      title: "New Market Research on Industry Trends",
      description: "Get insights on the latest trends in the industry to stay ahead.",
      linkText: "View or Download",
    },
    {
      title: "White Paper on Emerging Technologies",
      description: "A comprehensive guide to new technologies and their applications.",
      linkText: "View or Download",
    },
    {
      title: "Case Study: Successful Content Marketing Strategies",
      description: "Learn from real-world examples of effective content marketing.",
      linkText: "View or Download",
    },
  ];

  return (
    <section className="py-8 px-4 bg-indigo-50">
      <h2 className="text-xl font-semibold text-center text-blue-900 mb-6">
        Recently Added Resources
      </h2>
      
      <div className="space-y-4">
        {recentResources.map((resource, index) => (
          <div key={index} className="bg-white p-4 shadow-sm rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-blue-800">{resource.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
            <button className="text-sm text-blue-500 underline mt-2">
              {resource.linkText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentlyAddedResources;
