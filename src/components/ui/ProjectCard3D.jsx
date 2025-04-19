import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Environment, Html } from "@react-three/drei";

const ProjectCard3D = ({ children }) => {
  return (
    <Canvas className="w-full h-72">
      <ambientLight intensity={1} />
      <Environment preset="studio" />

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Html center className="w-full h-full">
          {children}
        </Html>
      </Float>
    </Canvas>
  );
};

export default ProjectCard3D;
