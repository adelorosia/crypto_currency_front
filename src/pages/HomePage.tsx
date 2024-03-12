import MaxWithWrapper from "../components/MaxWithWrapper";
import  MainSlider, { ICarouselItem } from "../components/slider/MainSlider";


import SliderCoins from "../components/slider/SliderCoins";

const items: ICarouselItem[] = [
  {
    id: "1",
    image: "/banner1.png",
  },
  {
    id: "2",
    image: "/banner2.png",
  },
  {
    id: "3",
    image: "/banner1.png",
  },
  {
    id: "4",
    image: "/banner2.png",
  },
];

const HomePage = () => {
  return (
    <MaxWithWrapper>
      <MainSlider items={items} />
      <SliderCoins />
    </MaxWithWrapper>
  );
};

export default HomePage;
