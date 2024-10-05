import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import TimberA from "./TimberA";

const BedBunk = () => {
  return (
    <group>
      <TimberA position={[-0.8, 1.4, 0.4]} scale={1} />
    </group>
  );
};

const BedBunkCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
    >
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <Suspense fallback={<div>loading</div>}>
        <OrbitControls />
        <BedBunk />
      </Suspense>
    </Canvas>
  );
};

export default BedBunkCanvas;
