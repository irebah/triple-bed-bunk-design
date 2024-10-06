import { Action, BedBunkState, SELECT_ACTIVE_TIMBER } from "./types";

const reducer = (state: BedBunkState, action: Action): BedBunkState => {
  switch (action.type) {
    case SELECT_ACTIVE_TIMBER:
      return {
        ...state,
        activeTimber: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
};

export default reducer;
