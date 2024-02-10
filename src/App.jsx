import { useState } from 'react'
import './App.css'

function App() {
  const [random,setRandom] = useState("0");
  function generateNum() {
    setRandom(Math.floor(Math.random() * 100));
  }
  return (
    <>
      <div>
        <h3>Random Number Generator</h3>
        <p>{random}</p>
        <button onClick={generateNum}>click</button>
      </div>
    </>
  )
}

export default App
