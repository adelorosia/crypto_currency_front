import { useSelector } from "react-redux";
import Chart from "chart.js/auto";
import { displayCoin } from "../../feature/reducers/coinSlice";
import { RootState } from "../../feature/store";
import NotFound from "../../pages/NotFoundPage";
import { ICoin } from "../../interface";
import { useEffect, useRef } from "react";

const Coin = () => {
  const { coinId } = useSelector((state: RootState) => state.coins);
  const coin = useSelector((state: RootState) => displayCoin(state, coinId));

  const chartRef = useRef<HTMLCanvasElement>(null);

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
    console.log("Sparkline prices:", sparklineData);
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
              if (index === 0) return "rgb(255, 99, 132)";

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
              display: true,
            },
            y: {
              display: true,
              title: {
                display: true,
                text: "Price",
              }
      },
  }}});
  };

  useEffect(() => {
    if (coin && chartRef.current) {
      renderChart(chartRef.current, coin);
    }
  }, [coin]);

  if (coin) {
    return (
      <div className="flex justify-center items-rounded w-full gap-3">
        <div className="border-r-2 border-gray-300 p-4 w-2/3 ">
          <h1 className="text-4xl font-bold mb-6 text-center">CryptoHunter</h1>
          <div className="flex flex-col items-center gap-2">
            <img src={coin.image} alt="" />
            <p className="text-lg font-semibold">{coin?.name}</p>
            <p className="text-sm text-center leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam
              soluta reiciendis voluptate sint porro, delectus minus deserunt
              veniam alias.
            </p>
          </div>
          <div className="text-lg mt-8">
            <p className="flex items-center">
              <span className="font-semibold mr-2">Rank:</span>
              <span>2</span>
            </p>
            <p className="flex items-center mt-2">
              <span className="font-semibold mr-2">{coin?.current_price}</span>
              <span>$24,000</span>
            </p>
            <p className="flex items-center mt-2">
              <span className="font-semibold mr-2">{coin?.market_cap}</span>
              <span>$24,000,000</span>
            </p>
          </div>
        </div>
        <div className="w-full h-82">
          <canvas
            width={30}
            height={30}
            className=""
            ref={chartRef}
            id={`chart-${coin.id}`}
          />
        </div>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default Coin;
