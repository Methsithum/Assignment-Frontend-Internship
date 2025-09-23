import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    checkIn: '',
    checkOut: '',
    roomType: ''
  });
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/Rooms', label: 'Rooms' },
  ];

  const roomTypes = [
    'Standard Room',
    'Deluxe Room', 
    'Suite',
    'Executive Suite',
    'Presidential Suite'
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    const message = `Hello! I would like to make a booking:
    
Name: ${bookingData.name}
Check-in: ${bookingData.checkIn}
Check-out: ${bookingData.checkOut}
Room Type: ${bookingData.roomType}

Please confirm availability. Thank you!`;

    const phoneNumber = "+94761087745"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    setIsBookingModalOpen(false);
    setBookingData({ name: '', checkIn: '', checkOut: '', roomType: '' });
  };

  const handleInputChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
        {/* Main Navbar Container */}
        <div className="bg-white/10 backdrop-blur-xl border border-blue-300/20 rounded-2xl shadow-2xl shadow-green-500/10">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between p-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">LH</span>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-blue-400 bg-white/5'
                      : 'text-gray-300 hover:text-blue-300 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Buttons Container */}
            <div className="flex items-center space-x-3">
              {/* WhatsApp Booking Button */}
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="group relative px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl border border-green-300/30 text-white font-medium transition-all duration-300 hover:scale-105 flex items-center gap-3 shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
              >
                <FaWhatsapp className="w-4 h-4" />
                Book via WhatsApp
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 animate-pulse"></div>
              </button>

              {/* Login button */}
              <button className="px-6 py-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl border border-blue-300/10 text-white font-medium hover:from-blue-400/30 hover:to-blue-600/30 transition-all duration-200 flex items-center gap-3">
                <FiUser className="w-4 h-4" />
                Login
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4">
              {/* Logo */}
              <Link to="/" className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">H</span>
              </Link>

              {/* Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-white/5 border border-blue-300/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-4 h-0.5 bg-blue-400 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
                  <span className={`block w-4 h-0.5 bg-blue-400 transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`block w-4 h-0.5 bg-blue-400 transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
                </div>
              </button>
            </div>

            {/* Mobile Menu */}
            <div className={`px-4 pb-4 transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <div className="bg-white/5 rounded-xl border border-blue-300/10 p-2 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      location.pathname === item.path
                        ? 'text-blue-400 bg-white/5'
                        : 'text-gray-300 hover:text-blue-300 hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* WhatsApp Button for Mobile */}
                <button 
                  onClick={() => {
                    setIsBookingModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full mt-2 group relative px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg border border-green-300/30 text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-lg shadow-green-500/25"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  Book via WhatsApp
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 animate-pulse"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Background Glow Effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 to-blue-600/10 blur-2xl rounded-2xl opacity-50"></div>
      </nav>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white/10 backdrop-blur-xl border border-blue-300/20 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Book via WhatsApp</h3>
            
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={bookingData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-blue-300/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Check-in</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={bookingData.checkIn}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-blue-300/20 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Check-out</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={bookingData.checkOut}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-blue-300/20 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Room Type</label>
                <select
                  name="roomType"
                  value={bookingData.roomType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-blue-300/20 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors"
                >
                  <option value="">Select room type</option>
                  {roomTypes.map((type) => (
                    <option key={type} value={type} className="text-gray-800">{type}</option>
                  ))}
                </select>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(false)}
                  className="flex-1 px-4 py-3 border border-gray-300/20 text-gray-300 rounded-xl hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  Open WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;