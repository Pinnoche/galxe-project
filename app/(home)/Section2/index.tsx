import data from "./Section2data.json";

import CardHolder from "./CardHolder";
interface dataProps {
  data: Card[];
}
export default function Section2() {
  return (
    <section className="bg-[#121212] text-white overflow-hidden">
      <div className="relative mx-16 w-full">
        <h1 className="aboslute flex items-center justify-between font-extrabold text-2xl my-6 ml-4">
          For You
        </h1>
        <CardHolder data={data} />
      </div>
    </section>
  );
}
