import { createContext, ReactNode, useContext, useReducer } from "react";
import { BedBunkContextType } from "./types";
import reducer from "./reducer";
import initialState from "./initialState";

export const BedBunkContext = createContext<BedBunkContextType | undefined>(
  undefined
);

export const BedBunkProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactNode => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BedBunkContext.Provider value={{ state, dispatch }}>
      {children}
    </BedBunkContext.Provider>
  );
};

export const useBedBunkProvider = () => {
  const context = useContext(BedBunkContext);
  if (!context) {
    throw new Error("useBedBunkProvider must be used within a BedBunkProvider");
  }
  return context;
};
