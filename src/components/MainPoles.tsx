import Timber from "./Timber";
import timberUtils from "../utils/timber";

const MainPoles = () => {
  const [widthA, ,] = timberUtils.getDimensionsByType("A");
  const [widthB, ,] = timberUtils.getDimensionsByType("B");
  const [widthC, heightC, depthC] = timberUtils.getDimensionsByType("C");

  return (
    <group
      position={[depthC / 2, widthC / 2, heightC / 2]}
      rotation={[0, Math.PI / 2, Math.PI / 2]}
    >
      <Timber name="C-0-01" position={[0, 0, 0]} />
      <Timber name="C-0-02" position={[0, heightC + widthB, 0]} />
      <Timber name="C-0-03" position={[0, 0, widthA + depthC]} />
      <Timber name="C-0-04" position={[0, heightC + widthB, widthA + depthC]} />
    </group>
  );
};

export default MainPoles;
