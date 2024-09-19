import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const[numberallowed,setnumberallowed]=useState(false)
  const [charallowed,setcharallowed]=useState(false)
  const [password,setpassword]=useState("")


  const passwordref=useRef(null)

  const passwordgene =useCallback(()=>{
    let pass=""
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed){
      str+="012345679"
    }
    if(charallowed){
      str += "!@#$%^&*()_+/*-~"
    }

    for (let i = 1; i < length; i++) {
      let char =Math.floor(Math.random() * str.length+1)
      pass +=str.charAt(char)
    }

    setpassword(pass)

  },[length,numberallowed,charallowed,setpassword]) 

  const copypassowrdtoclip = useCallback(()=>{
    window.navigator.clipboard.writeText(password)

  },[password,])
  useEffect(()=> {
    passwordgene()
  },[length,numberallowed,charallowed,passwordgene])

  



  

  return (
    <> 
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center'>password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordref}
         />
         <button
         onClick={copypassowrdtoclip}
         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
         
         
         </div>
         <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100} 
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}}
            />
            <label>length:{length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberallowed}
            id='numberinput'
            onChange={()=>{
              setnumberallowed((prev)=> !prev);
            }}
             />
             <label htmlFor="numberinput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charallowed}
            id='charinput'
            onChange={()=>{
              setcharallowed((prev)=> !prev);
            }}
             />
             <label htmlFor="characterinput">characters</label>
          </div>
         </div>
         </div>  

     
    </>
  )
}

export default App
