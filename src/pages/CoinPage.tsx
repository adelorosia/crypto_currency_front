import { useDispatch } from "react-redux";
import Coin from "../components/Coins/Coin";

import Coins from "../components/Coins/Coins";
import { useParams } from "react-router-dom";
import {  setCoinId } from "../feature/reducers/coinSlice";
import { useEffect } from "react";
import MaxWithWrapper from "../components/MaxWithWrapper";


const CoinPage = () => {
  const  {coinId}  = useParams()
console.log("coinPage coinId",coinId)
  const dispatch = useDispatch();

useEffect(()=>{
dispatch(setCoinId(coinId))
},[dispatch,coinId]) 
  return (
    <MaxWithWrapper>
     {coinId === undefined ? <Coins /> : <Coin/>} 
      {/* <Coins> ||< <Coin> */}
    
    </MaxWithWrapper>
  );
};

export default CoinPage;
