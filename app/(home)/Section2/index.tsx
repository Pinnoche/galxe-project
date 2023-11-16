import Image from "next/image";
import cancel from "@/public/images/cancel.png";
import sui from "@public/images/sui-daily.webp";
export default function Section2() {
  return (
    <section className=" bg-gradient-to-b from-slate-900 via-gray-900 to-gray-600 max-w-[128rem] text-white overflow-hidden">
      <div className="relative">
        <h1 className="flex items-center justify-between font-extrabold text-2xl my-6">
          For You
        </h1>

        <div className="all card holder w-[25000px]">
          <div className="CARD relative cursor-pointer w-[456px] h-96 bg-gradient-to-t from-gray-900 via-transparent to-gray-900 rounded-t-lg rounded-b-md border-2">
            <div className="relative rounded-2xl bg-inherit border-2 border-white border-opacity-40 flex items-center justify-center max-w-[200px] font-bold cursor-pointer">
              OAT
            </div>
            <div className="absolute top-5 right-5 bg-cover z-10">
              <Image
                src={cancel}
                alt="Cancel"
                width={20}
                height={20}
                priority
              />
            </div>
            <p className="absolute top-10 left-5 text-2xl font-bold w-36">
              Sui Daily x Tradeify
            </p>
            <div className="absolute z-1 bg-center">
              <Image src={sui} alt="sui" width={100} height={100} priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
