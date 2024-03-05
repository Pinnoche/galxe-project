import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import icon1 from "@/public/images/download (5).png";
import icon2 from "@/public/images/download (4).png";
import icon3 from "@/public/images/download (3).png";
import icon5 from "@/public/images/icons8-verified-48.png";

const myFont = localFont({
  src: "../../../public/fonts/Mona_Sans/WOFF/Mona-Sans-SemiBoldWide.woff",
});
const inter = Inter({ subsets: ["latin"] });

interface cardprop {
  quote: string;
  point: string;
  nft: string;
  role: string;
  doc: boolean;
  title: string;
  icon: string;
  name: string;
  verify: boolean;
  image: string;
}

function Card({
  quote,
  point,
  nft,
  role,
  doc,
  title,
  icon,
  name,
  verify,
  image,
}: cardprop) {
  return (
    <div className="pt-2  px-2 pb-5 mr-4 bg-black bg-black/70 text-white relative rounded-xl  min-w-[90%] less:mr-2 sm:min-w-[60%] md:min-w-[47%] lg:min-w-[40%] xl:min-w-[31.5%] lg:mx-1.5">
      <div
        className={`flex p-3 mb-5 bg-[#0057ff] rounded-xl text-xs font-semibold relative leading-5  ${myFont.className}`}
      >
        <Image src={icon1} alt="quote 1" width={16} className="h-3 mr-1.5" />
        {quote.length > 70 ? (
          <p className="w-[87%]">{quote.slice(0, 60)}...</p>
        ) : (
          <p className="w-[87%]">{quote}</p>
        )}
        <Image
          src={icon2}
          alt="quote 2"
          width={16}
          className="h-3 absolute bottom-3 right-3"
        />
      </div>
      <div
        className={`px-3 flex items-center justify-between text-xs ${inter.className} font-bold leading-5`}
      >
        <div className="flex w-[87%] flex-wrap">
          <p className="py-1 px-3.5 mr-3 mb-2 w-fit border rounded-2xl border-[hsla(0,0%,100%,.4)]">
            {point}
          </p>
          {nft && (
            <p className="py-1 px-3.5 mr-3 mb-2 w-fit border rounded-2xl border-[hsla(0,0%,100%,.4)]">
              {nft}
            </p>
          )}
          {role && (
            <p className="py-1 px-3.5 mr-3 mb-2 w-fit border rounded-2xl border-[hsla(0,0%,100%,.4)] small:hidden">
              {role}
            </p>
          )}
        </div>
        {doc && <Image src={icon3} width={20} className="h-5" alt="document" />}
      </div>
      <div className="flex small:mb-10 less:mb-12 mb-12 xl:mb-20 px-3.5 relative">
        <p
          className={`mt-6 less:w-[98%] w-[70%] ${
            inter.className
          } font-bold text-base leading-6 ${!image && "w-full"}`}
        >
          {title}
        </p>
        {image ? (
          <Image
            src={image}
            width={98}
            height={118}
            alt=""
            className="h-[7.375rem] absolute rounded-lg right-2 top-1 xl:top-5 less:hidden"
          />
        ) : (
          <></>
        )}
      </div>
      <div className="flex px-3 absolute bottom-5 left-3">
        {icon && (
          <Image
            src={icon}
            height={24}
            width={24}
            alt=""
            className="rounded-full mr-2"
          />
        )}
        <p
          className={`${inter.className} font-normal text-xs pt-0.5 leading-5 text-[#ced3db]`}
        >
          {name}
        </p>
        {{ verify } && (
          <Image
            src={icon5}
            width={16}
            alt="Verified icon"
            className="h-[0.965rem] w-[0.9781rem] mt-1 rounded-full ml-2"
          />
        )}
      </div>
    </div>
  );
}

export default Card;
