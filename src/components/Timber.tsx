import { MeshProps, ThreeEvent } from "@react-three/fiber";

import { useTextures } from "../textures";
import timberUtils from "../utils/timber";
import { useBedBunkProvider } from "../context/BedBunkContext";
import { SELECT_ACTIVE_TIMBER } from "../context/BedBunkContext/types";
import { Edges } from "@react-three/drei";

interface Props extends MeshProps {
  name: string;
}

const Timber = ({ name, ...props }: Props) => {
  const { wood } = useTextures();
  const { state, dispatch } = useBedBunkProvider();

  const isActive = (): boolean => {
    const timberType = timberUtils.getTymberType(name);
    const activeTimberType = timberUtils.getTymberType(state.activeTimber);

    return activeTimberType === timberType;
  };

  const onTimberClicked = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    dispatch({
      type: SELECT_ACTIVE_TIMBER,
      payload: name,
    });
  };

  return (
    <mesh castShadow receiveShadow {...props} onClick={onTimberClicked}>
      <boxGeometry args={timberUtils.getDimensionsByName(name)} />
      {isActive() && <meshStandardMaterial color="red" />}
      {!isActive() && <meshStandardMaterial map={wood} />}
      <Edges color="black" />
    </mesh>
  );
};

export default Timber;
