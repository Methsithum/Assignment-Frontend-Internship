import React, { useState } from 'react';
import { FaWhatsapp, FaBed, FaUsers, FaRuler, FaWifi, FaTv, FaSnowflake, FaCoffee, FaShower, FaUtensils } from 'react-icons/fa';

// Import your room images (update paths to your actual images)
import room1 from '../assets/r1.jpg';
import room2 from '../assets/r2.jpeg';
import room3 from '../assets/r3.jpg';
import room4 from '../assets/r4.jpg';
import room5 from '../assets/r5.jpeg';
import room6 from '../assets/r6.jpeg';

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      image: room1,
      title: "Luxury City View Room",
      description: "Elegant room with panoramic city views, featuring modern amenities and sophisticated decor",
      price: 299,
      originalPrice: 349,
      size: "45 m²",
      guests: 2,
      beds: 1,
      amenities: [FaWifi, FaTv, FaSnowflake, FaCoffee],
      features: ["Smart TV", "Mini Bar", "Work Desk", "City View"]
    },
    {
      id: 2,
      image: room2,
      title: "Executive Suite",
      description: "Spacious suite with separate living area, perfect for business travelers and extended stays",
      price: 499,
      originalPrice: 599,
      size: "75 m²",
      guests: 3,
      beds: 2,
      amenities: [FaWifi, FaTv, FaSnowflake, FaCoffee, FaUtensils],
      features: ["Living Room", "Dining Area", "Executive Desk", "Premium View"]
    },
    {
      id: 3,
      image: room3,
      title: "Presidential Suite",
      description: "Ultimate luxury experience with private terrace, jacuzzi, and personalized butler service",
      price: 899,
      originalPrice: 1099,
      size: "120 m²",
      guests: 4,
      beds: 2,
      amenities: [FaWifi, FaTv, FaSnowflake, FaCoffee, FaUtensils, FaShower],
      features: ["Private Terrace", "Jacuzzi", "Butler Service", "Panoramic View"]
    },
    {
      id: 4,
      image: room4,
      title: "Deluxe Ocean View",
      description: "Breathtaking ocean views with balcony, perfect for romantic getaways and relaxation",
      price: 399,
      originalPrice: 449,
      size: "50 m²",
      guests: 2,
      beds: 1,
      amenities: [FaWifi, FaTv, FaSnowflake, FaCoffee],
      features: ["Ocean View", "Private Balcony", "King Bed", "Luxury Bathroom"]
    },
    {
      id: 5,
      image: room5,
      title: "Family Suite",
      description: "Perfect for families with connecting rooms, kids' amenities, and entertainment options",
      price: 649,
      originalPrice: 749,
      size: "90 m²",
      guests: 5,
      beds: 3,
      amenities: [FaWifi, FaTv, FaSnowflake, FaCoffee, FaUtensils],
      features: ["Connecting Rooms", "Kids Area", "Family Entertainment", "Safety Features"]
    },
    {
      id: 6,
      image: room6,
      title: "Honeymoon Suite",
      description: "Romantic retreat with champagne service, flower arrangements, and special amenities",
      price: 799,
      originalPrice: 899,
      size: "85 m²",
      guests: 2,
      beds: 1,
      amenities: [FaWifi, FaTv, FaSnowflake, FaCoffee, FaShower],
      features: ["Romantic Decor", "Champagne Service", "Spa Bath", "Special Amenities"]
    }
  ];

  const handleWhatsAppBooking = (room) => {
    const phoneNumber = "1234567890";
    const message = `Hello! I'd like to book the ${room.title} for ${room.guests} guests. Price: $${room.price}/night.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const RoomModal = ({ room, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white/10 backdrop-blur-xl border border-blue-300/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            ×
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-full">
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-64 lg:h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"></div>
            </div>
            
            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">{room.title}</h3>
              <p className="text-gray-300 mb-6">{room.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-300">
                  <FaRuler className="mr-2 text-blue-400" />
                  <span>{room.size}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <FaUsers className="mr-2 text-blue-400" />
                  <span>{room.guests} Guests</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <FaBed className="mr-2 text-blue-400" />
                  <span>{room.beds} Bed{room.beds > 1 ? 's' : ''}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-3xl font-bold text-white">${room.price}</span>
                  <span className="text-gray-400 ml-2">/ night</span>
                  {room.originalPrice && (
                    <span className="line-through text-red-400 ml-2">${room.originalPrice}</span>
                  )}
                </div>
                <button
                  onClick={() => handleWhatsAppBooking(room)}
                  className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 rounded-xl text-white font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-30">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-blue-300/20 mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-300 font-medium text-sm uppercase tracking-wider">Luxury Accommodation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Our Rooms & Suites
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled comfort in our meticulously designed rooms, 
            where modern luxury meets timeless elegance
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-blue-300/20 overflow-hidden hover:border-blue-300/40 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 rounded-xl text-white font-bold">
                  ${room.price}
                  {room.originalPrice && (
                    <span className="text-sm font-normal line-through ml-1 opacity-75">${room.originalPrice}</span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {room.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {room.description}
                </p>

                {/* Room Details */}
                <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                  <div className="flex items-center">
                    <FaRuler className="mr-1" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="mr-1" />
                    <span>{room.guests} Guests</span>
                  </div>
                  <div className="flex items-center">
                    <FaBed className="mr-1" />
                    <span>{room.beds}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex items-center space-x-3 mb-4">
                  {room.amenities.map((AmenityIcon, index) => (
                    <AmenityIcon key={index} className="text-blue-400 w-4 h-4" />
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => setSelectedRoom(room)}
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white text-sm font-medium hover:bg-white/20 transition-colors"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleWhatsAppBooking(room)}
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white text-sm font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center gap-2"
                  >
                    <FaWhatsapp className="w-3 h-3" />
                    Book
                  </button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="group relative bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 rounded-2xl font-semibold text-white shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
              <span className="relative z-10">View All Room Types</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative border-2 border-green-400/30 bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl font-semibold text-white hover:border-green-400/60 transition-all duration-300 hover:scale-105 flex items-center gap-3">
              <FaWhatsapp className="w-5 h-5" />
              <span className="relative z-10">Quick Booking Assistance</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedRoom && (
        <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      )}

      {/* Glass Morphism Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Rooms;