import Timber from "./Timber";
import timberUtils from "../utils/timber";

interface Props {
  level?: number;
}

const BedSlats = ({ level = 0 }: Props) => {
  const [, , depthA] = timberUtils.getDimensionsByType("A");
  const [, , depthB] = timberUtils.getDimensionsByType("B");

  const [widthD, heightD, depthD] = timberUtils.getDimensionsByType("D");
  const [, heightE] = timberUtils.getDimensionsByType("E");

  const numberSlats = 9;
  const slatGap = 0.2;

  return (
    <group
      position={[
        heightD / 2 + depthB - 0.09,
        level + depthD / 2 + heightE,
        widthD / 2 + depthA,
      ]}
      rotation={[Math.PI / 2, 0, Math.PI / 2]}
    >
      {[...Array(numberSlats).keys()].map((index) => (
        <Timber
          key={index}
          name={`D-${level}-${index}`}
          position={[0, -slatGap * (index + 1), 0]}
        />
      ))}
    </group>
  );
};

export default BedSlats;
