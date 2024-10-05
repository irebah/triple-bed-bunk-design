import BedBunkCanvas from "./components/BedBunk";

const App = () => {
  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <section
        id="canvas-container"
        className="w-[800px] h-[800px] border-2 border-black"
      >
        <BedBunkCanvas />
      </section>
    </main>
  );
};

export default App;
