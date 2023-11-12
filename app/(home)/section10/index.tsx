import Slider from "@/components/Slider";
import SliderCard from "./SliderCard";
import data from "./slider.json";
import { CardType } from "./SliderCard";

const Section10 = () => {
  const sortData = () => {
    const dateObj = new Date();
    const currentDate = [
      dateObj.getDate(),
      dateObj.getMonth() + 1,
      dateObj.getFullYear(),
    ];

    const oldData: CardType[] = [];

    const recentData = data.filter((cardData) => {
      if (
        cardData.date.month === currentDate[1] &&
        cardData.date.year === currentDate[2]
      ) {
        return cardData;
      } else {
        oldData.push(cardData);
      }
    });

    return [...recentData, ...oldData];
  };

  const cardGenerator = () =>
    sortData().map((cardData) => {
      return (
        <SliderCard
          key={cardData.id}
          name={cardData.name}
          image={cardData.image}
          verified={cardData.verified}
          active_campaigns={cardData.active_campaigns}
          date={cardData.date}
          categories={cardData.categories}
          backers_icons={cardData.backers_icons}
        />
      );
    });

  return (
    <section className="px-[4.5rem] pb-[4rem] bg-[#0f1114]">
      <div className="flex items-center font-[800] text-white mb-[2.1875rem]">
        <div className="text-[2rem] leading-[2.875rem]">Spaces</div>
        <button className="ml-auto px-6 py-3 text-[0.875rem] rounded-[0.5rem] border-2 border-[#20242b] hover:border-white leading-[1.375rem]">
          View More
        </button>
      </div>
      <Slider className="md:!gap-[1.8%]" childrenNumber={data.length}>
        {cardGenerator()}
      </Slider>
    </section>
  );
};

export default Section10;
