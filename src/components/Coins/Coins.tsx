import { FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import {  displayCoins, setCoinId } from "../../feature/reducers/coinSlice";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";
import { ICoin } from "../../interface";
import { useNavigate } from "react-router-dom";

function Coins() {
  const coins = useSelector(displayCoins);
  const { isDarkMode } = useSelector((state: RootState) => state.app);
  const chartRefs = useRef<HTMLCanvasElement[]>([]);

  
    const dispatch = useDispatch()
    const navigate = useNavigate()

  const renderChart = (canvas: HTMLCanvasElement, item: ICoin) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Canvas context is not available");
      return;
    }

    if (Chart.getChart(canvas)) {
      Chart.getChart(canvas)!.destroy();
    }

    const sparklineData = item.sparkline_in_7d.price;

    if (sparklineData.length === 0) {
      console.error("Sparkline data is empty");
      return;
    }

    new Chart(ctx, {
      type: "line",
      data: {
        labels: sparklineData.map((_, index) => index + 1),
        datasets: [
          {
            label: "Sparkline",
            data: sparklineData,
            borderColor: sparklineData.map((price, index, array) => {
             
              if (index === 0) return "rgb(255, 99, 132)"; // Rot

            
              const prevPrice = array[index - 1];
              return price > prevPrice
                ? "rgb(75, 192, 192)"
                : "rgb(255, 99, 132)";
            }),
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderWidth: 1.5,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "",
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
      },
    });
  };

  useEffect(() => {
    coins.forEach((item, index) => {
      const canvas = chartRefs.current[index];
      if (canvas) {
        renderChart(canvas, item);
      }
    });
  }, [coins]);

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
            <th className="hidden md:flex ">24h %</th>
            <th className="hidden md:flex ">Market Cap</th>
            <th className=" ">Chart</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {coins.slice(0, 10).map((coin, index) => (
            <tr
              className="border-b last:border-b-0 border-gray-200 cursor-pointer"
              key={coin._id}
              onClick={()=>{
                dispatch(setCoinId(coin.id))
                console.log("dispatch",coin.id)
                navigate(`/coin/${coin.id}`)
                
              }}
            >
              <td className="">
                <FaRegStar />
              </td>
              <td className="">{coin?.market_cap_rank}</td>
              <td className="w-fit">
                <div className="flex gap-1">
                <img className="w-8 h-8 " src={coin?.image} alt="" />
                <div className="flex gap-1 items-center">
                  <p> {coin?.name.slice(0, 10)}</p>
                  <p className=" text-base text-PRIMARY_GRAY">
                    {" "}
                    ({coin?.symbol})
                  </p>
                </div>
                </div>
              </td>

              <td className="">
                {coin?.current_price.toLocaleString(undefined, {
                  maximumFractionDigits: 3,
                })}{" "}
                $
              </td>
              <td
                className={`hidden md:flex ${
                  coin!.market_cap_change_percentage_24h > 0
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
              <td className="w-8">
               
               <canvas
                width={100}
                height={80}
                className=""
                  ref={(el) => el && (chartRefs.current[index] = el)}
                  id={`chart-${coin?.id}`}
                />
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Coins;
