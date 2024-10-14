import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { BedBunkProvider } from "./context/BedBunkContext";
import BedBunk from "./components/BedBunk";

const App = () => {
  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <Canvas frameloop="demand" camera={{ position: [-1.5, 3, 3.5], fov: 30 }}>
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
    </main>
  );
};

export default App;
