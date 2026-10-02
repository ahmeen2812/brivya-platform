"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface TrackMeshProps {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  activeColor: string;
  isActive: boolean;
  label: string;
}

// Procedural 3D Track Rail based on Brivya angular geometry
const TrackRail: React.FC<TrackMeshProps> = ({
  position,
  rotation,
  color,
  activeColor,
  isActive,
}) => {
  const meshRef = React.useRef<THREE.Mesh>(null);
  const targetColor = React.useMemo(
    () => new THREE.Color(isActive ? activeColor : color),
    [isActive, activeColor, color],
  );

  useFrame((_, delta) => {
    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.MeshStandardMaterial;
      mat.color.lerp(targetColor, delta * 4);
    }
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Structural Track Rail */}
      <mesh ref={meshRef}>
        <boxGeometry args={[4.2, 0.08, 0.4]} />
        <meshStandardMaterial
          roughness={0.25}
          metalness={0.85}
          color={color}
          wireframe={false}
        />
      </mesh>

      {/* Hairline Guide Wire */}
      <mesh position={[0, 0.08, 0]}>
        <boxGeometry args={[4.2, 0.02, 0.02]} />
        <meshBasicMaterial color={isActive ? "#1675F8" : "#8998AD"} transparent opacity={0.6} />
      </mesh>
    </group>
  );
};

// Kinetic AI Data Signal Pulses traveling across the 3 physical tracks
const SignalPulseGroup: React.FC<{ activeTrackIndex: number }> = ({ activeTrackIndex }) => {
  const pulseARef = React.useRef<THREE.Mesh>(null);
  const pulseBRef = React.useRef<THREE.Mesh>(null);
  const pulseCRRef = React.useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (pulseARef.current) {
      pulseARef.current.position.x = ((t * 1.8) % 4.2) - 2.1;
    }
    if (pulseBRef.current) {
      pulseBRef.current.position.x = (((t * 1.8) + 1.4) % 4.2) - 2.1;
    }
    if (pulseCRRef.current) {
      pulseCRRef.current.position.x = (((t * 1.8) + 2.8) % 4.2) - 2.1;
    }
  });

  return (
    <group>
      {/* Signal Packet: Track A (WEB) */}
      <mesh ref={pulseARef} position={[0, 1.28, 0]}>
        <boxGeometry args={[0.25, 0.06, 0.15]} />
        <meshBasicMaterial color={activeTrackIndex === 0 ? "#1675F8" : "#C7A76B"} />
      </mesh>

      {/* Signal Packet: Track B (GOOGLE) */}
      <mesh ref={pulseBRef} position={[0, 0.08, 0.3]}>
        <boxGeometry args={[0.25, 0.06, 0.15]} />
        <meshBasicMaterial color={activeTrackIndex === 1 ? "#1675F8" : "#C7A76B"} />
      </mesh>

      {/* Signal Packet: Track C (META) */}
      <mesh ref={pulseCRRef} position={[0, -1.12, 0.6]}>
        <boxGeometry args={[0.25, 0.06, 0.15]} />
        <meshBasicMaterial color={activeTrackIndex === 2 ? "#1675F8" : "#C7A76B"} />
      </mesh>
    </group>
  );
};

// Scene Root
const SceneContent: React.FC<{ activeTrackIndex: number }> = ({ activeTrackIndex }) => {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[6, 8, 5]} intensity={1.8} color="#F4F7FC" />
      <pointLight position={[-4, -3, -2]} intensity={0.8} color="#07366D" />

      <group rotation={[0.22, -0.42, 0.12]} position={[0.2, 0, 0]}>
        {/* Track A: WEB */}
        <TrackRail
          position={[0, 1.2, 0]}
          rotation={[0, 0, -0.05]}
          color="#07366D"
          activeColor="#0A5FD7"
          isActive={activeTrackIndex === 0}
          label="WEB"
        />

        {/* Track B: GOOGLE */}
        <TrackRail
          position={[0, 0, 0.3]}
          rotation={[0, 0, -0.05]}
          color="#0A1D36"
          activeColor="#0A5FD7"
          isActive={activeTrackIndex === 1}
          label="GOOGLE"
        />

        {/* Track C: META */}
        <TrackRail
          position={[0, -1.2, 0.6]}
          rotation={[0, 0, -0.05]}
          color="#07366D"
          activeColor="#0A5FD7"
          isActive={activeTrackIndex === 2}
          label="META"
        />

        {/* Dynamic Automation Conduit Packets */}
        <SignalPulseGroup activeTrackIndex={activeTrackIndex} />
      </group>
    </>
  );
};

export const HeroSignalEngineCanvas: React.FC<{ activeTrackIndex: number }> = ({
  activeTrackIndex,
}) => {
  return (
    <div className="relative h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <SceneContent activeTrackIndex={activeTrackIndex} />
      </Canvas>
    </div>
  );
};