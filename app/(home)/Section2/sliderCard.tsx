"use client";

import Image from "next/image";
import cancel from "@/public/images/cancel.png";
import behind from "@/public/images/foryou-card-bg-pc.70fc951.png";
import CardWrapper from "@/HOC/CardWrapper";
interface CardList {
  tag: string;
  description: string;
  poster: string;
}

interface StaticImagesType {
  behind: string;
  cancel: string;
}

const Card = ({ tag, description, poster }: CardList) => {
  return (
    <CardWrapper className="relative cursor-pointer min-w-[32%] min-h-[16.25rem] p-5 bg-[#1b1e24] rounded-xl mt-4 mb-10 hover:shadow-gray-700 shadow-lg move-up tablet:min-w-[46.5%] phone:min-w-[95%] tablet:!translate-y-0 tablet:shadow-none">
      <div className="absolute rounded-2xl bg-inherit border-2 border-white border-opacity-40 flex items-center justify-center w-[3.125rem] font-bold cursor-pointer top-5 left-5 tablet:text-sm tablet:snap-end tablet:snap-always">
        {tag}
      </div>

      {description.length > 30 ? (
        <p className="absolute top-16 left-5 text-xl font-bold w-[65%] tablet:text-base">
          {description.slice(0, 41)}...
        </p>
      ) : (
        <p className="absolute top-16 left-5 text-xl font-bold w-36">
          {description}
        </p>
      )}
      <div className=" absolute bottom-10 right-3 tablet:bottom-2 phone:bottom-6">
        <Image
          src={poster}
          alt="Poster"
          width={120}
          height={100}
          className={`bg-center  ${
            tag == "OAT" ? "rounded-full" : " "
          } tablet:scale-[0.8] phone:scale-[0.9]`}
        />
      </div>
      <button className="absolute bottom-8 left-5 flex items-center justify-center text-sm bg-blue-700 rounded-lg w-[8.25rem] h-[2.75rem] hover:bg-blue-500 tablet:bottom-5 tablet:w-[6rem] phone:w-[8.25rem] phone:bottom-8">
        Claim
      </button>
      <div className="absolute top-5 right-5 bg-cover z-10">
        <Image src={cancel} alt="Cancel" width={20} height={20} />
      </div>
      <div className=" bg-center absolute bottom-0 right-0">
        <Image src={behind} alt="Behind" width={250} height={100} />
      </div>
    </CardWrapper>
  );
};

export default Card;
