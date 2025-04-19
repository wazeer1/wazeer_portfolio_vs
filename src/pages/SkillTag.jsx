import React, { useState } from "react";
import { Text } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

const AnimatedText = animated(Text);

const SkillTag = ({ position, label }) => {
  const [hovered, setHovered] = useState(false);

  const { scale } = useSpring({
    scale: hovered ? 1.5 : 1,
    config: { mass: 1, tension: 120, friction: 10 },
  });

  return (
    <AnimatedText
      position={position}
      fontSize={0.4}
      color="#61DAFB"
      anchorX="center"
      anchorY="middle"
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {label}
    </AnimatedText>
  );
};

export default SkillTag;
