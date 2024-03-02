import Card from "./sliderCard";
import datas from "./Section2data.json";
import Slider from "@/components/Slider";

interface CardList {
  tag: string;
  description: string;
  poster: string;
}

export default function Section2() {
  const cardGenerator = () =>
    datas.map((data: CardList, id: number) => (
      <Card
        key={id}
        tag={data.tag}
        description={data.description}
        poster={data.poster}
      />
    ));
  return (
    <section className="bg-[#121212] px-[4.5rem] text-white overflow-x-hidden tablet:px-[5%]">
      <div>
        <h1 className="aboslute flex items-center justify-between font-extrabold text-4xl my-6">
          For You
        </h1>
        <Slider className="!gap-[2%]" childrenNumber={datas.length} offset={2}>
          {cardGenerator()}
        </Slider>
      </div>
    </section>
  );
}
