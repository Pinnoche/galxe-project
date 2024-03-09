import { PanInfo, motion } from "framer-motion";
import { useSliderContext } from "@/hooks/useSliderContext";

interface CardWrapperType {
  children: React.ReactNode;
  className: string;
}

export default function CardWrapper({
  children,
  className,
  ...props
}: CardWrapperType) {
  const slideOptions = useSliderContext();
  const dragHandler = (event: MouseEvent | TouchEvent | PointerEvent) => {
    //@ts-ignore
    console.log(event);
    //@ts-ignore
    const directionValue = event.movementX;
    if (directionValue > 0) {
      //@ts-ignore
      slideOptions.setSlideDirection(`right${event.pointerId}`);
    } else if (directionValue < 0) {
      //@ts-ignore
      slideOptions.setSlideDirection(`left${event.pointerId}`);
    }
  };

  return (
    <motion.div
      className={className}
      {...props}
      drag="x"
      dragConstraints={{ left: -1, right: 1 }}
      onDragStart={dragHandler}
    >
      {children}
    </motion.div>
  );
}
