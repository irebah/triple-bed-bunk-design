import Timber from "./Timber";
import timberUtils from "../utils/timber";

interface Props {
  level?: number;
}

const BedFrame = ({ level = 0 }: Props) => {
  const [widthA, heightA, depthA] = timberUtils.getDimensionsByType("A");
  const [widthB, , depthB] = timberUtils.getDimensionsByType("B");
  const [, heightC, depthC] = timberUtils.getDimensionsByType("C");

  return (
    <group position={[0, level + heightA / 2, 0]}>
      <group position={[widthA / 2 + depthC, 0, depthA / 2]}>
        <Timber name={`A-${level}-01`} position={[0, 0, 0]} />

        <Timber
          name={`A-${level}-02`}
          position={[0, 0, heightC * 2 + widthB - depthA]}
        />
      </group>
      <group position={[depthB / 2, 0, widthB / 2 + heightC]}>
        <Timber
          name={`B-${level}-01`}
          position={[0, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />

        <Timber
          name={`B-${level}-02`}
          position={[depthC + widthA, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
      </group>
    </group>
  );
};

export default BedFrame;
