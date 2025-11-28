import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


export default function Contact() {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_donoer6",      // replace with your service ID
        "template_vpp5u6d",     // replace with your template ID
        { name, email, message },
        "aJJf4EzZgBksB-f-V"     // replace with your public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          alert("Failed to send message, try again.");
          console.log(err);
        }
      );
  };

  // Animation variants
  const leftAnimation = {
    hidden: { x: "-50%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { duration: 0.8 } },
  };

  const rightAnimation = {
    hidden: { x: "50%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <section id="contact" className="py-9 bg-wheat  px-4 ">
      <div className="max-w-5xl mx-auto bg-wheat">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="text-gray-600 mt-2">Get in touch</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 bg-wheat ">
          {/* Left Column: Contact Info */}
          <motion.div
            className="space-y-6 flex flex-col bg-wheat"
            variants={leftAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-xl font-semibold">Talk to me</h3>

            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <Mail className="text-gray-600 bg-white" />
              <div className="bg-white">
                <h4 className="font-medium bg-white">Email</h4>
                <p className="text-gray-600 bg-white">msaadullah541@gmail.com</p>
                <a
                  href="mailto:msaadullah541@gmail.com"
                  className="text-sm text-gray-600 bg-white hover:underline"
                >
                  Write me →
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <Phone className="text-gray-600 bg-white" />
              <div className="bg-white">
                <h4 className="font-medium bg-white">Whatsapp</h4>
                <p className="text-gray-600 bg-white">+92 300 7695930</p>
                <a
                  href="https://wa.me/+923007695930"
                  className="text-sm text-gray-600 bg-white hover:underline"
                >
                  Write me →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            className="space-y-6"
            variants={rightAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Write me your thoughts</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring focus:ring-gray-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring focus:ring-gray-300"
              />
              <textarea
                placeholder="Write your thoughts here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
                className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring focus:ring-gray-300"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
