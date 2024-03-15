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
  const { isDarkMode } = useSelector((state: RootState) => state.app);
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
            display: false, // Anpassen der Legende
          },
          title: {
            display: true,
            text: "Price Chart", // Anpassen des Titels
            font: {
              size: 16,
              weight: "bold",
              family: "Arial",
              color: "#333", // Anpassen der Schriftart und -farbe
            },
          },
          tooltip: {
            enabled: true,
            mode: "index",
            intersect: false,
            backgroundColor: "rgba(0,0,0,0.7)",
            titleFont: {
              size: 14,
              weight: "bold",
              family: "Arial",
              color: "#fff", // Anpassen des Tooltipps
            },
          },
        },
        scales: {
          x: {
            display: false,
            grid: {
              color: "#eee", // Anpassen des Gitters
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Price",
              font: {
                size: 14,
                weight: "bold",
                family: "Arial",
                color: "#333", // Anpassen der Achsenbeschriftung
              },
            },
          },
        },
        animations: {
          tension: {
            duration: 1000,
            easing: "linear",
            from: 1,
            to: 0,
            loop: true,
          },
        },
      },
    });
  };

  useEffect(() => {
    if (coin && chartRef.current) {
      renderChart(chartRef.current, coin);
    }
  }, [coin]);

  if (coin) {
    return (
      <div className={`flex justify-center items-rounded w-full gap-3 `}>
        <div className="border-r-2  p-4 w-2/3 ">
          <h1 className="text-4xl font-bold mb-6 text-center">CryptoHunter</h1>
          <div className="flex flex-col items-center gap-2">
            <img src={coin.image} alt="" />
            <p className="text-lg font-semibold">{coin?.name}</p>
            <p className="text-2xl text-center leading-relaxed">
              <span className=" font-FONT_VIGA font-semibold">
                Market_cap_rank:
              </span>{" "}
              {coin?.market_cap_rank}
            </p>
          </div>
          <div className={`flex items-start justify-center mt-8 gap-8`}>
  <div className="flex-1 rounded-lg bg-SECONDARY_ORANGE p-6 shadow-md">
    <p className="text-lg font-semibold mb-4">Name</p>
    <p className="text-lg">{coin?.name}</p>
    <p className="text-lg font-semibold mt-6 mb-4">Symbol</p>
    <p className="text-lg">{coin?.symbol}</p>
    <p className="text-lg font-semibold mt-6 mb-4">Current Price</p>
    <p className="text-lg">{coin?.current_price}$</p>
    <p className="text-lg font-semibold mt-6 mb-4">Market Cap</p>
    <p className="text-lg">{coin?.market_cap}$</p>
    <p className="text-lg font-semibold mt-6 mb-4">Market Cap Rank</p>
    <p className="text-lg">{coin?.market_cap_rank}</p>
    <p className="text-lg font-semibold mt-6 mb-4">Total Volume</p>
    <p className="text-lg">{coin?.total_volume}$</p>
    <p className="text-lg font-semibold mt-6 mb-4">High 24h</p>
    <p className="text-lg">{coin?.high_24h}$</p>
    <p className="text-lg font-semibold mt-6 mb-4">Low 24h</p>
    <p className="text-lg">{coin?.low_24h}$</p>
  </div>
  <div className="flex-1 rounded-lg bg-SECONDARY_ORANGE p-6 shadow-md">
    <p className="text-lg font-semibold mb-4">Price Change 24h</p>
    <p className="text-lg">{coin?.price_change_24h}$</p>
    <p className="text-lg font-semibold mt-6 mb-4">
      Price Change Percentage 24h
    </p>
    <p className="text-lg">{coin?.price_change_percentage_24h}%</p>
    <p className="text-lg font-semibold mt-6 mb-4">
      Market Cap Change 24h
    </p>
    <p className="text-lg">{coin?.market_cap_change_24h}$</p>
    <p className="text-lg font-semibold mt-6 mb-4">
      Market Cap Change Percentage 24h
    </p>
    <p className="text-lg">
      {coin?.market_cap_change_percentage_24h}%
    </p>
    <p className="text-lg font-semibold mt-6 mb-4">
      Circulating Supply
    </p>
    <p className="text-lg">{coin?.circulating_supply}$</p>
    <p className="text-lg font-semibold mt-6 mb-4">Total Supply</p>
    <p className="text-lg">{coin?.total_supply}$</p>
    <p className="text-lg font-semibold mt-6 mb-4">Max Supply</p>
    <p className="text-lg">{coin?.max_supply}$</p>
  </div>
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
