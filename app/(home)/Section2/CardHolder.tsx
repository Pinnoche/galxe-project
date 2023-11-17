import Image from "next/image";
import cancel from "@/public/images/cancel.png";
import behind from "@/public/images/foryou-card-bg-pc.70fc951.png";

interface CardList {
  id: number;
  identifier: string;
  description: string;
  poster: string;
  cancel: string;
  behind: string;
}

interface dataProps {
  data: Card[];
}

function CardHolder({ data }: dataProps) {
  return (
    <div className="all card holder w-full h-[16.25rem] overflow-x-auto cursor-pointer">
      {data.map((card) => (
        <div
          className="CARD relative cursor-pointer w-[29rem] h-full min-h-[0.0625rem] p-5 bg-[#1b1e24] rounded-xl m-4"
          key={card.id}
        >
          <div className="absolute rounded-2xl bg-inherit border-2 border-white border-opacity-40 flex items-center justify-center w-[50px] font-bold cursor-pointer top-5 left-5 ">
            {card.identifier}
          </div>

          <p className="absolute top-16 left-5 text-2xl font-bold w-36 truncate">
            {card.description}
          </p>
          <div className=" absolute bottom-10 right-3">
            <Image
              src={card.poster}
              alt="Poster"
              width={120}
              height={100}
              className={
                card.identifier == "OAT"
                  ? "bg-center rounded-full"
                  : "bg-center"
              }
            />
          </div>
          <button className="absolute bottom-8 left-5 flex items-center justify-center text-sm bg-blue-600 rounded-lg w-[8.25rem] h-[2.75rem]">
            Claim
          </button>
          <div className="absolute top-5 right-5 bg-cover z-10">
            <Image src={cancel} alt="Cancel" width={20} height={20} />
          </div>
          <div className=" bg-center absolute bottom-0 right-0">
            <Image src={behind} alt="Behind" width={250} height={100} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardHolder;
