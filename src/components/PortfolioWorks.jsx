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
    },
    {
      title: "Online Disaster Reporting System",
      image: "/projects/disaster.png", 
    },
    {
      title: "Activity Tracker",
      image: "/projects/activity.png", 
    },
    {
      title: "Student ChatBot",
      image: "/projects/chatbot.png", 
    },
    
  ];

  return (
    <div className=" bg-gray-50 p-20">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-lg font-medium text-gray-600 uppercase">Portfolio</h1>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">Recent Works</h2>
      </header>

      {/* Swiper Section */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {works.map((work, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{work.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioWorks;
