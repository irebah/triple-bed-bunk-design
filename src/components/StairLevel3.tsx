import Timber from "./Timber";
import timberUtils from "../utils/timber";

const StairLevel3 = () => {
  const [, heightB] = timberUtils.getDimensionsByType("B");
  const [, heightC] = timberUtils.getDimensionsByType("C");
  const [widthG, , depthG] = timberUtils.getDimensionsByType("G");
  const [widthH, heightH, depthH] = timberUtils.getDimensionsByType("H");

  const numberStairs = 6;

  return (
    <group
      position={[-heightH / 2, widthH / 2, depthH / 2 + heightC]}
      rotation={[0, 0, Math.PI / 2]}
    >
      {/* support */}
      <group position={[0, 0, 0]}>
        <Timber name="H-0-1" position={[0, 0, 0]} />
        <Timber name="H-0-2" position={[0, 0, depthH + widthG]} />
      </group>

      {/* stairs */}
      <group
        position={[
          -widthH / 2 + depthG / 2 + widthH / numberStairs + heightB,
          0,
          widthG / 2 + depthH / 2,
        ]}
        rotation={[0, Math.PI / 2, 0]}
      >
        {[...Array(numberStairs).keys()].map((index) => (
          <Timber
            key={index}
            name={`G-0-${index}`}
            position={[0, 0, (widthH / numberStairs) * (index - 1)]}
          />
        ))}
      </group>
    </group>
  );
};

export default StairLevel3;
