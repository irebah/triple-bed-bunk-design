import { TIMBERS } from "../constants";
import { Dimension } from "../types";

const getTymberType = (name: string): string => {
  return name.split("-")[0];
};

const getDimensionsByName = (name: string): Dimension => {
  const timberType = getTymberType(name);

  return TIMBERS.get(timberType) || [1, 1, 1];
};

const getDimensionsByType = (type: string): Dimension => {
  return TIMBERS.get(type) || [1, 1, 1];
};

export default {
  getTymberType,
  getDimensionsByName,
  getDimensionsByType,
};
