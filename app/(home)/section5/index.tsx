import Slider from "@/components/Slider";
import SliderCard from "./SliderCard";
import data from "./slider.json";
import { CardType } from "./SliderCard";

const Section5 = () => {
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
    <section className="px-[4.5rem] pb-[4rem] bg-[#0f1114] relative tablet:pb-[5rem] tablet:pl-[5%] tablet:pr-0">
      <div className="flex items-center font-[800] text-white mb-[2.1875rem] tablet:mb-7">
        <div className="text-[2rem] leading-[2.875rem]   tablet:text-[1.7rem] tablet:leading-[1.75rem]">
          Spaces
        </div>
        <button className="ml-auto px-6 py-3 text-[0.875rem] rounded-[0.5rem] border-2 border-[#20242b] hover:border-white leading-[1.375rem] tablet:absolute tablet:w-[90%] tablet:mx-auto tablet:right-0  tablet:left-0 tablet:bottom-[1rem]">
          View More
        </button>
      </div>
      <Slider className="!gap-[2%]" childrenNumber={data.length} offset={2}>
        {cardGenerator()}
      </Slider>
    </section>
  );
};

export default Section5;
