import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
function App() {
  const [count, setCount] = useState(10)
   let Add_value=()=>{
    // interview perspective Question

    if (count==20) {
      setCount(count)
    }else{
     //setCount(count+1)
     // setCount(count+1)
     // what will be the output
     // obviously one time updation why fiber ui updation
     //so inorder to atually increase the value
     // use Call bak function of the counter
     setCount(preCounter => preCounter+1)
     // Batch execution   
    setCount(count+1)    
   }}
   let Remove_Value=()=>{
   if (count==0) {
    setCount(count)
   }else{
     setCount(count-1)
   }}
  return (
   <>
   <h1>React Hello</h1>
   {/* Evaluated Expression { } */}
   <h2>Counter  {count} </h2>
   <button
   onClick={Add_value} >
    Add Value
    {setCount} 
    </button>
    <button
    onClick={Remove_Value}>
      Remove Value {count}
      </button>
    <p>Counter Description{count} </p>
   </>
  )
}

export default App
