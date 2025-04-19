import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion";

const ExperienceCard = ({
  title,
  company,
  years,
  color = "#6366f1",
  position = [0, 0, 0],
}) => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} />
      <Html center>
        <div className="bg-black bg-opacity-70 p-4 rounded-lg shadow-lg">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-sm">{company}</p>
          <p className="text-xs mt-1">{years}</p>
        </div>
      </Html>
    </mesh>
  );
};

export default ExperienceCard;
