import { Dispatch } from "react";

export interface BedBunkState {
  activeTimber: string;
}

export interface BedBunkContextType {
  state: BedBunkState;
  dispatch: Dispatch<Action>;
}

export const SELECT_ACTIVE_TIMBER = "SELECT_ACTIVE_TIMBER";

interface SelectActiveTimber {
  type: typeof SELECT_ACTIVE_TIMBER;
  payload: string;
}

export type Action = SelectActiveTimber;
