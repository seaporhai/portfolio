import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="py-16 px-6 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-10"> Contact Me</h3>

            <motion.div
                className=" p-8 rounded-2xl shadow-xl max-w-5xl mx-auto backdrop-blur-lg  "
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Left Side - Contact Info */}
                    <div className="space-y-16 ">
                        <p className="text-lg  text-gray-800">
                            Feel free to reach out via   email, phone, or visit my location.
                        </p>

                        <div className="space-y-16">
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-gray-700 text-xl" />
                                <a href="mailto:seaporhai@gmail.com" className="text-lg text-gray-700 hover:text-gray-900 transition">
                                    seaporhai@gmail.com
                                </a>
                            </div>

                            <div className="flex items-center space-x-3">
                                <FaPhone className="text-gray-700 text-xl" />
                                <a href="tel:061983903" className="text-lg text-gray-700 hover:text-gray-900 transition">
                                    061983903
                                </a>
                            </div>
                            <div>

                                <div className="flex items-center space-x-3">
                                    <FaMapMarkerAlt className="text-gray-700 text-xl" />
                                    <p className="text-lg text-gray-700">
                                        #16A, Street 11, Phnom Penh, Cambodia
                                    </p>
                                </div>
                                <a
                                    href="https://maps.app.goo.gl/Xk5z7AaahjUQfH3A9"
                                    target="_blank"
                                    className="text-gray-900 font-semibold  flex justify-end md:justify-center hover:underline"
                                >
                                    Open Map →
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div>
                        <h1 className="text-2xl sm:text-sm lg:text-xl font-extrabold 
               bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800 
               text-center mb-6">
                            Have any comments? Drop them below!
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-[#BABABA] border-gray-500 border rounded-xl   transition placeholder-gray-900"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-[#BABABA] border-gray-500 border rounded-xl  transition placeholder-gray-900 "
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Write your message here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-[#BABABA] border-gray-500 border rounded-xl   transition placeholder-gray-900"
                                    rows={4}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 text-gray-300 font-semibold rounded-xl  
                                  bg-gradient-to-br from-gray-900 to-gray-800
                                 transition transform hover:scale-105 hover:shadow-lg hover:text-gray-500"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactForm;
