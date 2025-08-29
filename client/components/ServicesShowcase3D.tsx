import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Html } from "@react-three/drei";

type Service = {
  label: string;
  color: string;
  position: [number, number, number];
  shape:
    | "box"
    | "sphere"
    | "cone"
    | "torus"
    | "octahedron"
    | "dodecahedron";
};

function ServiceMesh({ service }: { service: Service }) {
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={0.6}>
      <mesh position={service.position} castShadow receiveShadow>
        {service.shape === "box" && <boxGeometry args={[1.1, 1.1, 1.1]} />}
        {service.shape === "sphere" && <sphereGeometry args={[0.9, 32, 32]} />}
        {service.shape === "cone" && <coneGeometry args={[0.9, 1.2, 32]} />}
        {service.shape === "torus" && <torusGeometry args={[0.7, 0.25, 16, 64]} />}
        {service.shape === "octahedron" && <octahedronGeometry args={[0.9, 0]} />}
        {service.shape === "dodecahedron" && <dodecahedronGeometry args={[0.9, 0]} />}
        <meshStandardMaterial color={service.color} metalness={0.3} roughness={0.25} />
      </mesh>
      <Html center distanceFactor={10} position={[service.position[0], service.position[1] + 1.6, service.position[2]]}>
        <div className="px-3 py-1.5 rounded-full text-xs md:text-sm font-medium bg-black/40 text-white border border-white/10 backdrop-blur">
          {service.label}
        </div>
      </Html>
    </Float>
  );
}

export default function ServicesShowcase3D() {
  const services: Service[] = useMemo(
    () => [
      { label: "Web", color: "#60a5fa", position: [3, 0, 0], shape: "box" },
      { label: "Mobile", color: "#34d399", position: [-3, 0, 0], shape: "sphere" },
      { label: "Cloud", color: "#a78bfa", position: [0, 0, 3], shape: "cone" },
      { label: "AI", color: "#f472b6", position: [0, 0, -3], shape: "torus" },
      { label: "Maintenance", color: "#f59e0b", position: [2, 0, -2], shape: "octahedron" },
      { label: "Social", color: "#22d3ee", position: [-2, 0, 2], shape: "dodecahedron" },
    ],
    [],
  );

  return (
    <div className="w-full h-[520px] rounded-xl overflow-hidden border border-border/50 bg-gradient-to-b from-background via-background/90 to-background/80">
      <Canvas
        shadows
        camera={{ position: [0, 4, 9], fov: 50 }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 6, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-5, 6, -5]} intensity={0.6} />

        <Suspense fallback={null}>
          {services.map((s) => (
            <ServiceMesh key={s.label} service={s} />
          ))}
        </Suspense>

        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[50, 50]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>

        <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2.1} minDistance={5} maxDistance={14} />
      </Canvas>
    </div>
  );
}
