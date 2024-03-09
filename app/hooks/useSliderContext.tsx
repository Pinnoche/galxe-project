import { useContext } from "react";
import { context } from "@/context/sliderContext";

export const useSliderContext = () => {
  const sliderContext = useContext(context);
  if (!sliderContext?.setSlideDirection && !sliderContext?.slideDirection) {
    console.error("context does not exist in this scope");
  }
  return {
    slideDirection: sliderContext!.slideDirection,
    setSlideDirection: sliderContext!.setSlideDirection,
  };
};
