import { useState } from "react"


function App() {
  let [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style = {{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl " style = {{color : "black"}}>
        <button onClick={()=>setColor("red")}className="outline-none px-4 text-white shadow-lg rounded-3xl" style = {{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>setColor("green")}
        className="outline-none px-4 text-white shadow-lg rounded-3xl" style = {{backgroundColor:"green"}}>Green</button>
        <button onClick={()=>setColor("blue")}className="outline-none px-4 text-white shadow-lg rounded-3xl" style = {{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=>setColor("yellow")}className="outline-none px-4 text-black shadow-lg rounded-3xl" style = {{backgroundColor:"yellow"}}>Yellow</button>
        <button onClick={()=>setColor("black")}className="outline-none px-4 text-white shadow-lg rounded-3xl" style = {{backgroundColor:"black"}}>Black</button>
        <button onClick={()=>setColor("orange")}className="outline-none px-4 text-white shadow-lg rounded-3xl" style = {{backgroundColor:"orange"}}>Orange</button>
        <button onClick={()=>setColor("olive")}className="outline-none px-4 text-white shadow-lg rounded-3xl" style = {{backgroundColor:"olive"}}>Olive</button>
        <button onClick={()=>setColor("lavender")}className="outline-none px-4 text-black shadow-lg rounded-3xl" style = {{backgroundColor:"lavender"}}>Lavender</button>
      </div>
      </div>
    </div>
  )
}

export default App
