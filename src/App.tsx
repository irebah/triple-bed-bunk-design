import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { BedBunkProvider } from "./context/BedBunkContext";
import BedBunk from "./components/BedBunk";

const App = () => {
  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <section
        id="canvas-container"
        className="w-[1200px] h-[1200px] border-2 border-black"
      >
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
      </section>
    </main>
  );
};

export default App;
