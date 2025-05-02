import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: React.ReactNode;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold inline-block">
        {children}
      </h2>
      <div className={`mt-2 h-1 w-20 bg-sky-400 ${centered ? 'mx-auto' : ''}`}></div>
    </motion.div>
  );
};

export default SectionTitle;