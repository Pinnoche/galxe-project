import Image from "next/image";
import datas from "@/(home)/Section2/Section2data.json";
import cancel from "@/public/images/cancel.png";
import behind from "@/public/images/foryou-card-bg-pc.70fc951.png";

interface CardList {
  tag: string;
  description: string;
  poster: string;
}

interface StaticImages {
  behind: string;
  cancel: string;
}

const Card = ({ tag, description, poster }: CardList) => {
  return (
    <div className="relative cursor-pointer min-w-[32%] min-h-[16.25rem] p-5 bg-[#1b1e24] rounded-xl mt-4 mb-10 hover:shadow-gray-700 shadow-lg move-up">
      <div className="absolute rounded-2xl bg-inherit border-2 border-white border-opacity-40 flex items-center justify-center w-[3.125rem] font-bold cursor-pointer top-5 left-5 ">
        {tag}
      </div>

      {description.length > 30 ? (
        <p className="absolute top-16 left-5 text-xl font-bold w-[65%]">
          {description.slice(0, 41)}...
        </p>
      ) : (
        <p className="absolute top-16 left-5 text-xl font-bold w-36">
          {description}
        </p>
      )}
      <div className=" absolute bottom-10 right-3">
        <Image
          src={poster}
          alt="Poster"
          width={120}
          height={100}
          className={tag == "OAT" ? "bg-center rounded-full" : "bg-center"}
        />
      </div>
      <button className="absolute bottom-8 left-5 flex items-center justify-center text-sm bg-blue-700 rounded-lg w-[8.25rem] h-[2.75rem] hover:bg-blue-500">
        Claim
      </button>
      <div className="absolute top-5 right-5 bg-cover z-10">
        <Image src={cancel} alt="Cancel" width={20} height={20} />
      </div>
      <div className=" bg-center absolute bottom-0 right-0">
        <Image src={behind} alt="Behind" width={250} height={100} />
      </div>
    </div>
  );
};

const CardHolder = () => {
  return datas.map((data: CardList, id: number) => (
    <Card
      key={id}
      tag={data.tag}
      description={data.description}
      poster={data.poster}
    />
  ));
};

export default CardHolder;
