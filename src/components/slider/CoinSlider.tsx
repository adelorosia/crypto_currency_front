import { useState } from "react";
import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import { displayCoins } from "../../feature/reducers/coinSlise";

const CoinSlider = () => {
  const coins = useSelector(displayCoins);
  const [_, setActiveIndex] = useState(0);
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
      {coins.map((coin) => (
        <div className=" flex pr-1 last:mr-0" key={coin.id}>
          <div className=" coin-slider-theme p-4 flex flex-col rounded-lg w-full gap-2">
            <div className="flex items-center  gap-3">
              <img className="w-10 h-10" src={coin.image} alt="" />
              <p>{coin.name}</p>
              <p>{coin.symbol}</p>
            </div>
            <div className="flex gap-3 ">
              <span className="font-bold text-xl"></span>
              <span className="text-xl font-bold">{coin.current_price}</span>
            </div>
            <div className="flex gap-3">
              <span className="">36,641.20</span>{"USD"}
              <span className={`rounded-lg px-1 ${coin.price_change_24h<0?"bg-PRIMARY_RED":" bg-green-600"}`}>
                {coin.price_change_24h}
              </span>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CoinSlider;
