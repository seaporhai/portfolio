"use client";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    names: "",
    emails: "",
    messages: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(`Updating ${name}:`, value); // ✅ Debugging Log
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // ✅ Dynamically updates the correct field
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Data before submission:", formData);
    const serviceID = "service_82nfqpj"; // Replace with your actual Service ID
    const templateID = "template_24hrppd"; // Replace with your actual Template ID
    const userID = "1Qsc40xA7zfUtqtAP"; // Replace with your actual Public Key

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: formData.names,
          reply_to: formData.emails,
          message: formData.messages,
          to_name: "Seaporhai", // Your name (Recipient)
        },
        userID
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Message sent!");
        setFormData({ names: "", emails: "", messages: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <div>
      <div className="text-center mb-0 w-5xl  p-6 w-full bg-gradient-to-r from-gray-800 to-gray-900">
        <h1 className="text-3xl font-bold text-white  mb-4 ">Contacts Me</h1>
        <h1 className="text-lg text-white leading-relaxed text-center max-w-2xl mx-auto mb-3 ">
          Feel free to reach out if you'd like to collaborate, have any
          questions, or just want to chat about tech!
        </h1>
      </div>
      <div className="py-16 px-6 max-w-6xl mx-auto">
        <motion.div
          className=" p-8 rounded-2xl shadow-xl max-w-5xl mx-auto backdrop-blur-lg  "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <div className="space-y-16 flex items-center ">
              <div className="space-y-16">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-gray-700 text-xl" />
                  <a
                    href="mailto:seaporhai@gmail.com"
                    className="text-lg text-gray-700 hover:text-gray-900 transition"
                  >
                    seaporhai@gmail.com
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <FaPhone className="text-gray-700 text-xl" />
                  <a
                    href="tel:061983903"
                    className="text-lg text-gray-700 hover:text-gray-900 transition"
                  >
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
              <h1
                className="text-md  font-extrabold 
               bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800 
               text-center mb-6"
              >
                Have any comments? Drop them below!
              </h1>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="names"
                    name="names"
                    placeholder="Enter your name"
                    value={formData.names}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-[#BABABA] border-gray-500 border rounded-xl   transition placeholder-gray-900"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="emails"
                    name="emails"
                    placeholder="example@gmail.com"
                    value={formData.emails}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-[#BABABA] border-gray-500 border rounded-xl  transition placeholder-gray-900 "
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="messages"
                    name="messages"
                    placeholder="Write your message here..."
                    value={formData.messages}
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
    </div>
  );
};

export default ContactForm;
