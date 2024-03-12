import MaxWithWrapper from "../components/MaxWithWrapper";
import MainSlider, { ICarouselItem } from "../components/slider/MainSlider";

const items: ICarouselItem[] = [
  {
    id: "1",
    image: "/bild1.jpg",
  },
  {
    id: "2",
    image: "/bild2.jpg",
  },
  {
    id: "3",
    image: "/bild2.jpg",
  },
  {
    id: "4",
    image: "/bild2.jpg",
  },
  {
    id: "5",
    image: "/bild2.jpg",
  },
];

const HomePage = () => {
  return (
    <MaxWithWrapper>
      <MainSlider items={items} />
    </MaxWithWrapper>
  );
};

export default HomePage;
