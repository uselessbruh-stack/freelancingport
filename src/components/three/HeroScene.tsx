"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

function GlassSphere({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.y = clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.5}
          chromaticAberration={0.1}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.2}
          temporalDistortion={0.1}
          iridescence={0.3}
          iridescenceIOR={1}
          color="#c9a96e"
          roughness={0.1}
          transmission={0.95}
        />
      </mesh>
    </Float>
  );
}

function MetallicTorus({
  position,
  scale,
  rotationSpeed = 0.2,
}: {
  position: [number, number, number];
  scale: number;
  rotationSpeed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * rotationSpeed;
      meshRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.3, 32, 64]} />
        <meshStandardMaterial
          color="#b08d57"
          metalness={0.95}
          roughness={0.15}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
}

function FloatingCube({
  position,
  scale,
}: {
  position: [number, number, number];
  scale: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#242424"
          metalness={0.7}
          roughness={0.3}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function PointCloud() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 500;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#c9a96e"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

function MouseResponsiveGroup({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.15,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.1,
        0.05
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

function AmbientSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * 0.05;
      meshRef.current.rotation.y = clock.elapsedTime * 0.08;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2]} scale={3}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshDistortMaterial
        color="#1f1f1f"
        metalness={0.5}
        roughness={0.8}
        distort={0.3}
        speed={1.5}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#f5f0e8" />
        <pointLight position={[-3, 2, 4]} intensity={0.5} color="#c9a96e" />
        <pointLight position={[3, -2, 3]} intensity={0.3} color="#b08d57" />

        <MouseResponsiveGroup>
          <GlassSphere position={[3, 1.5, 0]} scale={0.8} />
          <GlassSphere position={[-3.5, -1, 1]} scale={0.5} />
          <MetallicTorus position={[2.5, -1.5, -1]} scale={0.6} />
          <MetallicTorus position={[-2, 2, -2]} scale={0.4} rotationSpeed={0.3} />
          <FloatingCube position={[4, 0, -2]} scale={0.5} />
          <FloatingCube position={[-4, -2, -1]} scale={0.3} />
          <AmbientSphere />
          <PointCloud />
        </MouseResponsiveGroup>

        <Environment preset="city" environmentIntensity={0.3} />
      </Canvas>
    </div>
  );
}
