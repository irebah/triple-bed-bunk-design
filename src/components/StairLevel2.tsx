import Timber from "./Timber";
import timberUtils from "../utils/timber";

const StairLevel2 = () => {
  const [widthB, ,] = timberUtils.getDimensionsByType("B");
  const [, heightC, depthC] = timberUtils.getDimensionsByType("C");
  const [widthF, heightF, depthF] = timberUtils.getDimensionsByType("F");
  const [widthG, , depthG] = timberUtils.getDimensionsByType("G");

  const numberStairs = 3;

  return (
    <group
      position={[
        depthF / 2 + depthC,
        widthF / 2,
        heightC * 2 + widthB + heightF / 2,
      ]}
      rotation={[0, Math.PI / 2, Math.PI / 2]}
    >
      {/* support */}
      <group position={[0, 0, 0]}>
        <Timber name="F-0-1" position={[0, 0, 0]} />
        <Timber name="F-0-2" position={[0, 0, widthG + depthF]} />
      </group>

      {/* stairs */}
      <group
        position={[0, 0, widthG / 2 + depthG / 2]}
        rotation={[0, Math.PI / 2, 0]}
      >
        {[...Array(numberStairs).keys()].map((index) => (
          <Timber
            key={index}
            name={`G-0-${index}`}
            position={[0, 0, -(widthF / numberStairs) * (index - 1)]}
          />
        ))}
      </group>
    </group>
  );
};

export default StairLevel2;
