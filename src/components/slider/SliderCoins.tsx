export interface ISliderCoins {
  id: string;
  component: JSX.Element;
}

interface SliderCoinProps {
  sliderCoin: ISliderCoins[];
}

const SliderCoins = ({ sliderCoin }: SliderCoinProps) => {
  return (
   <div className=" flex gap-3">
     <div className="flex w-full" >
      {sliderCoin.map((item, index) => (
        <div className="flex" key={index}>{item.component}</div>
      ))}
    </div>
   </div>
  );
};

export default SliderCoins;
