import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-black text-soft-silver py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Brand logo + name */}
        <div className="flex justify-center items-center mb-4 space-x-3">
          <img
            src="/images/snow logo.png"
            alt="Snow Photography Logo"
            className="w-10 h-10 rounded-full object-cover shadow-md"
          />
          <p className="font-serif text-2xl">Snow Photography</p>
        </div>

        {/* Social / contact icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
  href="https://www.instagram.com/snow_photography___/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition-colors"
>
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
  </svg>
</a>

          {/* Email */}
          <a
            href="mailto:snowphotography01@gmail.com"
            className="hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 
                2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 
                2-2zm0 2v.01L12 13l8-6.99V6H4zm0 
                12h16V8l-8 7-8-7v10z"
              ></path>
            </svg>
          </a>

          {/* Phone */}
          <a href="tel:+919025658029" className="hover:text-white transition-colors">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 
                1 0 011.05-.24 11.36 11.36 0 003.56.57 1 1 0 
                011 1v3.61a1 1 0 01-1 1A17.94 17.94 0 
                014 5a1 1 0 011-1h3.61a1 1 0 
                011 1 11.36 11.36 0 00.57 3.56 1 
                1 0 01-.24 1.05l-2.32 2.18z"
              ></path>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; {currentYear} Snow Photography. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
