import Timber from "./Timber";
import timberUtils from "../utils/timber";

interface Props {
  level?: number;
}

const BedSlats = ({ level = 0 }: Props) => {
  const [widthA, , depthA] = timberUtils.getDimensionsByType("A");

  const numberSlats = 10;

  return (
    <group position={[depthA, -0.3, 0]}>
      {[...Array(numberSlats).keys()].map((index) => (
        <Timber
          key={index}
          name={`D-${level}-${index}`}
          position={[0, -(widthA / numberSlats) * (index - 1), 0]}
        />
      ))}
    </group>
  );
};

export default BedSlats;
