import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl bg-lime-400">Its mine </h1>
      <Card name= "Nidhin"/>
      <Card />
      <Card />
    </>
  );
}

export default App
