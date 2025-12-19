import React, { useState, useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  // { name: 'Videos', href: '#videos' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' }, // ✅ Added this so menu scrolls to contact too
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/40 backdrop-blur-xl shadow-lg text-gray-900'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* LOGO */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center space-x-4 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={isScrolled ? '/images/blk snow logo.png' : '/images/snow logo.png'}
              alt="Snow Photography Logo"
              className="w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-lg transition-all duration-500"
            />
            <span
              className={`font-serif text-2xl md:text-3xl font-bold tracking-wide transition-colors duration-500 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Snow Photography
            </span>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                  isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-300'
                }`}
              >
                {link.name}
              </a>
            ))}
            {/* ✅ Visit Now goes to Contact Section */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className={`px-6 py-2 rounded-full border-2 font-semibold uppercase text-sm tracking-wider transition-all ${
                isScrolled
                  ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-gray-900'
              }`}
            >
              Visit Now
            </a>
          </nav>

          {/* TABLET + MOBILE SECTION */}
          <div className="flex items-center space-x-4 lg:hidden">
            <a
              href="https://www.instagram.com/snow_photography___/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-transform hover:scale-110 ${
                isScrolled ? 'text-blue-600 hover:text-blue-700' : 'text-blue-400 hover:text-blue-500'
              }`}
            >
              <FaInstagram size={26} />
            </a>

            {/* Menu Button */}
            <button
              className={`p-2 rounded-md focus:outline-none focus:ring-2 ${
                isScrolled
                  ? 'text-gray-900 hover:text-blue-600 focus:ring-blue-600'
                  : 'text-white hover:text-blue-300 focus:ring-white'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed top-20 left-0 w-full shadow-md transform transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0 pointer-events-none'
        } ${isScrolled ? 'bg-white/70 backdrop-blur-lg text-gray-900' : 'bg-black/90 text-white'}`}
      >
        <nav className="flex flex-col items-center space-y-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-base font-medium hover:text-blue-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          {/* ✅ Mobile Visit Now → Contact section */}
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className={`px-5 py-2 mt-2 border-2 rounded-full font-semibold uppercase text-sm tracking-wider transition-all ${
              isScrolled
                ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-gray-900'
            }`}
          >
            Visit Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
