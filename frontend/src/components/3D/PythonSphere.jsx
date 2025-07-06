import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const PythonSphere = ({ position }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.012;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + 1) * 0.1;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial 
          color="#22c55e" 
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      <Text
        position={[0, -1, 0]}
        fontSize={0.3}
        color="#22c55e"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        Python
      </Text>
    </group>
  );
};

export default PythonSphere;