import Timber from "./Timber";
import timberUtils from "../utils/timber";
import { GUARDRAIL_HEIGHT } from "../constants";

interface Props {
  level?: number;
  fullGuardrail?: boolean;
  shortGuardrail?: boolean;
}

const Guardrail = ({
  level = 0,
  fullGuardrail = false,
  shortGuardrail = false,
}: Props) => {
  const [widthA, heightA] = timberUtils.getDimensionsByType("A");
  const [widthB, heightB] = timberUtils.getDimensionsByType("B");
  const [, heightC, depthC] = timberUtils.getDimensionsByType("C");
  const [widthI, heightI, depthI] = timberUtils.getDimensionsByType("I");
  const [widthJ, heightJ, depthJ] = timberUtils.getDimensionsByType("J");
  const [widthK] = timberUtils.getDimensionsByType("K");

  return (
    <group>
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

export default Guardrail;
