import { createContext } from "react";

interface stateOptionsType {
  slideDirection: string;
  setSlideDirection: React.Dispatch<React.SetStateAction<string>>;
}

export const context = createContext<stateOptionsType | null>(null);

export const SliderContextProvider = ({
  children,
  stateOptions,
}: {
  children: React.ReactNode;
  stateOptions: stateOptionsType;
}) => {
  return <context.Provider value={stateOptions}>{children}</context.Provider>;
};
