import Slider from "@/components/Slider";
import SliderCard from "./SliderCard";
import data from "./slider.json";

const Section4 = () => {
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
    <section className="px-[4.5rem] pb-[4rem] bg-[#0f1114] tablet:pl-[5%] tablet:pr-0">
      <div className="font-[800] mb-[2.1875rem] text-white text-[2rem] leading-[2.875rem] pt-7  tablet:text-[1.7rem] tablet:leading-[1.75rem] tablet:mb-7">
        Mission Web3
      </div>
      <Slider childrenNumber={data.length} offset={1.333}>
        {cardGenerator()}
      </Slider>
    </section>
  );
};

export default Section4;
