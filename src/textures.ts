import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

import woodTexture from "./assets/textures/wood.jpg";

export const useTextures = () => {
  const wood = useLoader(TextureLoader, woodTexture);
  return { wood };
};
