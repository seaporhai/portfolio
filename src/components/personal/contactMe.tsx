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
          Please feel free to reach out with any questions, and I will gladly
          reply.
        </h1>
      </div>
      <div className="py-16 px-6 max-w-6xl mx-auto">
        <motion.div
          className=" p-8 rounded-2xl shadow-xl max-w-5xl mx-auto backdrop-blur-lg  "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className=" ">
            <div className="flex justify-center p-8 ">
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
