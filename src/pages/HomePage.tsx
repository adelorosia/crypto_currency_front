import MaxWithWrapper from "../components/MaxWithWrapper";
import MainSlider, { ICarouselItem } from "../components/slider/MainSlider";

import TableCoins from "../components/tableCoins/TableCoins";

import CoinSlider from "../components/slider/CoinSlider";
import { useSelector } from "react-redux";
import { RootState } from "../feature/store";

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
  const {isDarkMode}=useSelector((state:RootState)=>state.app)
  return (
    <MaxWithWrapper>
      <MainSlider items={items} />
      <div className="my-4">
        {" "}
        <CoinSlider />
  
      </div>
      <div className={`mt-4 pt-5 px-5 rounded-md${isDarkMode?"  bg-BLACK":" bg-SECONDARY_WHITE "}`}>
        <TableCoins />
      </div>
    </MaxWithWrapper>
  );
};

export default HomePage;
