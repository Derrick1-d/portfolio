import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 py-10">
      <div className=" w-full  flex flex-col md:flex-row items-center p-20">
        
        {/* Left Section - Training & Certifications */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 uppercase">Training and Certifications</h2>
          <ul className="space-y-2 text-gray-600">
            <li>React Nano Degree</li>
            <li>Salesforce Certified B2C Commerce Developer</li>
            <li>Object-Oriented Design</li>
            <li>Web Development with Java Spring Framework</li>
            <li>Front-End Web UI Frameworks and Tools: Bootstrap 4</li>
            <li>Java Programming: Solving Problems with Software</li>
            <li>Java Server Page</li>
            <li>Laravel Framework</li>
            <li>NodeJs</li>
          </ul>
        </div>

        {/* Center Section - Profile Image */}
        <div className="flex justify-center items-center flex-1">
          <img
            src="/assets/boy.png"
            alt="Profile"
            className="rounded-full w-70 h-70 object-cover shadow-md border-4 border-gray-200"
          />
        </div>

        {/* Right Section - Tools & Technologies */}
        <div className="flex-1 text-center md:text-right">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 uppercase">Tools and Technologies I Use</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Git</li>
            <li>Bitbucket</li>
            <li>G-Cloud</li>
            <li>AWS</li>
            <li>Nginx WebServer</li>
            <li>Apache WebServer</li>
            <li>NPM</li>
            <li>IntelliJ</li>
            <li>Web Storm</li>
            <li>Visual Studio Code</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
