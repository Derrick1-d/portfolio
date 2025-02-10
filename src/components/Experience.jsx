import React from "react";

const Experience = () => {
  const experiences = [
    {
      logo: "/assets/aiv.png",
      company: "Both Of Us",
      role: "Fullstack Engineer",
    },
    {
      logo: "/assets/aiv.png",
      company: "Aiva Creative",
      role: "Associate Software Engineer",
    },
    {
      logo: "/assets/amali.png",
      company: "Amalitech Training gGmbH",
      role: "Fullstack Engineer",
    },
    {
      logo: "/assets/web.png",
      company: "Web Developer",
      role: "Web Developer",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-gray-600 uppercase">
          Experience
        </h2>
        <h3 className="text-2xl font-bold text-gray-800 mt-2">
          I work with clients globally
        </h3>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 sm:px-12 lg:px-24">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-20 h-20 object-contain mx-auto"
            />
            <div>
              <h4 className="text-lg font-medium text-gray-700">
                {exp.company}
              </h4>
              <p className="text-sm text-gray-500">{exp.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
