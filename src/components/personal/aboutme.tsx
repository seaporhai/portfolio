"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "./message";
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add API integration for form submission
    };

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

                        src="/image/mypic2.jpg" // Replace with your actual image URL
                        alt="Sea Porhai"
                        layout="fixed"
                        width={600} // Provide fixed width
                        height={300} // Provide fixed height
                        objectFit="cover"
                    />
                </div>

                {/* About Me Info */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
                    <p className="text-muted-foreground text-lg">
                        As a Full Stack Developer with experience in
                        React, Next.js, Node.js, database management (SQL, NoSQL) and cloud technologies. I love building
                        efficient and scalable web applications. I developed end-to-end
                        applications with RESTful APIs, honed front-end and back-end integration skills, and collaborated
                        effectively using Git.
                    </p>
                    <div className="mt-4 flex justify-center md:justify-start space-x-4">
                        <a
                            href="https://github.com/seaporhai"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="px-4 py-2 border-2 border-white bg-blue-500 text-white hover:text-blue-500 hover:border-blue-500 hover:border-2 hover:bg-white rounded-lg">
                                Git Hub
                            </button>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sea-porhai-208061309/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="px-4 py-2 border-2 border-white bg-blue-500 text-white hover:text-blue-500 hover:border-blue-500 hover:border-2 hover:bg-white rounded-lg">
                                Linked In
                            </button>
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1UKSllNDKBmVokNBaMNBhPH4SEFb4YYMR/view?usp=drive_link/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="px-4 py-2 border-2 border-white bg-blue-500 text-white hover:text-blue-500 hover:border-blue-500 hover:border-2 hover:bg-white rounded-lg">
                                My CV
                            </button>
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Contact Form */}
            <ContactForm></ContactForm>
        </section>
    );
};

export default AboutMe;
