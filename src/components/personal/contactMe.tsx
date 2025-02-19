import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Replace these with your actual EmailJS credentials
        const serviceID = "service_82nfqpj";
        const templateID = "template_24hrppd";
        const userID = "1Qsc40xA7zfUtqtAP";

        emailjs.send(serviceID, templateID, formData, userID).then(
            (response) => {
                console.log("Message sent successfully:", response);
                alert("Your message has been sent!");
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            },
            (error) => {
                console.log("Error sending message:", error);
                alert(
                    "There was an error sending your message. Please try again later."
                );
            }
        );
    };

    return (
        <motion.div
            className="mt-16 bg-card p-6 rounded-xl shadow-md max-w-3xl mx-auto mb-7"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
        >
            <h3
                
                className="text-2xl font-semibold text-foreground mb-4 flex items-center justify-start lg:justify-center">
                Contact Me
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div className="flex flex-col">
                    <label
                        
                        htmlFor="name"
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center justify-start "
                    >
                        UserName
                    </label>
                    <input
                        
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                </div>

                {/* Email Field */}
                <div className="flex flex-col">
                    <label
                        htmlFor="email"
                        
                        className="text-sm font-medium text-gray-700 mb-1 flex items-center justify-start "
                    >
                        Email Address
                    </label>
                    <input
                        
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                </div>

                {/* Message Field */}
                <div className="flex flex-col">
                    <label
                        htmlFor="message"
                        
                        className="text-sm font-medium  text-gray-700 mb-1 flex items-center justify-start 
                    "
                    >
                        Your Message
                    </label>
                    <textarea
                        
                        id="message"
                        name="message"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                        rows={4}
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    
                    type="submit"
                    className="w-full py-3  text-white font-semibold rounded-lg bg-gradient-to-r from-gray-500 to-gray-800 transition duration-300 ease-in-out transform hover:scale-105 
                     hover:text-gray-500 hover:border-gray-500 
                    shadow-lg "
                >
                    Send Message
                </button>
            </form>
        </motion.div>
    );
};

export default ContactForm;
