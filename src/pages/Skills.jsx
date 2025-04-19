import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SkillTag from "./SkillTag"; // Adjust the path as needed

const skills = [
  { name: "Python", emoji: "🐍" },
  { name: "Django", emoji: "🌿" },
  { name: "React", emoji: "⚛️" },
  { name: "Next.js", emoji: "🧭" },
  { name: "Three.js", emoji: "🎮" },
  { name: "Node.js", emoji: "🟢" },
  { name: "Express", emoji: "🚇" },
  { name: "MongoDB", emoji: "🍃" },
  { name: "AWS", emoji: "☁️" },
  { name: "Figma", emoji: "🎨" },
  { name: "Docker", emoji: "🐳" },
];

const SkillSphere = () => {
  const radius = 3;
  const count = skills.length;

  return (
    <group>
      {skills.map((skill, i) => {
        const angle = (i / count) * Math.PI * 2;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        const z = (Math.random() - 0.5) * 2;
        return (
          <SkillTag
            key={i}
            position={[x, y, z]}
            label={`${skill.emoji} ${skill.name}`}
          />
        );
      })}
    </group>
  );
};

const Skills = () => {
  return (
    <div className="px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl text-white font-bold mb-10 text-center">
        🧠 3D Skills Cloud
      </h2>
      <div className="h-[500px] w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg shadow-2xl">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 5]} intensity={1} />
          <Suspense fallback={null}>
            <SkillSphere />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>
    </div>
  );
};

export default Skills;
