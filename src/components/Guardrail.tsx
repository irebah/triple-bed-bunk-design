import Timber from "./Timber";
import timberUtils from "../utils/timber";
import { GUARDRAIL_HEIGHT } from "../constants";

interface Props {
  level?: number;
  sideGuardrail?: boolean;
  shortSide?: boolean;
  shortBottom?: boolean;
}

const Guardrail = ({
  level = 0,
  sideGuardrail = false,
  shortSide = false,
  shortBottom = false,
}: Props) => {
  const [widthA, heightA] = timberUtils.getDimensionsByType("A");
  const [widthB, heightB] = timberUtils.getDimensionsByType("B");
  const [, heightC, depthC] = timberUtils.getDimensionsByType("C");
  const [widthI, heightI, depthI] = timberUtils.getDimensionsByType("I");
  const [widthJ, heightJ, depthJ] = timberUtils.getDimensionsByType("J");
  const [widthK] = timberUtils.getDimensionsByType("K");
  const [widthN] = timberUtils.getDimensionsByType("N");

  return (
    <group>
      {/* top and bottom guardrail*/}
      <group
        position={[
          depthI / 2,
          heightB + heightI / 2 + GUARDRAIL_HEIGHT + level,
          widthI / 2 + heightC,
        ]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <Timber name={`I-${level}-01`} position={[0, 0, widthA + depthI]} />
        {shortBottom ? (
          <Timber
            name={`N-${level}-01`}
            position={[-(widthI - widthN) / 2, 0, 0]}
          />
        ) : (
          <Timber name={`I-${level}-02`} />
        )}
      </group>

      {/* side guardrail */}
      {sideGuardrail && (
        <group
          position={[
            depthC,
            heightA + heightJ / 2 + level + GUARDRAIL_HEIGHT,
            2 * heightC + widthB - depthJ / 2,
          ]}
        >
          {shortSide ? (
            <Timber name={`K-${level}-01`} position={[widthK / 2, 0, 0]} />
          ) : (
            <Timber name={`J-${level}-01`} position={[widthJ / 2, 0, 0]} />
          )}
        </group>
      )}
    </group>
  );
};

export default Guardrail;
