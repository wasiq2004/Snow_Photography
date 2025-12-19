import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, Users } from 'lucide-react'; // optional icons

const services = [
  {
    icon: <Heart className="w-10 h-10 text-blue-600" />,
    title: 'Engagement Photography',
    description:
      "Celebrate your engagement with a relaxed and fun photo session — the perfect way to begin your Happy journey.",
  },
  {
    icon: <Camera className="w-10 h-10 text-blue-600" />,
    title: 'Wedding Photography',
    description:
      "Whether it’s an intimate ceremony or a grand celebration, we capture each precious moment with artistry and love.",
  },
  {
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: 'Event Photography',
    description:
      "From birthdays to corporate events, we bring energy and creativity to every frame to preserve your special memories.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    // 🟢 Animation applied here
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gray-50 text-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold mb-12 text-gray-800">

          Our  Services
          <div className="w-20 h-1 bg-blue-500 mx-auto my-4 rounded"></div>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            // 🟢 Animate each card slightly delayed
            <motion.div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
