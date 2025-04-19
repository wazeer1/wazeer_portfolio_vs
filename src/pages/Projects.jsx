import React from "react";

const projectData = [
  {
    title: "EdTech Web App – LearnHub 🎓",
    description:
      "A comprehensive e-learning platform designed for students, educators, and administrators. LearnHub enables seamless course discovery, enrollment, live classes, mock tests, and performance tracking – all under one intuitive interface.",
    tech: ["React", "API", "TailwindCSS", "Python", "django"],
    link: "https://your-weather-app-link.com",
  },
  {
    title: "Rasnas – Boutique eCommerce Platform 🛍️",
    description:
      "Rasnas is a stylish and user-friendly eCommerce platform tailored for women’s fashion. The platform showcases a curated collection of clothing and accessories with a focus on premium UI, seamless shopping experience, and mobile-first performance.",
    tech: ["React", "Vite", "TailwindCSS", "node js", "express JS"],
    link: "https://rasnasboutique.com",
  },
  {
    title: "MarkGPT – AI-Powered Digital Marketing Assistant 🤖",
    description:
      "MarkGPT is an AI-driven digital marketing assistant designed to help businesses automate and optimize their content and campaigns. Built with OpenAI's powerful language models, MarkGPT streamlines tasks like copywriting, content generation, social media planning, SEO optimization, and customer engagement—saving time while boosting marketing performance.",
    tech: ["React", "Firebase", "CSS Modules", "openAi", "python", "django"],
    link: "https://markgpt.com",
  },
];

const Projects = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl text-white font-bold mb-10 text-center">
        📁 Projects
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((proj, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-[#DCDCAA] mb-2">
              {proj.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-[#333333]/50 text-[#9CDCFE] border border-[#9CDCFE]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#569CD6] text-sm underline hover:text-blue-400"
            >
              Visit Project ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
