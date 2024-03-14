import { IoMdCheckmarkCircle } from "react-icons/io";

const HomeJournal = () => {
  return (
    <div className=" font-FONT_VIGA flex flex-col xl:flex-row lg:justify-between px-3 gap-3">
      <div className="flex w-full">
        <img src="/journal.png" alt="" />
      </div>
      <div className=" w-full flex-col place-item-center">
        <h3 className="text-2xl font-bold mb-3">What Is Journal trading</h3>
        <p className="xl:pt-3">
          Journal trading refers to the practice of systematically recording
          trading activities, strategies, outcomes, and emotions during trading
          with financial instruments such as stocks, forex, or cryptocurrencies.
        </p>
        <div className="flex py-6 xl:pt-3 item-start gap-2">
          <IoMdCheckmarkCircle className="text-4xl text-PRIMARY_BLUE" />
          <p>
            Its purpose is to analyze trading performance, identify patterns,
            recognize mistakes, and learn from them to improve trading strategy.
          </p>
        </div>
        <div className="flex py-6 xl:pt-3 item-start gap-2">
          <IoMdCheckmarkCircle className=" text-6xl text-PRIMARY_BLUE" />
          <p className="xl:pt-3">
            A trading journal may include various information such as entry and
            exit points, reasons for the trade, risk and profit targets, market
            conditions, emotional states during trading, and reflections after
            completing a trade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeJournal;
