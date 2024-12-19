"use client"
import React from 'react';
import { MapPin } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const timelineItems = [
    {
      period: "2022-Present",
      title: "Royal University Of Phnom Penh | Bachelor's Degree",
      location: "Toul Kork, Phnom Penh, Cambodia",
      side: "left"
    },
    {
      period: "2023 - 2024",
      title: "Full Stack Web Development at SabaiCode",
      location: "Chrouy Changvar, Phnom Penh, Cambodia.",
      side: "right"
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section ref={ref} className="py-16 bg-gray-500">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Education & Experience
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
         I want to take all my knowledge that I have learnt into practice and active my skill for more Experience and Knowledge
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Animated timeline line */}
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          
          {/* Timeline Items */}
          <motion.div 
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {timelineItems.map((item, index) => (
              <motion.div 
                key={index} 
                className={`relative flex ${item.side === 'right' ? 'justify-start' : 'justify-end'}`}
                variants={itemVariants}
              >
                <div className={`w-5/12 ${item.side === 'right' ? 'ml-auto pl-8' : 'mr-auto pr-8'} relative`}>
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 cursor-pointer"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="text-sm font-medium text-blue-600 mb-2">
                      {item.period}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {item.location}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;