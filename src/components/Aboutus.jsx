import React from 'react';
import { 
  FaAward, 
  FaHeart, 
  FaUsers, 
  FaStar,
  FaCheckCircle,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaUmbrellaBeach,
  FaSpa,
  FaUtensils,
  FaClock
} from 'react-icons/fa';

// Import your hero image (update the path to your actual image)
import heroImage from '../assets/5.jpeg';

const AboutUs = () => {
  const stats = [
    { icon: FaAward, number: '25+', label: 'Years Experience', color: 'text-yellow-500' },
    { icon: FaHeart, number: '10K+', label: 'Happy Guests', color: 'text-red-400' },
    { icon: FaUsers, number: '50+', label: 'Team Members', color: 'text-blue-400' },
    { icon: FaStar, number: '4.9', label: 'Guest Rating', color: 'text-green-400' }
  ];

  const values = [
    {
      title: "Luxury Redefined",
      description: "We believe true luxury lies in the details - from personalized service to exquisite design.",
      icon: "✨",
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50"
    },
    {
      title: "Sustainable Excellence",
      description: "Committed to eco-friendly practices while maintaining the highest standards of hospitality.",
      icon: "🌱",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50"
    },
    {
      title: "Innovation Driven",
      description: "Constantly evolving to provide cutting-edge amenities and unforgettable experiences.",
      icon: "🚀",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50"
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      position: "General Manager",
      icon: FaBuilding,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      description: "20+ years in luxury hospitality"
    },
    {
      name: "Marcus Rodriguez",
      position: "Head Chef",
      icon: FaUtensils,
      color: "text-red-600",
      bgColor: "bg-red-100",
      description: "Michelin-star trained culinary expert"
    },
    {
      name: "Emily Watson",
      position: "Wellness Director",
      icon: FaSpa,
      color: "text-green-600",
      bgColor: "bg-green-100",
      description: "Holistic wellness specialist"
    }
  ];

  const features = [
    {
      icon: FaUmbrellaBeach,
      title: "Beachfront Location",
      description: "Private beach access with exclusive amenities",
      color: "text-blue-600"
    },
    {
      icon: FaSpa,
      title: "Luxury Spa",
      description: "Award-winning wellness and relaxation treatments",
      color: "text-pink-600"
    },
    {
      icon: FaUtensils,
      title: "Gourmet Dining",
      description: "Multiple restaurants with world-class cuisine",
      color: "text-amber-600"
    }
  ];

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      label: "Address",
      value: "Matara, Sri Lanka",
      color: "text-red-500"
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+971 4 123 4567",
      color: "text-green-500"
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "info@luxuryhotel.com",
      color: "text-blue-500"
    },
    {
      icon: FaClock,
      label: "Reception Hours",
      value: "24/7",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-gray-100">
      {/* Hero Section with Image */}
      <section className="relative h-130  overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-purple-900/40"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Where timeless elegance meets modern luxury in every detail
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-transform duration-300">
                <contact.icon className={`text-3xl mx-auto mb-3 ${contact.color}`} />
                <h3 className="font-semibold text-blue-100 mb-2">{contact.label}</h3>
                <p className="text-white font-medium">{contact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
                <FaAward className="mr-2" />
                <span className="font-semibold">Since 2010</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story of Excellence
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to redefine luxury hospitality, our hotel has been a beacon of elegance 
                and exceptional service for over a decade. We combine rich heritage with contemporary 
                sophistication to create unforgettable experiences.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every corner of our property tells a story of craftsmanship, attention to detail, and 
                unwavering commitment to guest satisfaction. From our architecturally stunning spaces 
                to our world-class amenities, we strive to exceed expectations at every turn.
              </p>

              <div className="space-y-3">
                {['24/7 Concierge Service', 'Sustainable Practices', 'Award-Winning Cuisine', 'Luxury Spa Facilities'].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Hotel Illustration using CSS */}
              <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <FaBuilding className="text-8xl text-blue-600 mb-4 mx-auto" />
                  <div className="text-2xl font-bold text-gray-700">Luxury Hotel</div>
                  <div className="text-gray-600">Est. 2010</div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-2xl transform rotate-12 opacity-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className={`text-4xl mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Exceptional Amenities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class facilities designed for your comfort and enjoyment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <feature.icon className={`text-5xl mx-auto mb-4 ${feature.color}`} />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that shape every aspect of your experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`group text-center p-8 rounded-2xl ${value.bgColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105`}>
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to your exceptional experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${member.bgColor} mx-auto mb-4`}>
                  <member.icon className={`text-3xl ${member.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-semibold mb-3">{member.position}</div>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <FaQuoteLeft className="text-4xl text-blue-500 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-light text-gray-800 italic mb-6">
            "An extraordinary blend of modern luxury and timeless elegance. Every moment felt curated 
            with exceptional attention to detail and genuine care."
          </blockquote>
          <div className="text-lg font-semibold text-gray-900">— The Luxury Traveler Magazine</div>
          <div className="text-blue-500 mt-2 font-medium">Rated "Best Luxury Hotel 2024"</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Our Legacy
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join us for an unforgettable stay where every detail matters
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
              Join With Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white/10 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;