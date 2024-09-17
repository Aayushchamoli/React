import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username: "ayush",
    age:21
  }
  let newarr=[1,2,3,4,5,6]

  return (
    <>
     <h1 className = 'bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
     <card channel='chaia ur react' btnText="click me" />
     <card/>

    </>
  ) 
}

export default App
