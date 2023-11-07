"use client";

import Image from "next/image";
import brushIcon from "@/public/images/brushIcon.png";
import { motion } from "framer-motion";

interface CardType {
  image: string;
  module: string;
  name: string;
  participants: number;
  subtext: string;
  details_category: string[];
  cohost_icons: string[];
}

const SliderCard = ({
  image,
  module,
  name,
  participants,
  subtext,
  details_category,
  cohost_icons,
}: CardType) => {
  const childHoverVariant = {
    hover: {
      transition: {
        ease: "linear",
        duration: 6,
        repeat: Infinity,
      },
      x: ["0%", "-100%"],
    },
  };

  const parentHoverVariant = {
    hover: {
      transition: {
        ease: "easeIn",
        duration: 0.3,
      },
      y: "-1.5%",
    },
  };

  return (
    <motion.div
      whileHover="hover"
      variants={parentHoverVariant}
      className="snap-start min-w-[24%] h-[540px] p-[20px] rounded-[12px] text-white bg-[linear-gradient(180deg,#1b1e24,rgba(27,30,36,.65))]"
    >
      <div className="relative object-cover w-[100%] h-[68%] mb-[24px]">
        <Image className="rounded-[12px]" fill src={image} alt="module image" />
      </div>
      <div className="flex h-[27.6px]">
        <div className="relative overflow-x-hidden w-[calc(100%-60px)] h-[100%]">
          <motion.div
            variants={childHoverVariant}
            className="absolute top-0 flex gap-2"
          >
            {details_category.map((category, index) => (
              <div
                key={index}
                className="rounded-[1000px] py-[3px] px-[14px] border-[hsla(0,0%,100%,.4)] border font-bold whitespace-nowrap leading-[20px] text-[12px]"
              >
                {category}
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex ml-auto">
          <Image src={brushIcon} alt="icon" width={20} height={19} />
          <Image src={brushIcon} alt="icon" width={20} height={19} />
          <Image src={brushIcon} alt="icon" width={20} height={19} />
        </div>
      </div>
      <div className="font-bold leading-[24px] text-[16px]  mt-[16px]">
        Module {module}: {name}
      </div>
      <div className="mt-[8px] text-[#ced3db] leading-[22px] whitespace-nowrap text-[14px]">
        {subtext}
      </div>
      <div className="flex mt-[12px]">
        <div>{participants.toLocaleString()} participants</div>
        <div className="flex gap-2 ml-auto">
          {cohost_icons.map((icon, index) => (
            <Image
              key={index}
              src={icon}
              alt="co-host icon"
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;
