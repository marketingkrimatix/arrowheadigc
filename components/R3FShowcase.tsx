'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Rotating fan on top representing MEP/HVAC chillers
function ChillerFan({ position }: { position: [number, number, number] }) {
  const fanRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (fanRef.current) {
      fanRef.current.rotation.y += delta * 4;
    }
  });

  return (
    <group position={position}>
      {/* Chiller Unit Box */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.4, 0.3, 0.4]} />
        <meshStandardMaterial color="#475569" roughness={0.4} metalness={0.8} />
      </mesh>
      {/* Rotating Blades */}
      <mesh ref={fanRef} position={[0, 0.16, 0]}>
        <boxGeometry args={[0.35, 0.02, 0.05]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.9} />
      </mesh>
      <mesh position={[0, 0.16, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.35, 0.02, 0.05]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.9} />
      </mesh>
    </group>
  );
}

// Programmatic Construction Scene
function ConstructionScene() {
  return (
    <group>
      {/* Ground Platform */}
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <cylinderGeometry args={[3, 3, 0.1, 32]} />
        <meshStandardMaterial color="#1e293b" roughness={0.9} />
      </mesh>

      {/* Grid Helper overlay */}
      <gridHelper args={[6, 12, '#C5A880', '#475569']} position={[0, 0.01, 0]} />

      {/* Column A: Main structural gold box (Civil construction) */}
      <mesh position={[-0.8, 1, -0.8]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 2, 0.8]} />
        <meshStandardMaterial 
          color="#C5A880" 
          roughness={0.1} 
          metalness={0.9} 
          transparent 
          opacity={0.7} 
        />
      </mesh>
      
      {/* Column B: Secondary building block */}
      <mesh position={[0.6, 0.7, -0.4]} castShadow receiveShadow>
        <boxGeometry args={[1, 1.4, 0.8]} />
        <meshStandardMaterial 
          color="#1e293b" 
          roughness={0.5} 
          metalness={0.7} 
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Concrete Roof slab slab linking both columns */}
      <mesh position={[-0.1, 2.05, -0.6]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 0.1, 1.2]} />
        <meshStandardMaterial color="#475569" roughness={0.7} />
      </mesh>

      {/* HVAC Chiller Unit on top of roof slab */}
      <ChillerFan position={[-0.1, 2.25, -0.6]} />

      {/* HDPE Pipelines (Blue Glowing Pipes) */}
      {/* Pipe 1: Main pressure line laying along base */}
      <mesh position={[0, 0.15, 0.8]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 4, 16]} />
        <meshStandardMaterial 
          color="#00A8C6" 
          emissive="#005B6E" 
          emissiveIntensity={0.8} 
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Pipe Joint Valve Assembly */}
      <mesh position={[0, 0.15, 0.8]} castShadow>
        <sphereGeometry args={[0.16, 16, 16]} />
        <meshStandardMaterial color="#0090AA" metalness={0.9} />
      </mesh>

      {/* Vertical Pipe branch diving underground */}
      <mesh position={[0, -0.5, 0.8]} rotation={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 1.2, 16]} />
        <meshStandardMaterial 
          color="#00A8C6" 
          emissive="#005B6E" 
          emissiveIntensity={0.8} 
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Under-slab pipe connection */}
      <mesh position={[1, 0.15, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.07, 0.07, 2, 16]} />
        <meshStandardMaterial 
          color="#00A8C6" 
          emissive="#005B6E" 
          emissiveIntensity={0.5} 
          roughness={0.2}
        />
      </mesh>

      {/* Floating clouds/architectural circles */}
      <mesh position={[-1.5, 2.5, 1]} castShadow>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.65} />
      </mesh>
      <mesh position={[-1.2, 2.6, 1.2]} castShadow>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.65} />
      </mesh>
    </group>
  );
}

export default function R3FShowcase() {
  return (
    <div className="w-full h-[500px] relative rounded-xl overflow-hidden border border-app-border bg-app-secondary/20 shadow-xl">
      <Canvas dpr={[1, 2]} camera={{ position: [4, 3, 4], fov: 45 }} shadows>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {/* Render our programmatic architectural group */}
        <group position={[0, -0.4, 0]}>
          <ConstructionScene />
        </group>

        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
          maxPolarAngle={Math.PI / 2 - 0.05} // Prevent camera going below floor
        />
      </Canvas>
      <div className="absolute bottom-4 left-4 right-4 bg-app-card/90 backdrop-blur-xs border border-app-border rounded px-3 py-1.5 text-[9px] uppercase font-mono tracking-wider flex justify-between items-center">
        <span className="text-brand-teal font-bold">R3F Programmatic Canvas</span>
        <span className="text-app-muted">Orbit Controls Active (Drag to Rotate)</span>
      </div>
    </div>
  );
}
