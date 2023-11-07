import Image from "next/image";
import arrow from "@/public/images/arrow-black-nomal.319be15.png";

interface SliderButtonType {
  right?: boolean;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  addClassName?: string;
  onClick: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const SliderButton = ({
  right,
  buttonRef,
  addClassName,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: SliderButtonType) => {
  return (
    <button
      ref={buttonRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => onMouseLeave}
      className={`invisible opacity-0 group-hover/parent:visible group-hover/parent:opacity-100 [transition:visibility_400ms,opacity_400ms] absolute z-[4] top-0 bottom-0 my-auto w-[3.5rem] h-[3.5rem] ${addClassName}`}
      onClick={onClick}
    >
      <Image className={right ? "rotate-180" : ""} src={arrow} alt="arrow" />
    </button>
  );
};

export default SliderButton;
