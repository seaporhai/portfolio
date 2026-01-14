"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { div } from "framer-motion/client";

const AboutMe = () => {
  return (
    <div className="">
      <section id="about" className="py-10 px-6 max-w-[900px] mx-auto ">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-800 p-10 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Profile Image - Left Side */}
          <div className="flex justify-center">
            <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/image/mypic1.JPG"
                alt="Sea Porhaii"
                layout="fill"
                objectFit="contain"
                className="hover:scale-105 transition duration-300"
              />
            </div>
          </div>

          {/* About Me - Right Side */}
          <div className="flex flex-col justify-start  text-white ">
            <h2 className="text-4xl font-extrabold mb-4">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I’m a{" "}
              <span className="text-white font-semibold">
                Full Stack Developer
              </span>{" "}
              skilled in
              <span className="text-white font-semibold">
                {" "}
                React, Next.js, Node.js, SQL/NoSQL
              </span>
              , and cloud technologies. Passionate about creating{" "}
              <span className="text-white font-semibold">
                scalable applications
              </span>{" "}
              with modern UI/UX and smooth backend integration.
            </p>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-3 mt-4">
              {[
                "UI/UX",
                "React",
                "Next.js",
                "Node.js",
                "SQL",
                "NoSQL",
                "RESTFull API",
                "Docker",
                "Mongo DB",
                "Express.js",
                "Nest.js",
                "FireBase",
                "AWS",
                "Prisma",
                "Sequelize",
                "Nginx",
                "JWT",
                "Bucket",
                "Jira",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm font-semibold bg-gray-700 text-white rounded-lg shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Personal Info - Below Both Sections */}
        <div className="flex justify-center w-full mt-10">
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg w-full sm:max-w-full md:w-3/4 lg:w-2/3 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Personal Info
            </h3>

            <div className="grid grid-cols-1 gap-3 text-gray-300  ">
              {[
                { label: "Name", value: "Sea Porhai" },
                { label: "Email", value: "seaporhai@gmail.com" },
                { label: "Location", value: "Phnom Penh, Cambodia" },
                { label: "Phone", value: "061 983 903" },
                { label: "Date of Birth", value: "09 / 12 / 2004" },
              ].map((info, index) => (
                <p
                  key={index}
                  className="flex justify-between bg-gray-700 px-3 py-2 rounded-md text-[12px] md:text-lg "
                >
                  <strong className="text-white">{info.label}:</strong>
                  <span>{info.value}</span>
                </p>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: "GitHub", link: "https://github.com/seaporhai" },
                {
                  name: "LinkedIn",
                  link: "https://www.linkedin.com/in/sea-porhai-208061309/",
                },
                {
                  name: "View CV",
                  link: "https://drive.google.com/file/d/1Kp_Zf81D9mrUhpqjlFImMJ-L3SZHsAm0/view?usp=sharing",
                },
                { name: "Facebook", link: "https://www.facebook.com/por.hai" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="w-full px-4 py-2 sm:px-6 sm:py-3 border border-gray-600 bg-gray-700 text-gray-300 rounded-md text-xs sm:text-sm md:text-base
            transition duration-300 ease-in-out transform hover:bg-gray-600 hover:text-white hover:scale-105 shadow-md text-nowrap"
                  >
                    {item.name}
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
