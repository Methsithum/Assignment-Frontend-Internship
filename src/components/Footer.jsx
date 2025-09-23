import React from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp,
  FaInstagram, 
  FaFacebook, 
  FaTwitter, 
  FaYoutube,
  FaClock,
  FaWifi,
  FaLock
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' }
  ];

  const services = [
    '24/7 Service',
    'Spa & Wellness',
    'Fine Dining',
    'Conference',
    'Airport Transfer'
  ];

  const paymentMethods = ['Visa', 'MasterCard', 'Amex', 'PayPal'];

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      label: 'Address',
      value: '123 Luxury Ave, Dubai, UAE',
      link: '#'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+971 4 123 4567',
      link: 'tel:+97141234567'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'info@luxuryhotel.com',
      link: 'mailto:info@luxuryhotel.com'
    }
  ];

  const socialLinks = [
    { icon: FaInstagram, url: '#', color: 'hover:text-pink-400' },
    { icon: FaFacebook, url: '#', color: 'hover:text-blue-400' },
    { icon: FaTwitter, url: '#', color: 'hover:text-cyan-400' },
    { icon: FaYoutube, url: '#', color: 'hover:text-red-400' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-black via-black to-blue-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg mb-3">
                <span className="text-white font-bold text-xl">LH</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Luxury Hotel</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Experience unparalleled luxury and exceptional service.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center text-green-400 text-xs">
                <FaLock className="mr-1" />
                <span>Secure</span>
              </div>
              <div className="flex items-center text-blue-400 text-xs">
                <FaWifi className="mr-1" />
                <span>Free WiFi</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold text-white mb-3 border-l-2 border-blue-500 pl-2">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-md font-semibold text-white mb-3 border-l-2 border-green-500 pl-2">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="flex items-center text-gray-400 text-sm">
                  <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-md font-semibold text-white mb-3 border-l-2 border-cyan-500 pl-2">Contact</h4>
            <div className="space-y-2">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  className="flex items-start text-gray-400 hover:text-white transition-colors duration-200 text-sm group"
                >
                  <contact.icon className="w-4 h-4 mt-0.5 mr-2 text-blue-400" />
                  <div>
                    <div className="font-medium text-white">{contact.label}</div>
                    <div className="text-xs">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-4">
              <div className="flex space-x-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 border border-white/10 ${social.color} hover:border-white/20 transition-all duration-200 text-xs`}
                  >
                    <social.icon className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-4"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          {/* Payment Methods */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-xs">We accept:</span>
            <div className="flex items-center space-x-1">
              {paymentMethods.map((method, index) => (
                <div key={index} className="px-2 py-0.5 bg-white/5 rounded text-gray-300 text-xs border border-white/5">
                  {method}
                </div>
              ))}
            </div>
          </div>

          {/* Operating Hours */}
          <div className="flex items-center text-gray-400 text-xs">
            <FaClock className="mr-1 text-green-400" />
            <span>24/7 Reception</span>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-xs">
            © {currentYear} Luxury Hotel. All rights reserved.
          </div>
        </div>

        {/* Additional Info */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 pt-4 border-t border-white/5 text-xs text-gray-500 space-y-1 sm:space-y-0">
          <div className="flex space-x-3">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookies</a>
          </div>
          <div className="text-xs">
            Designed for exceptional experiences
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 z-40">
        <a
          href="https://wa.me/+94761087745"
          className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-200 hover:scale-105 group"
        >
          <FaWhatsapp className="text-white text-lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;