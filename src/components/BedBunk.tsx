import BedFrame from "./BedFrame";
import MainPoles from "./MainPoles";
import StairLevel2 from "./StairLevel2";
import StairLevel3 from "./StairLevel3";

const BedBunk = () => {
  return (
    <>
      <BedFrame />
      <BedFrame level={0.8} shortGuardrail />
      <BedFrame level={1.6} fullGuardrail />
      <MainPoles />
      <StairLevel2 />
      <StairLevel3 />
    </>
  );
};

export default BedBunk;
