import React, { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const [bgIndex, setBgIndex] = useState(0);

  const bgImages = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  const handleViewGalleryClick = () => {
    document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative h-[100vh] flex flex-col items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {bgImages.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              i === bgIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Hero Text — visible on mobile & desktop, hidden on tablets */}
      <div className="relative z-10 px-4 md:hidden lg:block text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight animate-fade-in-down">
          {/* Capturing Timeless MomentsSnow Photography */}
        </h1>
        <p className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-8 animate-fade-in-up">
          Snow Photography
        </p>
        <button
          onClick={handleViewGalleryClick}
          className="font-sans bg-white text-gray-800 font-semibold py-3 px-8 sm:py-3 sm:px-10 rounded-full hover:bg-gray-200 transition duration-300 transform hover:scale-105 animate-fade-in-up"
        >
          View Gallery
        </button>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.5s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
