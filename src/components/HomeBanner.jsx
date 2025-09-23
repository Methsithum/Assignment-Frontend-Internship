import React, { useState, useEffect } from 'react';

import { FaWhatsapp } from 'react-icons/fa';


import poolimg from '../assets/1.jpeg'
import livimg from '../assets/3.jpg'
import livimg2 from '../assets/2.jpg'

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      image: livimg,
      title: "Where Future Meets Luxury",
      subtitle: "Experience tomorrow's hospitality today",
      description: "Immerse yourself in a world of cutting-edge design and unparalleled comfort"
    },
    {
      image: livimg2,
      title: "Smart Luxury Suites",
      subtitle: "AI-Enhanced Living Spaces",
      description: "Rooms that adapt to your preferences with intelligent automation"
    },
    {
      image: poolimg,
      title: "Infinity Experiences",
      subtitle: "Beyond Ordinary Stays",
      description: "Futuristic amenities designed for the modern traveler"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Slides Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 backdrop-blur-[1px]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80"></div>
            </div>

            {/* Content */}
            <div className={`relative z-10 flex items-center justify-center h-full transition-transform duration-1000 ${
              index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="text-center text-white px-4 max-w-6xl mx-auto">
                {/* Animated Badge */}
                <div className={`inline-flex items-center px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-blue-300/20 mb-8 transition-all duration-700 delay-300 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-blue-300 font-medium text-sm uppercase tracking-wider">Vacation Ready</span>
                </div>

                {/* Title */}
                <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent transition-all duration-700 delay-500 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className={`text-xl md:text-2xl lg:text-3xl text-blue-300 mb-6 font-light transition-all duration-700 delay-700 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  {slide.subtitle}
                </p>

                {/* Description */}
                <p className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-900 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-1000 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  <button className="group relative bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 rounded-2xl font-semibold text-white shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105 min-w-[200px]">
                    <span className="relative z-10">Book Your Stay</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>


                  <button className="group relative border-2 border-green-400/30 bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl font-semibold text-white hover:border-green-400/60 transition-all duration-300 hover:scale-105 min-w-[200px]">
                    <span className="relative z-10 flex items-center justify-center">
                    <FaWhatsapp className="w-5 h-5 mr-2" />
                       WhatsApp Booking
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md border border-green-300/20 rounded-2xl flex items-center justify-center text-green-300 hover:bg-white/20 transition-all duration-300 group"
        >
          <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md border border-green-300/20 rounded-2xl flex items-center justify-center text-green-300 hover:bg-white/20 transition-all duration-300 group"
        >
          <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-blue-400 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-300/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Glass Morphism Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HomeBanner;