import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_donoer6",
        "template_vpp5u6d",
        { name, email, message },
        "aJJf4EzZgBksB-f-V"
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

  const leftAnimation = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const rightAnimation = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const cardStyle =
    "flex items-start gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 hover:shadow-cyan-500/20 transition-all duration-300";

  const iconStyle = "text-cyan-400 shrink-0 mt-1";

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20
      bg-[#0f172a] text-white overflow-hidden"
    >
      {/* GLOW */}
      <div className="absolute top-0 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/10 blur-2xl rounded-full -translate-x-1/2"></div>

      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/5"></div>

      <div className="max-w-6xl mx-auto relative">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400">
            Contact Me
          </h2>
          <p className="text-gray-400 mt-2">
            Get in touch
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <motion.div
            variants={leftAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white">
              Talk to me
            </h3>

            {/* EMAIL */}
            <div className={cardStyle}>
              <Mail className={iconStyle} />
              <div>
                <h4 className="font-medium text-white">Email</h4>
                <p className="text-gray-400 text-sm">
                  msaadullah541@gmail.com
                </p>
                <a
                  href="mailto:msaadullah541@gmail.com"
                  className="text-cyan-400 text-sm hover:underline"
                >
                  Write me →
                </a>
              </div>
            </div>

            {/* WHATSAPP */}
            <div className={cardStyle}>
              <Phone className={iconStyle} />
              <div>
                <h4 className="font-medium text-white">WhatsApp</h4>
                <p className="text-gray-400 text-sm">
                  +92 300 7695930
                </p>
                <a
                  href="https://wa.me/923007695930"
                  className="text-cyan-400 text-sm hover:underline"
                >
                  Write me →
                </a>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            variants={rightAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white">
              Write your message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/5 border border-white/10
                text-white placeholder-gray-400
                focus:outline-none focus:border-cyan-400"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/5 border border-white/10
                text-white placeholder-gray-400
                focus:outline-none focus:border-cyan-400"
                required
              />

              <textarea
                rows={5}
                placeholder="Write your thoughts..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/5 border border-white/10
                text-white placeholder-gray-400
                focus:outline-none focus:border-cyan-400"
                required
              />

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-cyan-500 text-black font-semibold
                hover:bg-cyan-400 transition-all duration-300 shadow-lg"
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