import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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


        emailjs
            .send(
                serviceID,
                templateID,
                formData,
                userID
            )
            .then(
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
                    alert("There was an error sending your message. Please try again later.");
                }
            );
    };

    return (
        <motion.div
            className="mt-16 bg-card p-6 rounded-xl shadow-md max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
        >
            <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
                Contact Me
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={4}
                ></textarea>
                <button
                    type="submit"
                    className="w-full py-3 bg-primary bg-blue-500 text-white font-semibold rounded-lg hover:bg-opacity-80 transition"
                >
                    Send Message
                </button>
            </form>
        </motion.div>
    );
};

export default ContactForm;
