"use client";

import { v4 as uuidv4 } from "uuid";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import SliderButton from "@/components/SliderButton";

const Slider = ({
  childrenNumber,
  children,
}: {
  childrenNumber: number;
  children: React.ReactNode;
}) => {
  const [slideState, setSlideState] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null!);
  const [appendItems, setAppendItems] = useState<JSX.Element[]>([]);

  const leftClickedHandler = () => {
    setSlideState((prev) => {
      return parseFloat((prev + 100 + 1.333).toFixed(3));
    });
    setAppendItems((prev) => prev.slice(childrenNumber - 2, prev.length));
  };

  const rightClickedHandler = () => {
    setSlideState((prev) => {
      return parseFloat((prev - 100 - 1.333).toFixed(3));
    });
    append();
  };

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
        <SliderButton addClassName="!-left-5" onClick={leftClickedHandler} />
      )}

      <div className="overflow-x-clip">
        <motion.div
          ref={cardRef}
          className="flex gap-[1.33%] snap-mandatory"
          animate={{
            x: `${slideState}%`,
          }}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          {children}
          {slideState <= 0 && appendItems}
        </motion.div>
      </div>

      <SliderButton
        right
        addClassName="!-right-5"
        onClick={rightClickedHandler}
      />
    </div>
  );
};

export default Slider;
