import { FaRegStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { displayCoins } from "../../feature/reducers/coinSlice";


function TableCoins() {

    const coins = useSelector(displayCoins)
    console.log(coins)
    
  return (
    <div>
      <div className=" flex items-center justify-between">
        <h2>Market Update</h2>
        <button className=" bg-PRIMARY_BLUE px-4 py-1 rounded-full text-PRIMARY_WHITE">
          View All
        </button>
      </div>
      <div>
        <table className=" w-full">
          <thead className="capitalize text-base text-gray-100 font-medium border-b border-gray-100">
            <tr>
              <th className="py-2"></th>
              <th className="py-2">#</th>
              <th className="py-2">Last Price</th>
              <th className="py-2">24h %</th>
              <th className="py-2">Market Cap</th>
              <th className="py-2">Chart</th>
            </tr>
          </thead>
          <tbody>
           {
            coins.slice(0,10).map((coin)=>(
                <tr className="" key={coin._id}>
                <td><FaRegStar /></td>
                <td>{coin?.market_cap_rank}</td>
                <td><img src={coin?.image} alt="" /></td>
                <td>{coin?.current_price}</td>
                <td>{coin?.market_cap_change_percentage_24h}</td>
                <td>{coin?.low_24h}</td>
            </tr>
            ))
           }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableCoins;
