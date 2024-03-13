import { useState } from "react";
import { FaBitcoin } from "react-icons/fa";
import Carousel from "react-multi-carousel";

export interface ISliderCoins {
  id: string;
  component: JSX.Element;
}

const CoinListSlider: ISliderCoins[] = [
  {
    id: "1",
    component: (
      <div className=" coin-slider-theme p-4 flex flex-col  rounded-lg w-full gap-2">
        <div className="flex items-center  gap-3">
          <FaBitcoin className="text-xl text-yellow-400" />
          <p>Bitcoin</p>
          <p>BTC/USD</p>
        </div>
        <div className="flex gap-3  ">
          <span className="font-bold text-xl">USD</span>
          <span className="text-xl font-bold">46,168.95</span>
        </div>
        <div className="flex gap-3">
          <span className="">36,641.20</span>{" "}
          <span className="bg-PRIMARY_RED rounded-lg px-1">-0.79%</span>
        </div>
      </div>
    ),
  },
  {
    id: "2",
    component: (
      <div className=" coin-slider-theme p-4 flex flex-col  rounded-lg w-full gap-2">
        <div className="flex items-center  gap-3">
          <FaBitcoin className="text-xl text-yellow-400" />
          <p>Bitcoin</p>
          <p>BTC/USD</p>
        </div>
        <div className="flex gap-3 ">
          <span className="font-bold text-xl">USD</span>
          <span className="text-xl font-bold">46,168.95</span>
        </div>
        <div className="flex gap-3">
          <span className="">36,641.20</span>{" "}
          <span className="bg-PRIMARY_RED rounded-lg px-1">-0.79%</span>
        </div>
      </div>
    ),
  },
  {
    id: "3",
    component: (
      <div className=" coin-slider-theme p-4 flex flex-col  rounded-lg w-full gap-2">
        <div className="flex items-center  gap-3">
          <FaBitcoin className="text-xl text-yellow-400" />
          <p>Bitcoin</p>
          <p>BTC/USD</p>
        </div>
        <div className="flex gap-3 ">
          <span className="font-bold text-xl">USD</span>
          <span className="text-xl font-bold">46,168.95</span>
        </div>
        <div className="flex gap-3">
          <span className="">36,641.20</span>{" "}
          <span className="bg-PRIMARY_RED rounded-lg px-1">-0.79%</span>
        </div>
      </div>
    ),
  },
  {
    id: "4",
    component: (
      <div className=" coin-slider-theme p-4 flex flex-col rounded-lg w-full gap-2">
        <div className="flex items-center  gap-3">
          <FaBitcoin className="text-xl text-yellow-400" />
          <p>Bitcoin</p>
          <p>BTC/USD</p>
        </div>
        <div className="flex gap-3 ">
          <span className="font-bold text-xl">USD</span>
          <span className="text-xl font-bold">46,168.95</span>
        </div>
        <div className="flex gap-3">
          <span className="">36,641.20</span>{" "}
          <span className="bg-PRIMARY_RED rounded-lg px-1">-0.79%</span>
        </div>
      </div>
    ),
  },
];


const SliderCoins = () => {
    const [_,setActiveIndex] = useState(0);
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
      className=" flex items-center justify-between w-full"
      arrows={true}
      draggable={true}
      additionalTransfrom={0}
            beforeChange={(nextSlide) => setActiveIndex(nextSlide)}
    >
      
        
        {CoinListSlider.map((item) => (
            <div className=" flex pr-1 last:mr-0"  key={item.id}>
              {item.component}
            </div>))}
       
     
    </Carousel>
  );
};

export default SliderCoins;

   