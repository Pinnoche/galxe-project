"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimate, stagger } from "framer-motion";
import Carousel from "@/components/Carousel";
import backgroundImage from "@/public/images/top-bg-img.02ddaa0.png";

import icon1 from "@/public/images/BNB.c511f64.png";
import icon2 from "@/public/images/Polygon.de359fb.png";
import icon3 from "@/public/images/Solana.23a1ca4.png";
import icon4 from "@/public/images/Pancakeswap.67393dd.png";
import icon5 from "@/public/images/Optimism.c54ded5.png";
import icon6 from "@/public/images/e0e543a8-fbd5-4470-81fb-04d138daa31b.png";
import icon7 from "@/public/images/CoinGecko.10872f9.png";
import icon8 from "@/public/images/f8b0321b-aa5d-45aa-8bde-dd43a990bcc7.gif";
import icon9 from "@/public/images/6fd8c84f-bb97-41bf-84f0-24c747cf17f0.png";
import icon10 from "@/public/images/download (1).png";

const Section1 = () => {
  const textAnimate = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const content = Array.from(textAnimate.current.children);
    if (content.length <= 3) {
      content.map((child) => {
        const duplicate = child.cloneNode(true) as Element;
        duplicate.setAttribute("aria-hidden", "true");
        textAnimate.current.append(duplicate);
      });
    }
  }, []);

  return (
    <section className="flex gap-[7%] bg-[#121212] relative px-[4.5rem] pt-[9.375rem] pb-[5.9375rem] [&>div]:z-[3] overflow-x-hidden tablet:flex-col tablet:gap-7 tablet:items-center tablet:px-0 tablet:pb-12">
      <Image
        src={backgroundImage}
        className="absolute bg-[50%] bg-cover inset-0 h-[100%] w-[100%]"
        alt="background image"
        priority
      />
      <div className="flex flex-col gap-10 basis-1/2 laptop:gap-9 tablet:w-[80%]">
        <div className="text-white text-[2.75rem] leading-[4rem] font-[800] laptop:text-[2.55rem] laptop:leading-[3.25rem] tablet:text-center">
          <div className="flex gap-4 tablet:justify-center">
            Earn
            <div className="relative overflow-hidden text-[#0578ff] h-[3.25rem]">
              <motion.div
                ref={textAnimate}
                className=""
                animate={{
                  translateY: [`0%`, `-16.67%`, `-33.33%`, `-50%`],
                }}
                transition={{
                  ease: "easeOut",
                  duration: 6,
                  delay: 1,
                  repeat: Infinity,
                  staggerChildren: 5,
                }}
              >
                <div>Tokens</div>
                <div>OATs</div>
                <div>NFTs</div>
              </motion.div>
            </div>
          </div>
          <p>by Contributing to Your</p>
          <p>Favorite Web3 Community</p>
        </div>
        <div className="flex gap-6 tablet:justify-center phone:flex-wrap">
          {[icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9].map(
            (value, index) => (
              <Image
                key={index}
                className="w-[2rem] h-[2rem] laptop:w-[1.5rem] laptop:h-[1.5rem]"
                src={value}
                height={32}
                width={32}
                alt="icon"
              />
            )
          )}
        </div>
        <div className="flex gap-7 text-[1.125rem] laptop:text-[0.875rem] phone:flex-col phone:items-center">
          <motion.button className="bg-white hover:opacity-[0.6] transition-opacity ease  duration-300 flex gap-3  h-[3.25rem] w-[16.5625rem] text-black rounded-[0.5rem] justify-center items-center font-[800] laptop:h-[3rem] tablet:w-[47%] phone:w-[80%]">
            <span>3k+ Trusted Brands</span>
            <Image src={icon10} alt="icon" width={20} height={20} />
          </motion.button>
          <motion.button className="h-[3.25rem] w-[16.5625rem] bg-[#121212`] hover:opacity-[0.6] transition-opacity duration-300 ease text-white rounded-[0.5rem] font-[800] border-white border-2 laptop:h-[3rem] tablet:ml-auto tablet:w-[47%] phone:w-[80%] phone:ml-0">
            Create Your Space
          </motion.button>
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default Section1;
