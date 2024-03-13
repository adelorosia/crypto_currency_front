import { FaRegStar } from "react-icons/fa";
import { useSelector } from "react-redux";


import { RootState } from "../../feature/store";
import { displayCoins } from "../../feature/reducers/coinSlice";


function TableCoins() {
    const coins = useSelector(displayCoins);
    const {isDarkMode} = useSelector((state:RootState)=>state.app)

    return (
        <div className="overflow-x-auto">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Market Update</h2>
                <button className="bg-PRIMARY_BLUE px-4 py-1 rounded-full text-PRIMARY_WHITE">
                    View All
                </button>
            </div>
            <table className="w-full table-auto ">
                <thead className={`text-sm border-b last:border-b-0 ${isDarkMode ? " border-PRIMARY_WHITE" : " border-PRIMARY_BLACK"}`}>
                    <tr className="w-full text-left py-2 text-xl ">
                      <th></th>
                        <th className="">#</th>
                        <th className="">Name</th>
                        <th className=" ">Last Price</th>
                        <th className=" ">24h %</th>
                        <th className=" ">Market Cap</th>
                        <th className=" ">Chart</th>
                    </tr>
                </thead>
                <tbody className="text-sm ">
                    {coins.slice(0, 10).map((coin) => (
                        <tr className="border-b border-gray-200" key={coin?._id}>
                            <td className="py-2"><FaRegStar /></td>
                            <td className="py-2">{coin?.market_cap_rank}</td>
                            <td className="py-2 flex gap-2 items-center"><img className="w-10 h-10" src={coin?.image} alt="" />{coin.name}</td>

                            <td className="py-2">{coin?.current_price} $</td>
                            <td className={`py-2 ${coin?.market_cap_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>{coin?.market_cap_change_percentage_24h}%</td>
                            <td className="py-2">{coin?.low_24h}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableCoins;
