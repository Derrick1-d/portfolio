import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PortfolioWorks = () => {
  const works = [
    {
      title: "BUSINESS WEB",
      image: "/projects/busweb.png",
      description: "A comprehensive business website solution"
    },
    
    {
          title: "Student Elearning Platform",
          image: "/projects/student_elearning.png",
          description: "An elearning for student and lecturers administrator dashboard"
      },
    {
      title: "Activity Tracker",
      image: "/projects/activity.png",
      description: "Personal activity and productivity monitoring app"
    },
    
      
      {
          title: "Online Medication Manage",
          image: "/projects/medication_manage.png",
          description: "An online medication monitoring for sick people administrator dashboard"
      },
      {
          title: "Online Medication Purchase",
          image: "/projects/online-medication.png",
          description: "An online medication for web application for purchasing drugs"
      },
      {
      title: "Online Disaster Reporting System",
      image: "/projects/disaster.png",
      description: "Real-time disaster reporting and tracking platform"
    },
    {
      title: "Student ChatBot",
      image: "/projects/chatbot.png",
      description: "AI-powered educational assistant for students"
    },
    {
          title: "Relationship and Tips Game",
          image: "/projects/relationship_tips.png",
          description: "Relationship tips game for people"
      },
  ];

  return (
      <div className="mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-10">
            <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-sans dark:font-mono">
            Recent Works
          </p>
        </div>

        {/* Swiper Section */}
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="portfolio-swiper"
        >
          {works.map((work, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
                  <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white font-sans dark:font-mono mb-2">
                      {work.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 font-sans dark:font-mono">
                      {work.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
};

export default PortfolioWorks;
