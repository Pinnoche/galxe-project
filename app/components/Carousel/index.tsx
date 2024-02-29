"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import carouselData from "./carouselData.json";
import verifiedIcon from "@/public/images/icons8-verified-16.png";
import SliderButton from "@/components/SliderButton";

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
    <div className="group/parent max-w-[55%] relative basis-1/2 tablet:max-w-full tablet:w-[80%]">
      <SliderButton
        addClassName="!-left-5 laptop:!left-[1%]"
        onClick={leftClickHandler}
        onMouseEnter={() => setCardHovered(true)}
        onMouseLeave={() => setCardHovered(false)}
      />

      <div className="w-[100%] h-[100%] overflow-x-hidden flex tablet:justify-center">
        {
          <CarouselCards
            carouselItem={carouselItem}
            buttonClicked={buttonClicked}
            cardHovered={cardHovered}
            setCardHovered={setCardHovered}
          />
        }
      </div>

      <SliderButton
        right
        buttonRef={buttonRef}
        addClassName="!-right-5 laptop:!right-[1%]" //
        onClick={rightClickHandler}
        onMouseEnter={() => setCardHovered(true)}
        onMouseLeave={() => setCardHovered(false)}
      />
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
                ? `w-[32.625rem] h-[24.25rem] -translate-x-[66%] z-[3] -order-[9998] laptop:translate-x-[0%] laptop:mx-auto laptop:my-0`
                : `w-[28.625rem] h-[22rem] transition-all duration-[5] ease-in laptop:absolute laptop:z-[2] laptop:inset-0 laptop:hidden`
            } ${
              item.id === decrement()
                ? "order-first"
                : item.id === increment() &&
                  `-order-[9997] -translate-x-[150%] laptop:translate-x-[150%]` //
            } laptop:w-[28.625rem] laptop:h-[100%] tablet:w-[100%] tablet:h-[18rem]`}
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
