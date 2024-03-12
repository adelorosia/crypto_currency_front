import { useState } from "react";
import { FaBitcoin } from "react-icons/fa";
import Carousel from "react-multi-carousel";

export interface ISliderCoins {
  id: string;
  component: JSX.Element;
}

const sliderCoin: ISliderCoins[] = [
  {
    id: "1",
    component: (
      <div className="mt-4 bg-black p-4 flex flex-col gap-2 rounded-lg w-full">
        <div className="flex items-center text-white gap-3">
          <FaBitcoin className="text-xl text-yellow-400" />
          <p>Bitcoin</p>
          <p>BTC/USD</p>
        </div>
        <div className="flex gap-3 text-white">
          <span className="font-bold text-xl">USD</span>
          <span className="text-xl font-bold">46,168.95</span>
        </div>
        <div className="flex gap-3">
          <span className="text-gray-200">36,641.20</span>{" "}
          <span className="bg-red-400 rounded-lg px-1">-0.79%</span>
        </div>
      </div>
    ),
  },
  {
    id: "2",
    component: (
      <div className="mt-4 bg-black p-4 flex flex-col gap-2 rounded-lg w-full">
        <div className="flex items-center text-white gap-3">
          <FaBitcoin className="text-xl text-yellow-400" />
          <p>Bitcoin</p>
          <p>BTC/USD</p>
        </div>
        <div className="flex gap-3 text-white">
          <span className="font-bold text-xl">USD</span>
          <span className="text-xl font-bold">46,168.95</span>
        </div>
        <div className="flex gap-3">
          <span className="text-gray-200">36,641.20</span>{" "}
          <span className="bg-red-400 rounded-lg px-1">-0.79%</span>
        </div>
      </div>
    ),
  },
  {
    id: "3",
    component: (
      <div className="mt-4 bg-black p-4 flex flex-col gap-2 rounded-lg w-full">
        <div className="flex items-center text-white gap-3">
          <FaBitcoin className="text-xl text-yellow-400" />
          <p>Bitcoin</p>
          <p>BTC/USD</p>
        </div>
        <div className="flex gap-3 text-white">
          <span className="font-bold text-xl">USD</span>
          <span className="text-xl font-bold">46,168.95</span>
        </div>
        <div className="flex gap-3">
          <span className="text-gray-200">36,641.20</span>{" "}
          <span className="bg-red-400 rounded-lg px-1">-0.79%</span>
        </div>
      </div>
    ),
  },
  {
    id: "4",
    component: (
      <div className="mt-4 bg-black p-4 flex flex-col gap-2 rounded-lg w-full">
        <div className="flex items-center text-white gap-3">
          <FaBitcoin className="text-xl text-yellow-400" />
          <p>Bitcoin</p>
          <p>BTC/USD</p>
        </div>
        <div className="flex gap-3 text-white">
          <span className="font-bold text-xl">USD</span>
          <span className="text-xl font-bold">46,168.95</span>
        </div>
        <div className="flex gap-3">
          <span className="text-gray-200">36,641.20</span>{" "}
          <span className="bg-red-400 rounded-lg px-1">-0.79%</span>
        </div>
      </div>
    ),
  },
];
const CustomDot = ({ onClick, active }: any) => (
    <button
      className={`w-2 h-2 rounded-full focus:outline-none m-2 ${
        active ? " bg-PRIMARY_RED" : " bg-SECONDARY_GRAY"
      }`}
      onClick={onClick}
    ></button>
  );

const SliderCoins = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      renderButtonGroupOutside
      className=" flex gap-2 items-center justify-between w-full"
      arrows={true}
      draggable={true}
      customDot={<CustomDot />}
      showDots
      additionalTransfrom={0}
            beforeChange={(nextSlide) => setActiveIndex(nextSlide)}
    >
      
        
        {sliderCoin.map((item) => (
            <div className=" flex " style={{margin:"0 8px"}} key={item.id}>
              {item.component}
            </div>))}
       
     
    </Carousel>
  );
};

export default SliderCoins;

   