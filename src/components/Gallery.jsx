import React, { useState } from 'react';
import { FaExpand, FaTimes, FaChevronLeft, FaChevronRight, FaInstagram, FaHeart, FaDownload } from 'react-icons/fa';

// Import your gallery images (update paths to your actual images)
import gallery1 from '../assets/gallery/g4.jpeg';
import gallery2 from '../assets/gallery/g7.jpeg';
import gallery3 from '../assets/gallery/g1.jpg';
import gallery4 from '../assets/gallery/g5.jpeg';
import gallery5 from '../assets/r1.jpg';
import gallery6 from '../assets/gallery/g6.jpg';
import gallery7 from '../assets/gallery/g2.jpg';
import gallery8 from '../assets/gallery/g3.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const galleryImages = [
    {
      id: 1,
      image: gallery1,
      category: 'rooms',
      title: 'Luxury Suite Interior',
      description: 'Elegant suite with panoramic city views'
    },
    {
      id: 2,
      image: gallery2,
      category: 'amenities',
      title: 'Infinity Pool',
      description: 'Stunning infinity pool overlooking the city'
    },
    {
      id: 3,
      image: gallery3,
      category: 'dining',
      title: 'Gourmet Restaurant',
      description: 'Fine dining experience with world-class cuisine'
    },
    {
      id: 4,
      image: gallery4,
      category: 'spa',
      title: 'Luxury Spa',
      description: 'Tranquil wellness and relaxation center'
    },
    {
      id: 5,
      image: gallery5,
      category: 'rooms',
      title: 'Executive Room',
      description: 'Modern design with premium amenities'
    },
    {
      id: 6,
      image: gallery6,
      category: 'views',
      title: 'City Skyline',
      description: 'Breathtaking views from our rooftop'
    },
    {
      id: 7,
      image: gallery7,
      category: 'amenities',
      title: 'Fitness Center',
      description: 'State-of-the-art fitness facilities'
    },
    {
      id: 8,
      image: gallery8,
      category: 'events',
      title: 'Wedding Venue',
      description: 'Elegant space for special occasions'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Photos', count: galleryImages.length },
    { key: 'rooms', label: 'Rooms & Suites', count: galleryImages.filter(img => img.category === 'rooms').length },
    { key: 'amenities', label: 'Amenities', count: galleryImages.filter(img => img.category === 'amenities').length },
    { key: 'dining', label: 'Dining', count: galleryImages.filter(img => img.category === 'dining').length },
    { key: 'spa', label: 'Spa & Wellness', count: galleryImages.filter(img => img.category === 'spa').length },
    { key: 'views', label: 'Views', count: galleryImages.filter(img => img.category === 'views').length },
    { key: 'events', label: 'Events', count: galleryImages.filter(img => img.category === 'events').length }
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const currentIndex = selectedImage 
    ? filteredImages.findIndex(img => img.id === selectedImage.id)
    : -1;

  const nextImage = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  const downloadImage = (imageUrl, imageTitle) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `luxury-hotel-${imageTitle.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-30">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-blue-300/20 mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-300 font-medium text-sm uppercase tracking-wider">Visual Journey</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
            Our Gallery
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the beauty of our luxury hotel through stunning visuals 
            that capture the essence of exceptional hospitality
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                filter === category.key
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category.label} 
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-blue-300/20 overflow-hidden hover:border-cyan-300/40 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaExpand className="text-white text-sm" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 rounded-full text-white text-xs font-medium capitalize">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-blue-300/20">
            <FaInstagram className="text-pink-400 text-2xl mr-4" />
            <div className="text-left">
              <h3 className="text-white font-bold">Follow Our Journey</h3>
              <p className="text-gray-300 text-sm">@luxuryhotel on Instagram</p>
            </div>
            <button className="ml-6 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl text-white font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-300">
              Follow
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="relative max-w-6xl w-full max-h-[90vh]">
            {/* Navigation Arrows */}
            {currentIndex > 0 && (
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <FaChevronLeft />
              </button>
            )}
            
            {currentIndex < filteredImages.length - 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <FaChevronRight />
              </button>
            )}

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <FaTimes />
            </button>

            {/* Download Button */}
            <button
              onClick={() => downloadImage(selectedImage.image, selectedImage.title)}
              className="absolute top-4 left-4 z-10 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <FaDownload />
            </button>

            {/* Image */}
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-2xl"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-2xl">
              <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm">
                  {selectedImage.category}
                </span>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <FaHeart className="mr-2" />
                    Like
                  </button>
                  <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <FaDownload className="mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
              <span className="px-4 py-2 bg-black/50 rounded-full text-white text-sm">
                {currentIndex + 1} / {filteredImages.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Glass Morphism Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Gallery;