"use client"
import Counter from "./example1";
import Timer from "./example2";
import useCustom from "./example3";

export default function Home(){
  const { count, increment, decrement, reset} = useCustom(10);

  return(
    <div>
      <Counter/>
      <Timer/>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}