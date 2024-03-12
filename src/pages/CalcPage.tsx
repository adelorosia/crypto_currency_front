import { useSelector } from "react-redux";
import MaxWithWrapper from "../components/MaxWithWrapper";
import Calc from "../components/calc/Calc";
import TradingViewWidget from "../components/tradingview/TradingView";
import { RootState } from "../feature/store";


import { useEffect, useState } from "react";
import { displayUser } from "../feature/reducers/authSlice";
import ForbiddenPage from "./ForbiddenPage";

const CalcPage = () => {
  
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  console.log("userId", userId);
  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
  });
  const user = useSelector((state: RootState) => displayUser(state, userId!));
  console.log("user", user);

  if (user?.isAccountVerified) {
    return (
      <MaxWithWrapper className=" min-h-screen mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-4">
            <Calc />
          </div>
          <div className="lg:col-span-8">
            <TradingViewWidget />
          </div>
        </div>
      </MaxWithWrapper>
    );
  } else {
    return (
      <MaxWithWrapper className="flex justify-center items-center w-full h-screen">
        <ForbiddenPage />
      </MaxWithWrapper>
    );
  }
};

export default CalcPage;
