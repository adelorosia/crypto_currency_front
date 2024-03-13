import { FaRegStar } from "react-icons/fa";
import { useSelector } from "react-redux";

import { RootState } from "../../feature/store";
import { displayCoins } from "../../feature/reducers/coinSlice";

function TableCoins() {
  const coins = useSelector(displayCoins);
  const { isDarkMode } = useSelector((state: RootState) => state.app);

  return (
    <div className="overflow-x-auto font-bold">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-2xl font-FONT_VIGA">Market Update</h2>
        <button className="bg-PRIMARY_BLUE px-4 py-1 rounded-full text-PRIMARY_WHITE">
          View All
        </button>
      </div>
      <table className="w-full table-auto ">
        <thead
          className={`text-sm border-b  ${
            isDarkMode ? " border-PRIMARY_WHITE" : " border-PRIMARY_BLACK"
          }`}
        >
          <tr className="w-full text-left  text-xl ">
            <th></th>
            <th className="">#</th>
            <th className="">Name</th>
            <th className=" ">Last Price</th>
            <th className=" hidden">24h %</th>
            <th className="hidden ">Market Cap</th>
            <th className="hidden ">Chart</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {coins.slice(0, 10).map((coin?) => (
            <tr className="border-b last:border-b-0 border-gray-200" key={coin?._id}>
              <td className="">
                <FaRegStar />
              </td>
              <td className="">{coin?.market_cap_rank}</td>
              <td className=" flex gap-2 items-center">
                <img className="w-10 h-10 my-2" src={coin?.image} alt="" />
               <div className="flex gap-1 items-center">
               <p> {coin?.name.slice(0,10)}</p>
               <p className=" text-base text-PRIMARY_GRAY"> ({coin?.symbol})</p>
               </div>
              </td>

              <td className="">{coin?.current_price.toLocaleString(undefined,{maximumFractionDigits:3})} $</td>
              <td
                className={`hidden ${
                  coin?.market_cap_change_percentage_24h! > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {coin?.market_cap_change_percentage_24h.toLocaleString(
                  undefined,
                  { maximumFractionDigits: 3 }
                )}
                %
              </td>
              <td className="py-2 hidden">{coin?.low_24h.toLocaleString(undefined,{maximumFractionDigits:3})}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableCoins;
