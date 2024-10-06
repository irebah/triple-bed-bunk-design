import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";

import BedFrame from "./BedFrame";
import { BedBunkProvider } from "../context/BedBunkContext";
import MainPoles from "./MainPoles";

const BedBunk = () => {
  return (
    <>
      <BedFrame />;
      <BedFrame level={0.8} />;
      <BedFrame level={1.6} />;
      <MainPoles />
    </>
  );
};

const BedBunkCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [1, 2, 3.5], fov: 50 }}
    >
      <ambientLight intensity={0.5} color="white" />
      <pointLight intensity={1} color="white" position={[10, 10, 10]} />
      {/* <Suspense fallback={<div>loading</div>}> */}
      <OrbitControls />
      <axesHelper />
      <BedBunkProvider>
        <BedBunk />
      </BedBunkProvider>
      {/* </Suspense> */}
    </Canvas>
  );
};

export default BedBunkCanvas;
