import React from "react";
import { motion } from "framer-motion";

interface PortfolioItem {
  title: string;
  image: string;
  link: string;
}

const portfolioItems: PortfolioItem[] = [
  { title: "Pre-Wedding Memories", image: "images/2.jpg", link: "pre-wedding-album.php" },
  { title: "Wedding Candid", image: "images/3.jpg", link: "wedding-candids-album.php" },
  { title: "Maternity Shoot", image: "images/5.jpg", link: "maternity-shoots-album.php" },
  { title: "Engagement shoot", image: "images/1.jpg", link: "baby-shoots-album.php" },
  // { title: "Event Coverages", image: "images/new-images/5-album-event-coverages.webp", link: "event-coverages-album.php" },
  // { title: "Corporate Shoots", image: "images/new-images/6-album-corporate-shoots.webp", link: "corporate-shoots-album.php" },
];

// ✅ Duplicate items for seamless looping
const repeatedItems = [...portfolioItems, ...portfolioItems];

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-blue-50 to-blue-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif font-bold text-gray-800">Our Portfolio</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto my-4 rounded"></div>
          <p className="text-gray-600 text-lg">Great Portfolio</p>
        </motion.div>

        {/* ✅ Faster Auto-scrolling Carousel */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex space-x-6"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 15, // ⚡ Reduced from 30 → 15 (2x faster)
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {repeatedItems.map((item, index) => (
              <div
                key={index}
                className="relative min-w-[300px] sm:min-w-[400px] md:min-w-[450px] rounded-2xl overflow-hidden shadow-lg group"
              >
                <a href={item.link}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">{item.title}</span>
                  </div>
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
