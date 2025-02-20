"use client";
import React from "react";
import { MapPin } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const timelineItems = [
    {
      period: "2022-Present",
      title: "Royal University Of Phnom Penh | Bachelor's Degree",
      location: "Toul Kork, Phnom Penh, Cambodia",
      side: "left",
    },
    {
      period: "2023 - 2024",
      title: "Full Stack Web Development at SabaiCode",
      location: "Chrouy Changvar, Phnom Penh, Cambodia.",
      side: "right",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section ref={ref} className="py-16  shadow-lg mb-3 ">
      {/* Header Section */}
      <motion.div
        className="text-center mb-16 w-5xl  p-6 w-full bg-gradient-to-r from-gray-800 to-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white mb-4 ">
          Education 
        </h2>
        <p className="text-lg text-white leading-relaxed text-center max-w-2xl mx-auto mb-3">
          I want to take all my knowledge that I have learned into practice
          and activate my skills for more Experience and Knowledge.
        </p>
      </motion.div>


      <div className="max-w-5xl mx-auto px-6 ">
        {/* Timeline Section */}
        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-black  -translate-x-1/2 md:block hidden"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          {/* Timeline Items */}
          <motion.div
            className="space-y-12 flex flex-col items-center md:block"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex w-full ${item.side === "right" ? "md:justify-start" : "md:justify-end"
                  }`}
                variants={itemVariants}
              >
                <div
                  className={`w-full md:w-5/12 ${item.side === "right"
                    ? "md:ml-auto md:pl-8"
                    : "md:mr-auto md:pr-8"
                    } relative`}
                >
                  <motion.div
                    className="relative p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"

                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="text-sm font-medium text-white mb-2">
                      {item.period}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-300 mb-2">
                      {item.title}
                    </h3>
                    <div className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-lg font-medium shadow-sm"
                    >
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
