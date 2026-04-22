import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    name: "E-Commerce App",
    images: [
      "/projects/ecommerce1.jpg",
      "/projects/ecommerce2.jpg",
    ],
    progress: 80,
    desc: "Full MERN stack e-commerce platform with cart, authentication, admin panel, and payment integration.",
  },
  {
    id: 2,
    name: "Chat App",
    images: [
      "/projects/chat1.jpg",
      "/projects/chat2.jpg",
    ],
    progress: 70,
    desc: "Real-time chat application using Socket.io, Node.js, and Express with live messaging support.",
  },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 md:px-20 py-16">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-4 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition"
      >
        ← Back
      </button>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-3">
          {project.name}
        </h1>

        <p className="text-gray-400 max-w-3xl leading-relaxed">
          {project.desc}
        </p>
      </motion.div>

      {/* PROGRESS CARD */}
      <div className="max-w-md bg-[#0f172a] border border-white/10 p-5 rounded-xl mb-10 shadow-lg">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Progress</span>
          <span>{project.progress}%</span>
        </div>

        <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
          <div
            className="h-full bg-cyan-400 transition-all duration-500"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      {/* IMAGE GALLERY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {project.images.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-white/10 group"
          >
            <img
              src={img}
              alt=""
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </motion.div>

    </div>
  );
}