import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useTexture } from "@react-three/drei";
import ExperienceCard from "../components/ui/ExperienceCard";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section className=" w-full text-white flex flex-col items-center justify-center px-4">
      <div className="w-full h-[500px]  rounded-lg overflow-hidden">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Environment preset="sunset" />
          <OrbitControls enableZoom={false} />

          {/* Experience Cards */}
          <ExperienceCard
            title="Fullstack developer"
            company="Steyp pvt ltd"
            years="2021-Dec - 2023-Sep"
            color="#6366f1"
            position={[-4, 0, 0]}
          />
          <ExperienceCard
            title="Fullstack developer"
            company="Woodenclouds"
            years="2023-sep - 2024-sep"
            color="#ec4899"
            position={[0, 0, 0]}
          />
          <ExperienceCard
            title="Frontend developer"
            company="UL-Technologies"
            years="2024-sep - present"
            color="#f59e0b"
            position={[4, 0, 0]}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default ExperienceSection;
