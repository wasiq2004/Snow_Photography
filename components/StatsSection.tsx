import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "10", label: "Locations" },
  { value: "1000+", label: "Weddings" },
  { value: "+100", label: "Employees" },
  { value: "1", label: "Dream" },
];

const StatsSection: React.FC = () => {
  return (
    <motion.section
      id="stats"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-white text-center"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h2 className="text-5xl font-light text-gray-800">{stat.value}</h2>
            <p className="mt-2 text-lg font-serif text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default StatsSection;
