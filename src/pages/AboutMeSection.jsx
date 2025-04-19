import React from "react";
import Resume from "../assets/wazeer_resume.pdf";

const AboutMeSection = () => {
  return (
    <div className="bg-[#1e1e1e] text-gray-200 font-mono rounded-xl shadow-2xl overflow-hidden max-w-4xl ">

      {/* Markdown-style content */}
      <div className="p-6 space-y-4 text-base leading-relaxed">
        <h1 className="text-2xl text-[#DCDCAA] font-bold"># About Me</h1>

        <p>
          👋 Hey! I'm{" "}
          <span className="text-[#9CDCFE] font-semibold">Wazeer</span>, a
          passionate developer who loves to bring ideas to life using{" "}
          <span className="text-[#CE9178]">code</span>.
        </p>

        <p>
          💻 I specialize in building full-stack web and mobile applications
          using technologies like <span className="text-[#4EC9B0]">React</span>,{" "}
          <span className="text-[#4EC9B0]">Node.js</span>,{" "}
          <span className="text-[#4EC9B0]">Firebase</span>, and{" "}
          <span className="text-[#4EC9B0]">TailwindCSS</span>.
        </p>

        <p>
          🚀 I enjoy solving problems, exploring new tech, and building products
          that make a difference. My work blends creativity and performance to
          deliver beautiful digital experiences.
        </p>

        <p>
          🌍 Based in <span className="text-[#CE9178]">Ernakulam, India</span>,
          I collaborate with clients globally and love contributing to
          open-source projects when I can.
        </p>

        <p>
          🧠 Always learning, always evolving. Currently exploring{" "}
          <span className="text-[#C586C0]">AI</span> and{" "}
          <span className="text-[#C586C0]">ML</span> with Python.
        </p>

        <p className="text-[#6A9955]">
          // Let’s build something amazing together!
        </p>

        <a
          href={Resume}
          download="Wazeer_Resume.pdf"
          className="inline-block mt-4 px-5 py-2 rounded-lg bg-[#007acc] text-white hover:bg-[#005f99] transition-colors duration-300"
        >
          ⬇️ Download CV
        </a>
      </div>
    </div>
  );
};

export default AboutMeSection;
