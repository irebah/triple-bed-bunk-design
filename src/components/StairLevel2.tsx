import Timber from "./Timber";
import timberUtils from "../utils/timber";

const StairLevel2 = () => {
  const [widthB] = timberUtils.getDimensionsByType("B");
  const [, heightC, depthC] = timberUtils.getDimensionsByType("C");
  const [widthF, heightF, depthF] = timberUtils.getDimensionsByType("F");
  const [widthG, heightG, depthG] = timberUtils.getDimensionsByType("G");
  const [widthL] = timberUtils.getDimensionsByType("L");

  const numberStairs = 3;
  const stairsGap = 0.25;

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
        <Timber
          name="L-0-2"
          position={[(widthL - widthF) / 2, 0, widthG + depthF]}
        />
      </group>

      {/* stairs */}
      <group
        position={[
          -widthF / 2 + widthG - heightG + depthG,
          0,
          widthG / 2 + depthG / 2,
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

export default StairLevel2;
