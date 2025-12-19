import React from 'react';
import AnimatedSection from './AnimatedSection';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* ✅ Reverse layout on desktop (content left, image right) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* 📝 Left: Text Content */}
          <AnimatedSection>
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                About Snow Photography
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We are a team of passionate storytellers who believe in the power of a single moment.
                Our photography style blends modern elegance with timeless romance, focusing on
                authentic emotions and candid interactions.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our mission is to create more than just beautiful photos — we aim to craft a visual
                legacy of your love story. Every wedding we capture is filled with artistry, care,
                and the emotion that makes it truly yours.
              </p>
              <p className="text-gray-600 leading-relaxed font-semibold">
                Let us tell your story.
              </p>
            </div>
          </AnimatedSection>

          {/* 🖼️ Right: Image */}
          <AnimatedSection>
            <div className="rounded-lg shadow-2xl overflow-hidden">
              <img
                src="/images/4.jpg"
                alt="Photographer in studio"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
