import Slider from "@/components/Slider";
import SliderCard from "@/components/SliderCard";
import data from "./slider.json";

const Section5 = () => {
  const cardGenerator = () =>
    data.map((cardData) => {
      return (
        <SliderCard
          key={cardData.id}
          image={cardData.image}
          name={cardData.name}
          module={cardData.module}
          participants={cardData.participants}
          subtext={cardData.subtext}
          details_category={cardData["details-category"]}
          cohost_icons={cardData["cohost-icons"]}
        />
      );
    });

  return (
    <section className="px-[72px] pb-[64px] bg-[#0f1114]">
      <div className="font-[800] mb-[35px] text-white text-[32px] leading-[46px]">
        Mission Web3
      </div>
      <Slider childrenNumber={data.length}>{cardGenerator()}</Slider>
    </section>
  );
};

export default Section5;
