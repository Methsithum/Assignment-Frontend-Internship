import React, { useState, useEffect, useRef } from 'react';
import { 
  FaSwimmingPool, 
  FaSpa, 
  FaDumbbell, 
  FaUtensils, 
  FaWifi, 
  FaParking,
  FaSnowflake,
  FaConciergeBell,
  FaShieldAlt,
  FaTv,
  FaCoffee,
  FaUmbrellaBeach
} from 'react-icons/fa';

import backgroundImage from '../assets/backg1.jpg';

const Facility = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  const scrollPositionRef = useRef(0);

  const facilities = [
    {
      icon: FaSwimmingPool,
      title: "Infinity Pool",
      description: "Temperature-controlled infinity pool with panoramic city views",
      gradient: "from-blue-100 to-blue-50",
      color: "text-blue-600"
    },
    {
      icon: FaSpa,
      title: "Luxury Spa",
      description: "Holistic wellness treatments and therapeutic massage services",
      gradient: "from-purple-100 to-purple-50",
      color: "text-purple-600"
    },
    {
      icon: FaDumbbell,
      title: "Fitness Center",
      description: "24/7 state-of-the-art gym with personal training available",
      gradient: "from-orange-100 to-orange-50",
      color: "text-orange-600"
    },
    {
      icon: FaUtensils,
      title: "Gourmet Restaurant",
      description: "Award-winning cuisine with farm-to-table dining experience",
      gradient: "from-green-100 to-green-50",
      color: "text-green-600"
    },
    {
      icon: FaWifi,
      title: "High-Speed Wi-Fi",
      description: "Gigabit fiber internet throughout the property",
      gradient: "from-cyan-100 to-cyan-50",
      color: "text-cyan-600"
    },
    {
      icon: FaParking,
      title: "Valet Parking",
      description: "Secure underground parking with valet service",
      gradient: "from-gray-100 to-gray-50",
      color: "text-gray-600"
    },
    {
      icon: FaSnowflake,
      title: "Climate Control",
      description: "Smart room temperature control for optimal comfort",
      gradient: "from-teal-100 to-teal-50",
      color: "text-teal-600"
    },
    {
      icon: FaConciergeBell,
      title: "24/7 Concierge",
      description: "Personalized service available around the clock",
      gradient: "from-amber-100 to-amber-50",
      color: "text-amber-600"
    },
    {
      icon: FaShieldAlt,
      title: "Security",
      description: "Advanced security system with 24/7 monitoring",
      gradient: "from-red-100 to-red-50",
      color: "text-red-600"
    },
    {
      icon: FaTv,
      title: "Smart Entertainment",
      description: "4K Smart TVs with streaming services included",
      gradient: "from-indigo-100 to-indigo-50",
      color: "text-indigo-600"
    },
    {
      icon: FaCoffee,
      title: "Coffee Lounge",
      description: "Premium coffee bar with barista service",
      gradient: "from-amber-100 to-yellow-50",
      color: "text-amber-700"
    },
    {
      icon: FaUmbrellaBeach,
      title: "Beach Access",
      description: "Private beach area with complimentary amenities",
      gradient: "from-sky-100 to-blue-50",
      color: "text-sky-600"
    }
  ];

    // Duplicate facilities for seamless scrolling
  const duplicatedFacilities = [...facilities, ...facilities];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const animateScroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPositionRef.current += 0.5; 
        
        if (scrollPositionRef.current >= scrollContainer.scrollWidth / 2) {
          scrollPositionRef.current = 0;
        }
        
        scrollContainer.scrollLeft = scrollPositionRef.current;
      }
      
      animationRef.current = requestAnimationFrame(animateScroll);
    };

    animationRef.current = requestAnimationFrame(animateScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark Overlay for better readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-gray-50/40 to-white/30"></div>
      </div>

      

      <div className="relative z-10 w-screen">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-blue-100 mb-6 shadow-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
            <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">We Served</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            World-Class Facilities
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Experience unparalleled luxury with our cutting-edge amenities designed for your comfort and convenience
          </p>
        </div>

        {/* Auto-scrolling Container */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-hidden scrollbar-hide py-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex space-x-6 animate-scroll">
              {duplicatedFacilities.map((facility, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 group relative bg-blue-100 backdrop-blur-md rounded-2xl  border-black shadow-lg p-8 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:bg-blue-900 cursor-pointer"
                >
                  {/* Remove gradient background and use solid with blur */}
                  <div className="absolute inset-0 bg-white/80 rounded-2xl -z-10"></div>
                  
                  {/* Icon Container */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white backdrop-blur-sm border border-white/50 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <facility.icon className={`w-7 h-7 ${facility.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className={`text-2xl font-semibold text-gray-900 mb-3 group-hover:${facility.color} transition-colors duration-300`}>
                    {facility.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {facility.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className={`absolute bottom-0 left-0 w-0 h-1 ${facility.color.replace('text', 'bg')}/50 group-hover:w-full transition-all duration-500 rounded-full`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>

      {/* Subtle Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>

      {/* Custom CSS for scrollbar hiding */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Facility;