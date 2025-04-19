import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment, Ring } from "@react-three/drei";

const ThreeBackdrop = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      className="absolute inset-0 z-0"
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} />
      <Environment preset="city" />

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Ring args={[1, 1.4, 64]}>
          <meshStandardMaterial
            color="#00ffff"
            metalness={0.5}
            roughness={0.1}
            emissive="#00ffff"
            emissiveIntensity={0.4}
          />
        </Ring>
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate />
    </Canvas>
  );
};

export default ThreeBackdrop;
