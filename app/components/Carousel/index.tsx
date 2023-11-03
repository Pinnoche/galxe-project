"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import carouselData from "./carouselData.json";
import arrow from "@/public/images/arrow-black-nomal.319be15.png";
import verifiedIcon from "@/public/images/icons8-verified-16.png";

const Carousel = () => {
  const [carouselItem, setcarouselItem] = useState(1);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonClicked, setButtonClicked] = useState("");
  const [cardHovered, setCardHovered] = useState(false);

  const leftClickHandler = () => {
    setButtonClicked("left");
    if (carouselItem === 1) {
      setcarouselItem(carouselData.length);
    } else {
      setcarouselItem((prev) => prev - 1);
    }
  };

  const rightClickHandler = () => {
    setButtonClicked("right");
    if (carouselItem === carouselData.length) {
      setcarouselItem(1);
    } else {
      setcarouselItem((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const carouselTimer = setInterval(() => {
      cardHovered ? () => {} : buttonRef.current?.click();
    }, 3000);
    return () => {
      clearInterval(carouselTimer);
    };
  }, [cardHovered]);

  return (
    <div className="group/parent max-w-[55%] relative basis-1/2">
      <button
        onMouseEnter={() => setCardHovered(true)}
        onMouseLeave={() => setCardHovered(false)}
        className="invisible opacity-0 group-hover/parent:visible group-hover/parent:opacity-100 [transition:visibility_400ms,opacity_400ms] absolute z-[4] -left-5 top-0 bottom-0 my-auto w-[3.5rem] h-[3.5rem]"
        onClick={leftClickHandler}
      >
        <Image className="" src={arrow} alt="<-" />
      </button>
      <div className="w-[100%] h-[100%] overflow-x-hidden flex">
        {
          <CarouselCards
            carouselItem={carouselItem}
            buttonClicked={buttonClicked}
            cardHovered={cardHovered}
            setCardHovered={setCardHovered}
          />
        }
      </div>
      <button
        onMouseEnter={() => setCardHovered(true)}
        onMouseLeave={() => setCardHovered(false)}
        ref={buttonRef}
        onClick={rightClickHandler}
        className="absolute invisible opacity-0 group-hover/parent:visible group-hover/parent:opacity-100 [transition:visibility_400ms,opacity_400ms] z-[4] -right-5  bottom-0 top-0 my-auto w-[3.5rem] h-[3.5rem]"
      >
        <Image className="rotate-180" src={arrow} alt="->" />
      </button>
    </div>
  );
};

export default Carousel;

const CarouselCards = ({
  carouselItem,
  buttonClicked,
  cardHovered,
  setCardHovered,
}: {
  carouselItem: number;
  buttonClicked: string;
  cardHovered: boolean;
  setCardHovered: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      {carouselData.map((item) => {
        let decrement = () => {
          return carouselItem - 1 === 0
            ? carouselData.length
            : carouselItem - 1;
        };

        let increment = () => {
          return carouselItem + 1 > carouselData.length ? 1 : carouselItem + 1;
        };
        return (
          <div
            onMouseEnter={() => setCardHovered(true)}
            onMouseLeave={() => setCardHovered(false)}
            className={`group self-end relative object-cover flex flex-col px-[0.75rem] pt-[0.75rem] text-white capitalize border-[#262632] border rounded-[0.75rem] shrink-0 grow-0 h-[100%]  ${
              item.id === carouselItem
                ? `w-[32.625rem] h-[24.25rem] -translate-x-[66%] z-[3] -order-[9998]`
                : `w-[28.625rem] h-[22rem] transition-all duration-[5] ease-in`
            } ${
              item.id === decrement()
                ? "order-first"
                : item.id === increment() && `-order-[9997] -translate-x-[150%]`
            }`}
            key={item.id}
          >
            <div className="absolute inset-0 z-[1] backdrop-blur-[1.25rem] rounded-[0.75rem]"></div>
            <Image
              className="z-[0] rounded-[0.75rem]"
              src={item["poster-picture"]}
              alt="background image"
              fill
            />
            <div className="rounded-[0.5rem] mb-[1.25rem] overflow-hidden relative h-[calc(100%-4.75rem)] w-[100%] object-cover z-[2] group-hover:scale-[1.02] transition-all ease-linear">
              <Image
                className=""
                src={item["poster-picture"]}
                alt="poster image"
                fill
              />
            </div>
            <div className="h-[4.75rem] z-[2] px-[0.75rem] flex flex-col justify-center gap-2 pb-[1.25rem]">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-[50%]"
                  src={item.icon}
                  alt="icon"
                  width={24}
                  height={24}
                />
                <span>{item.name}</span>
                {item.verified && (
                  <Image
                    src={verifiedIcon}
                    alt="verified"
                    width={16}
                    height={16}
                  />
                )}
              </div>
              <div className="font-bold leading-[1.5rem] text-[1rem] overflow-hidden">
                {item.caption}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
