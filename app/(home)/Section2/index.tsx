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
    <section className="bg-[#121212] text-white overflow-x-hidden">
      <div className="mx-16">
        <h1 className="aboslute flex items-center justify-between font-extrabold text-4xl my-6">
          For You
        </h1>
        <Slider className="!gap-[1.8%]" childrenNumber={datas.length}>
          {cardGenerator()}
        </Slider>
      </div>
    </section>
  );
}
