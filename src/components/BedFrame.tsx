import Timber from "./Timber";
import timberUtils from "../utils/timber";
import BedSlats from "./BedSlats";
import Guardrail from "./Guardrail";

interface Props {
  level?: number;
  sideGuardrail?: boolean;
  shortSide?: boolean;
  shortBottom?: boolean;
}

const BedFrame = ({
  level = 0,
  sideGuardrail = false,
  shortSide = false,
  shortBottom = false,
}: Props) => {
  const [widthA, heightA, depthA] = timberUtils.getDimensionsByType("A");
  const [widthB, heightB, depthB] = timberUtils.getDimensionsByType("B");
  const [, heightC, depthC] = timberUtils.getDimensionsByType("C");
  const [widthE, heightE, depthE] = timberUtils.getDimensionsByType("E");

  return (
    <group>
      {/* long side */}
      <group position={[widthA / 2 + depthC, level + heightA / 2, depthA / 2]}>
        <Timber name={`A-${level}-01`} position={[0, 0, 0]} />

        <Timber
          name={`A-${level}-02`}
          position={[0, 0, heightC * 2 + widthB - depthA]}
        />
      </group>

      {/* short side */}
      <group position={[depthB / 2, level + heightB / 2, widthB / 2 + heightC]}>
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

      {/* slats support */}
      <group position={[widthE / 2 + depthC, level + heightE / 2, depthE / 2]}>
        <Timber name={`E-${level}-01`} position={[0, 0, depthA]} />
        <Timber
          name={`E-${level}-02`}
          position={[0, 0, 2 * heightC + widthB - depthE - depthA]}
        />
      </group>

      <BedSlats level={level} />

      <Guardrail
        level={level}
        sideGuardrail={sideGuardrail}
        shortSide={shortSide}
        shortBottom={shortBottom}
      />
    </group>
  );
};

export default BedFrame;
