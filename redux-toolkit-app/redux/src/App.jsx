import { use } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from './features/counter/counterSlice.js';


function App() {
  
// const [count, setCount] = useState();

const value = useSelector((state) => state.counter.value);
const dispatch = useDispatch();


const handleDecreament = () => {
  dispatch(decrement());
}
const handleIncreament = () => {
  dispatch(increment());
}
const resetCounter = () => {
  dispatch(reset());
}


  return (
    <>
      <h1>Counter</h1>

      <button onClick={handleDecreament}>-</button>
      <input type="number" value={value} placeholder="Enter Number"/>
      <button onClick={handleIncreament}>+</button>
      <button onClick={resetCounter}>Reset</button>
    </>
  )
}

export default App;
