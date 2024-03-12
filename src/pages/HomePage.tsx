import MaxWithWrapper from "../components/MaxWithWrapper";
import MainSlider, { ICarouselItem } from "../components/slider/MainSlider";
import SliderCoins, { ISliderCoins } from "../components/slider/SliderCoins";
import { FaBitcoin } from "react-icons/fa";

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

const sliderCoin = [
  {
    id:"1",
    component:  <div className="mt-4 bg-black p-4 flex flex-col  gap-2 rounded-lg w-full">
    <div className=" flex  items-center text-white gap-3">
      <FaBitcoin  className=" text-xl text-yellow-400"/>
      <p>Bitcoin</p>
      <p>BTC/USD</p>
    </div>
    <div className=" flex gap-3 text-white">
      <span className=" font-bold text-xl">USD</span><span className=" text-xl font-bold">46,168.95</span>
    </div>
    <div className=" flex gap-3">
      <span className=" text-gray-200">36,641.20</span> <span className="bg-red-400 rounded-lg px-1">-0.79%</span>
    </div>
  </div>

  },
  {
    id:"2",
    component:  <div className="mt-4 bg-black  p-4 flex flex-col  gap-2 rounded-lg w-full">
    <div className=" flex  items-center text-white gap-3">
      <FaBitcoin  className=" text-xl text-yellow-400"/>
      <p>Bitcoin</p>
      <p>BTC/USD</p>
    </div>
    <div className=" flex gap-3 text-white">
      <span className=" font-bold text-xl">USD</span><span className=" text-xl font-bold">46,168.95</span>
    </div>
    <div className=" flex gap-3">
      <span className=" text-gray-200">36,641.20</span> <span className="bg-red-400 rounded-lg px-1">-0.79%</span>
    </div>
  </div>

  },
  {
    id:"3",
    component:  <div className="mt-4 bg-black  p-4 flex flex-col  gap-2 rounded-lg w-full">
    <div className=" flex  items-center text-white gap-3">
      <FaBitcoin  className=" text-xl text-yellow-400"/>
      <p>Bitcoin</p>
      <p>BTC/USD</p>
    </div>
    <div className=" flex gap-3 text-white">
      <span className=" font-bold text-xl">USD</span><span className=" text-xl font-bold">46,168.95</span>
    </div>
    <div className=" flex gap-3">
      <span className=" text-gray-200">36,641.20</span> <span className="bg-red-400 rounded-lg px-1">-0.79%</span>
    </div>
  </div>

  },
  {
    id:"4",
    component:  <div className="mt-4 bg-black  p-4 flex flex-col  gap-2 rounded-lg w-full">
    <div className=" flex  items-center text-white gap-3">
      <FaBitcoin  className=" text-xl text-yellow-400"/>
      <p>Bitcoin</p>
      <p>BTC/USD</p>
    </div>
    <div className=" flex gap-3 text-white">
      <span className=" font-bold text-xl">USD</span><span className=" text-xl font-bold">46,168.95</span>
    </div>
    <div className=" flex gap-3">
      <span className=" text-gray-200">36,641.20</span> <span className="bg-red-400 rounded-lg px-1">-0.79%</span>
    </div>
  </div>

  },
]

const HomePage = () => {
  return (
    <MaxWithWrapper>
      <MainSlider items={items} />
      <SliderCoins sliderCoin={sliderCoin}/>
    </MaxWithWrapper>
  );
};

export default HomePage;
