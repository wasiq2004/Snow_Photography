import React, { useState } from 'react';
import { VideoItem } from '../types';
import Modal from './Modal';
import AnimatedSection from './AnimatedSection';

const videos: VideoItem[] = [
  { id: 1, videoId: 'LXb3EKWsInQ', title: 'Romantic Wedding Film', thumbnail: '/images/videos/thumb-1.jpg' },
  { id: 2, videoId: 'dQw4w9WgXcQ', title: 'Emotional Highlights', thumbnail: '/images/videos/thumb-2.jpg' },
  { id: 3, videoId: '3Gcg_g6aIIc', title: 'Cinematic Love Story', thumbnail: '/images/videos/thumb-3.jpg' },
];

const VideoSection: React.FC = () => {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  return (
    <section id="videos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-center font-serif text-4xl md:text-5xl font-bold mb-4 text-gray-800">Wedding Films</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto my-4 rounded"></div>
          <p className="text-center text-lg text-gray-500 mb-16 max-w-3xl mx-auto">
            Relive the magic. Our films are crafted to be as timeless and beautiful as your love story.
          </p>
        </AnimatedSection>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video) => (
            <AnimatedSection key={video.id}>
              <div
                className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-2xl transform transition-all hover:scale-105"
                onClick={() => setSelectedVideoId(video.videoId)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-20">
                  <div className="bg-white/30 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white font-semibold text-xl">{video.title}</h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Modal for Playing Video */}
      <Modal isOpen={!!selectedVideoId} onClose={() => setSelectedVideoId(null)}>
        {selectedVideoId && (
          <div className="aspect-w-16 aspect-h-9 w-full">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              className="w-full h-full rounded-xl"
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default VideoSection;
