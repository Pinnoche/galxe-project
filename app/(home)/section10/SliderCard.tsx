"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import verifiedIcon from "@/public/images/section10icon1.png";
import rightIcon from "@/public/images/section10icon2.svg";

export interface CardType {
  id?: string;
  name: string;
  image: string;
  verified: boolean;
  active_campaigns: number;
  date: { day: number; month: number; year: number };
  categories: string[];
  backers_icons: string[];
}

const SliderCard = ({
  name,
  image,
  verified,
  active_campaigns,
  date,
  categories,
  backers_icons,
}: CardType) => {
  const parentHoverVariant = {
    hover: {
      transition: {
        ease: "easeOut",
        duration: 0.3,
      },
      y: "-2%",
    },
  };
  const dateObj = new Date();
  const currentDate = [
    dateObj.getDate(),
    dateObj.getMonth() + 1,
    dateObj.getFullYear(),
  ];

  return (
    <motion.div
      whileHover="hover"
      variants={parentHoverVariant}
      className="relative group text-[0.75rem] leading-[1.25rem] flex items-center overflow-hidden rounded-[0.75rem] border border-[hsla(0,0%,100%,.08)] min-w-[24%] md:min-w-[32%] h-[11.975rem] text-white"
    >
      {currentDate[1] === date.month && currentDate[2] === date.year ? (
        <div className="absolute z-[5] px-4 py-[0.1875rem] top-0 left-0 bg-[#00b88d] rounded-[0.625rem_0.25rem]">
          New
        </div>
      ) : (
        <></>
      )}
      <div className="absolute w-full h-full z-[2] bg-left backdrop-blur-[2.5rem] bg-[rgba(15,17,20,.92)]"></div>
      <Image
        className="w-full max-h-[99.3%] max-w-[99.5%] mx-auto"
        src={image}
        alt="card image"
        width={1000}
        height={1000}
      />
      <div className="absolute z-[3] p-[1.25rem] bg-transparent w-full h-full">
        <div className="flex gap-6 mb-[1.5rem]">
          <div className="relative flex">
            <Image
              className="rounded-[50%] min-w-[5.625rem] min-h-[5.625rem]"
              src={image}
              alt="img"
              width={90}
              height={90}
            />
            {verified && (
              <Image
                className="absolute z-[2] right-0 bottom-0"
                src={verifiedIcon}
                alt="verified"
                width={24}
                height={25}
              />
            )}
          </div>
          <div className="flex flex-col basis-[70%] justify-center">
            <div className="leading-[1.5rem] whitespace-nowrap text-[1rem] font-bold">
              {name}
            </div>
            {active_campaigns ? (
              <div className="flex  font-semibold items-center  whitespace-nowrap rounded-[0.375rem] p-[0.375rem_0.75rem] mt-[1.25rem] bg-[hsla(0,0%,100%,.1)]">
                {active_campaigns} campaign
                {active_campaigns > 1 ? "s are " : " is "}
                active!
                <Image
                  className="-translate-x-[0.3125rem] ml-auto group-hover:translate-x-[0.1875rem] transition-all duration-[0.3s] ease-out"
                  src={rightIcon}
                  alt="->"
                  width={12}
                  height={12}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col min-w-[4.75rem]">
            <div className="mb-[0.375rem] text-[#9097a6]">Backers</div>
            <div className="flex">
              {backers_icons.slice(0, 3).map((icon, id) => (
                <Image
                  className="border rounded-[50%] border-white"
                  style={{ transform: `translateX(-${id * 8}px)` }}
                  key={id}
                  src={icon}
                  alt="icon"
                  width={20.4}
                  height={20.4}
                />
              ))}
              {backers_icons.length > 3 ? (
                <div className="relative -translate-x-[1.5rem] flex gap-[0.125rem] items-center justify-center border rounded-[50%] w-[1.275rem] h-[1.275rem] bg-black border-white">
                  <span className="bg-white w-[0.125rem] h-[0.125rem] border rounded-[50%]"></span>
                  <span className="bg-white w-[0.125rem] h-[0.125rem] border rounded-[50%]"></span>
                  <span className="bg-white w-[0.125rem] h-[0.125rem] border rounded-[50%]"></span>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex flex-col w-[70%]">
            <div className="mb-[0.375rem] text-[#9097a6]">Categories</div>
            <div className="whitespace-nowrap overflow-hidden text-ellipsis">
              {categories.join(", ")}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;
