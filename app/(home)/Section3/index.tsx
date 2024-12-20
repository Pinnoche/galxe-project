import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import select_icon from "@/public/images/galxe-select-title-icon.0ede882.png";
import Card from "./sliderCard";
import Slider from "@/components/Slider";
import datas from "@/app/(home)/Section3/CardsData.json";
interface card_data {
  id: number;
  quote: string;
  point: string;
  nft: string;
  role: string;
  doc: boolean;
  card_title: string;
  card_icon: string;
  card_name: string;
  verified: boolean;
  card_img: string;
}

function Section3() {
  return (
    <section
      className={
        "bg-sect3 bg-no-repeat bg-fifty bg-hundred pl-7 py-9 w-full xl:pb-16 xl:pt-16 xl:px-[4.5rem] min-w-[320px]"
      }
    >
      <div className={`flex mb-7 xl:mb-8`}>
        <Image
          src={select_icon}
          alt="Galxe Select icon"
          height={28}
          className="mr-4 xl:h-[2.875rem] xl:w-[3.375rem] "
        />
        <p className="text-xl font-extrabold italic text-white xl:text-[2rem] xl:pt-2">
          Galxe Selects
        </p>
      </div>
      <Slider childrenNumber={datas.length} className="!gap-[2%]" offset={2}>
        {datas.map((data: card_data) => (
          <Card
            key={data.id}
            quote={data.quote}
            point={data.point}
            nft={data.nft}
            role={data.role}
            doc={data.doc}
            title={data.card_title}
            icon={data.card_icon}
            name={data.card_name}
            verify={data.verified}
            image={data.card_img}
          />
        ))}
      </Slider>
    </section>
  );
}

export default Section3;
