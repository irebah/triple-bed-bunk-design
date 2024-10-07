import Timber from "./Timber";
import timberUtils from "../utils/timber";

const StairLevel3 = () => {
  const [, heightC] = timberUtils.getDimensionsByType("C");
  const [widthG, heightG, depthG] = timberUtils.getDimensionsByType("G");
  const [widthH, heightH, depthH] = timberUtils.getDimensionsByType("H");
  const [widthM] = timberUtils.getDimensionsByType("M");

  const numberStairs = 6;
  const stairsGap = 0.25;

  return (
    <group
      position={[-heightH / 2, widthH / 2, depthH / 2 + heightC]}
      rotation={[0, 0, Math.PI / 2]}
    >
      {/* support */}
      <group position={[0, 0, 0]}>
        <Timber name="H-0-1" position={[0, 0, 0]} />
        <Timber
          name="M-0-2"
          position={[(widthM - widthH) / 2, 0, depthH + widthG]}
        />
      </group>

      {/* stairs */}
      <group
        position={[
          -widthH / 2 + widthG - heightG + depthG,
          0,
          widthG / 2 + depthH / 2,
        ]}
        rotation={[0, Math.PI / 2, 0]}
      >
        {[...Array(numberStairs).keys()].map((index) => (
          <Timber
            key={index}
            name={`G-0-${index}`}
            position={[0, 0, stairsGap * index]}
          />
        ))}
      </group>
    </group>
  );
};

export default StairLevel3;
