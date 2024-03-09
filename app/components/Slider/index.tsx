"use client";

import { v4 as uuidv4 } from "uuid";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import SliderButton from "@/components/SliderButton";
import { SliderContextProvider } from "@/context/sliderContext";

const Slider = ({
  className,
  childrenNumber,
  offset,
  children,
}: {
  className?: string;
  childrenNumber: number;
  offset?: number;
  children: React.ReactNode;
}) => {
  const [slideState, setSlideState] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null!);
  const [appendItems, setAppendItems] = useState<JSX.Element[]>([]);
  const [slideDirection, setSlideDirection] = useState("");
  const [slideWidth, setSlideWidth] = useState(100);

  useEffect(() => {
    setSlideWidth(window.innerWidth <= 1024 ? 95 : 100);
    if (slideDirection.includes("right")) {
      leftClickedHandler();
    } else if (slideDirection.includes("left")) {
      rightClickedHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideDirection, slideWidth]);

  const leftClickedHandler = () => {
    setSlideState((prev) => {
      if (prev < 0) {
        return parseFloat(
          (prev + slideWidth + (offset ? offset : 0)).toFixed(3)
        );
      } else {
        return prev;
      }
    });
    setAppendItems((prev) => prev.slice(childrenNumber, prev.length));
  };

  function rightClickedHandler() {
    setSlideState((prev) => {
      return parseFloat((prev - slideWidth - (offset ? offset : 0)).toFixed(3));
    });
    append();
  }

  function append() {
    let itemList: JSX.Element[] = [];
    React.Children.toArray(children)
      .slice(0, childrenNumber)
      .forEach((child) => {
        const duplicate = React.cloneElement(child as JSX.Element, {
          key: uuidv4(),
        });
        itemList.push(duplicate);
      });
    setAppendItems((prev) => prev.concat(itemList));
  }

  return (
    <div className="relative group/parent">
      {slideState < 0 && (
        <SliderButton
          addClassName="!-left-5 tablet:!hidden"
          onClick={leftClickedHandler}
        />
      )}

      <div className="overflow-x-clip">
        <motion.div
          ref={cardRef}
          className={`flex ${className} gap-[1.333%]`}
          animate={{
            x: `${slideState}%`,
          }}
          transition={{
            duration: slideWidth === 95 ? 0.2 : 0.5,
            ease: "linear",
          }}
        >
          <SliderContextProvider
            stateOptions={{ slideDirection, setSlideDirection }}
          >
            {children}
            {slideState <= 0 && appendItems}
          </SliderContextProvider>
        </motion.div>
      </div>

      <SliderButton
        right
        addClassName="!-right-5 tablet:!hidden"
        onClick={rightClickedHandler}
      />
    </div>
  );
};

export default Slider;
