import { useState } from "react"


function App() {
  const [color,setcolor] = useState("olive")
  const [count, setCount] = useState(0)

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
      <button 
      onClick={()=>setcolor("red")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"red"}}

      
      >RED</button>
       <button 
       onClick={()=>setcolor("yellow")}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"yellow"}}

      
      >YELLOW</button>
       <button
       onClick={()=>setcolor("green")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"green"}}

      
      >GREEN</button>
       <button
       onClick={()=>setcolor("black")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"black"}}

      
      >BLACK</button>
       <button
       onClick={()=>setcolor("purple")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"purple"}}

      
      >PURPLE</button>
       <button
       onClick={()=>setcolor("pink")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"pink"}}

      
      >PINK</button>
      </div>
   </div>
   </div>
  )
}

export default App
