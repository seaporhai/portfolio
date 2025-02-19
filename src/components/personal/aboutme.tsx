"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const AboutMe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const images = [
        "/image/mypic1.jpg", // Replace with actual image paths
        "/image/mypic2.jpg",
        "/image/mypic5.jpg",
    ];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="py-16 px-6 max-w-6xl mx-auto my-10">
            <motion.div
                className="flex flex-col md:flex-row items-center gap-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Profile Image */}
                <div className="w-full md:w-1/2 relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={images[currentImage]} // Replace with your actual image URL
                        alt="Sea Porhai"
                        layout="fixed"
                        width={600} // Provide fixed width
                        height={300} // Provide fixed height
                        objectFit="cover"
                        className="transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* About Me Info */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
                    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
                        <p className="text-lg text-gray-600 leading-relaxed text-justify">
                            As a Full Stack Developer with experience in
                            React, Next.js, Node.js, database management (SQL, NoSQL), and cloud technologies, I love building
                            efficient and scalable web applications. I developed end-to-end
                            applications with RESTful APIs, honed front-end and back-end integration skills, and collaborated
                            effectively using Git.
                        </p>
                    </div>

                    <div className="mt-4 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                            href="https://github.com/seaporhai"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="w-full sm:w-auto px-6 py-3 border-2 border-white bg-blue-500 text-white hover:text-blue-500 hover:border-blue-500 hover:bg-white rounded-md sm:text-sm md:text-base whitespace-nowrap">
                                Git Hub
                            </button>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sea-porhai-208061309/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="w-full sm:w-auto px-6 py-3 border-2 border-white bg-blue-500 text-white hover:text-blue-500 hover:border-blue-500 hover:bg-white rounded-md sm:text-sm md:text-base whitespace-nowrap">
                                Linked In
                            </button>
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1UKSllNDKBmVokNBaMNBhPH4SEFb4YYMR/view?usp=drive_link/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="w-full sm:w-auto px-6 py-3 border-2 border-white bg-blue-500 text-white hover:text-blue-500 hover:border-blue-500 hover:bg-white rounded-md sm:text-sm md:text-base whitespace-nowrap">
                                My CV
                            </button>
                        </a>
                    </div>

                </div>
            </motion.div>



        </section>
    );
};

export default AboutMe;
