import React, { useState } from 'react';
import { GalleryImage, GalleryCategory } from '../types';
import Modal from './Modal';
import AnimatedSection from './AnimatedSection';

const images: GalleryImage[] = [
  // Wedding Photos
  { id: 1, src: '/images/1.jpg', alt: 'Wedding moment 1', category: 'Wedding Photos' },
  { id: 2, src: '/images/2.jpg', alt: 'Wedding moment 2', category: 'Wedding Photos' },
  { id: 3, src: '/images/3.jpg', alt: 'Wedding moment 3', category: 'Wedding Photos' },
  { id: 4, src: '/images/4.jpg', alt: 'Wedding moment 4', category: 'Wedding Photos' },
  { id: 5, src: '/images/5.jpg', alt: 'Wedding moment 5', category: 'Wedding Photos' },
  { id: 6, src: '/images/6.jpg', alt: 'Wedding moment 6', category: 'Wedding Photos' },

  // Couple Portraits
  { id: 4, src: '/images/gallery/couple-1.jpg', alt: 'Couple portrait 1', category: 'Couple Portraits' },
  { id: 5, src: '/images/gallery/couple-2.jpg', alt: 'Couple portrait 2', category: 'Couple Portraits' },
  { id: 6, src: '/images/gallery/couple-3.jpg', alt: 'Couple portrait 3', category: 'Couple Portraits' },

  // Candid Moments
  { id: 7, src: '/images/gallery/candid-1.webp', alt: 'Candid moment 1', category: 'Candid Moments' },
  { id: 8, src: '/images/gallery/candid-2.jpg', alt: 'Candid moment 2', category: 'Candid Moments' },
  { id: 9, src: '/images/gallery/candid-3.jpeg', alt: 'Candid moment 3', category: 'Candid Moments' },

  
];

const categories: GalleryCategory[] = [
  // 'Gallery Images Categories',
  // 'Couple Portraits',
  // 'Candid Moments',
  // 'Baby shoot',
];

const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('Wedding Photos');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = images.filter((image) => image.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-center font-serif text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our Gallery</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto my-4 rounded"></div>
          <p className="text-center text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Explore the cherished memories we've had the honor of capturing. Each photo tells a unique story of love, laughter, and life.
          </p>
        </AnimatedSection>
        
        <AnimatedSection className="flex justify-center mb-12 flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </AnimatedSection>

        <div className="columns-2 md:columns-3 gap-4">
          {filteredImages.map((image) => (
            <AnimatedSection key={image.id} className="mb-4 break-inside-avoid">
              <div
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-h-[90vh] w-auto mx-auto rounded-lg"
          />
        )}
      </Modal>
    </section>
  );
};

export default GallerySection;
