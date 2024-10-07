import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { BedBunkProvider } from "./context/BedBunkContext";
import BedBunk from "./components/BedBunk";

const App = () => {
  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <section
        id="canvas-container"
        className="w-[1200px] h-[1200px] border-2 border-black"
      >
        <Canvas frameloop="demand" camera={{ position: [-1, 1, 2.5], fov: 50 }}>
          <color attach="background" args={["#f0f0f0"]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 7]} intensity={1} castShadow />
          <OrbitControls />
          <BedBunkProvider>
            <Center>
              <BedBunk />
            </Center>
          </BedBunkProvider>
        </Canvas>
      </section>
    </main>
  );
};

export default App;
