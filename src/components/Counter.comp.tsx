import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
 IncrementFun, DecrementFun, ResetFun
} from "../redux/counter/counters-action";

const mapState = (state:any) => ({
  count:state.count.count
});
const CounterValue = () => {
  //const dispatch = useDispatch();
  const { count } = useSelector(mapState);
  console.log(count);
  const countDispatch = useDispatch();
 
  const handleIncrement = () => {
    countDispatch(IncrementFun());
  };
  const handleDecrement = () => {
    countDispatch(DecrementFun());
  };
  const handleReset = () => {
    countDispatch(ResetFun());
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterValue;
