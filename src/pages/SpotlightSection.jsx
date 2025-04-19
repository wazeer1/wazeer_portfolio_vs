import React from "react";
import { motion } from "framer-motion";
import ThreeBackdrop from "../components/ui/ThreeBackdrop ";
import ProfileImage from "../assets/image/profile.jpg";

const SpotlightSection = () => {
  return (
    <div className="relative w-full rounded-xl overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <ThreeBackdrop />
      </div>

      {/* Foreground Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.01 }}
        className="relative z-10 bg-[#1e1e1e]/90 text-gray-300 font-mono shadow-2xl border border-[#333] rounded-xl backdrop-blur-md"
      >
        {/* Header */}
        {/* <div className="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] border-b border-[#444]">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-4 text-sm text-white">Spotlight.jsx</span>
        </div> */}

        {/* Body */}
        <div className="flex flex-col md:flex-row items-center md:items-start p-6 gap-6">
          <motion.div
            whileHover={{ rotate: [0, 5, -5, 0], scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden border-2 border-[#444] shadow-md"
          >
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Code Info */}
          <div className="text-sm leading-relaxed w-full z-10">
            <p className="text-[#6A9955]">
              // Hi there! Welcome to my digital playground
            </p>
            <p>
              <span className="text-[#569CD6]">const</span>{" "}
              <span className="text-[#9CDCFE]">name</span> ={" "}
              <span className="text-[#CE9178]">"Wazeer ahmed"</span>;
            </p>
            <p>
              <span className="text-[#569CD6]">const</span>{" "}
              <span className="text-[#9CDCFE]">role</span> ={" "}
              <span className="text-[#CE9178]">"Full Stack Developer"</span>;
            </p>
            <p>
              <span className="text-[#569CD6]">const</span>{" "}
              <span className="text-[#9CDCFE]">techStack</span> ={" "}
              <span className="text-[#CE9178]">
                ["React", "Node.js", "Tailwind", "Firebase", "Python", "Django",
                "Express JS", "three JS"]
              </span>
              ;
            </p>
            <p>
              <span className="text-[#569CD6]">const</span>{" "}
              <span className="text-[#9CDCFE]">location</span> ={" "}
              <span className="text-[#CE9178]">"Ernakulam, India"</span>;
            </p>

            <br />
            <p className="text-[#6A9955]">
              // I craft beautiful, performant web & mobile apps
            </p>
            <p className="text-[#6A9955]">
              // Always learning, always building
            </p>
            <br />

            <p>
              <span className="text-[#C586C0]">function</span>{" "}
              <span className="text-[#DCDCAA]">sayHello</span>() {"{"}
            </p>
            <p className="pl-6">
              <span className="text-[#D4D4D4]">console</span>
              <span className="text-[#D4D4D4]">.log</span>(
              <span className="text-[#CE9178]">"👋 Hello, world!"</span>);
            </p>
            <p>{"}"}</p>

            <br />
            <p>
              <span className="text-[#DCDCAA]">export default</span>{" "}
              <span className="text-[#9CDCFE]">Spotlight</span>;
              <span className="animate-pulse text-white">|</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SpotlightSection;
