"use client";

import Image from "next/image";
import brushIcon from "@/public/images/brushIcon.png";
import { motion } from "framer-motion";
import CardWrapper from "@/HOC/CardWrapper";
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
    <CardWrapper
      //@ts-ignore
      whileHover="hover"
      variants={parentHoverVariant}
      className="snap-start min-w-[24%] h-[33.75rem] p-[1.25rem] rounded-[0.75rem] text-white bg-[linear-gradient(180deg,#1b1e24,rgba(27,30,36,.65))] tablet:min-w-[46.83%] phone:min-w-[95%] tablet:!translate-y-0"
    >
      <div className="relative object-cover w-[100%] h-[68%] mb-[1.5rem]">
        <Image
          className="rounded-[0.75rem]"
          fill
          src={image}
          alt="module image"
        />
      </div>
      <div className="flex h-[1.725rem]">
        <div className="relative overflow-x-hidden w-[calc(100%-3.75rem)] h-[100%]">
          <motion.div
            variants={childHoverVariant}
            className="absolute top-0 flex gap-2"
          >
            {details_category.map((category, index) => (
              <div
                key={index}
                className="rounded-[62.5rem] py-[0.1875rem] px-[0.875rem] border-[hsla(0,0%,100%,.4)] border font-bold whitespace-nowrap leading-[1.25rem] text-[0.75rem]"
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
      <div className="font-bold leading-[1.5rem] text-[1rem]  mt-[1rem] tablet:text-[0.92rem]">
        Module {module}: {name}
      </div>
      <div className="mt-[0.5rem] text-[#ced3db] leading-[1.375rem] whitespace-nowrap text-[0.875rem] tablet:text-[0.83rem]">
        {subtext}
      </div>
      <div className="flex mt-[0.75rem] tablet:text-[0.9rem]">
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
    </CardWrapper>
  );
};

export default SliderCard;
