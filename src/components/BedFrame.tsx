import Timber from "./Timber";
import timberUtils from "../utils/timber";
import BedSlats from "./BedSlats";
import { GUARDRAIL_HEIGHT } from "../constants";

interface Props {
  level?: number;
  fullGuardrail?: boolean;
  shortGuardrail?: boolean;
}

const BedFrame = ({
  level = 0,
  fullGuardrail = false,
  shortGuardrail = false,
}: Props) => {
  const [widthA, heightA, depthA] = timberUtils.getDimensionsByType("A");
  const [widthB, heightB, depthB] = timberUtils.getDimensionsByType("B");
  const [, heightC, depthC] = timberUtils.getDimensionsByType("C");
  const [widthD, heightD, depthD] = timberUtils.getDimensionsByType("D");
  const [widthE, heightE, depthE] = timberUtils.getDimensionsByType("E");
  const [widthI, heightI, depthI] = timberUtils.getDimensionsByType("I");
  const [widthJ, heightJ, depthJ] = timberUtils.getDimensionsByType("J");
  const [widthK] = timberUtils.getDimensionsByType("K");

  return (
    <group position={[0, 0, 0]}>
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

      {/* slats */}
      <group
        position={[heightD / 2, level + depthD / 2 + heightE, widthD / 2]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      >
        <BedSlats />
      </group>

      {/* guardrail top and bottom */}
      <group
        position={[
          depthI / 2,
          heightB + heightI / 2 + GUARDRAIL_HEIGHT + level,
          widthI / 2 + heightC,
        ]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <Timber name={`I-${level}-01`} />
        <Timber name={`I-${level}-02`} position={[0, 0, widthA + depthI]} />
      </group>

      {/* guardrail side (level 2 and 3 only) */}
      {(shortGuardrail || fullGuardrail) && (
        <group
          position={[
            depthC,
            heightA + heightJ / 2 + level + GUARDRAIL_HEIGHT,
            2 * heightC + widthB - depthJ / 2,
          ]}
        >
          {shortGuardrail && (
            <Timber
              name={`K-${level}-01`}
              position={[widthK / 2 + widthA - widthK, 0, 0]}
            />
          )}
          {fullGuardrail && (
            <Timber name={`J-${level}-01`} position={[widthJ / 2, 0, 0]} />
          )}
        </group>
      )}
    </group>
  );
};

export default BedFrame;
