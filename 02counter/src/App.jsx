import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incremet = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);


    setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    console.log("incremet");
  }

  const decrement = () => {
    setCount(count- 1);
   console.log("decrement");

  }

  return (
    <>
      <h1> Counter : {count} </h1>
      <button onClick={incremet}>incremet</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
}

export default App
