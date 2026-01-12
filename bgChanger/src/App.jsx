import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [color, setColor] = useState('Slate')

  return (
    <>
      <div className='bg-slate-950 h-screen w-full' style={{backgroundColor:color}}>
      <nav>
         <div className='w-full py-3 bg-slate-800 flex flex-row justify-around'>
          <button
          onClick={()=>setColor('Red')}
           className='p-3 rounded-xl' style={{backgroundColor:'Red'}}>

            Red</button>
          <button 
          onClick={()=>setColor('green')}
          className='p-3 rounded-xl' style={{backgroundColor:'Green'}}>
            Green</button>
          <button onClick={()=>setColor('Yellow')}
           className='p-3 rounded-xl' style={{backgroundColor:'Yellow'}}>yellow</button>
          <button 
          onClick={()=>setColor('Olive')}
           className='p-3 rounded-xl' style={{backgroundColor:'Olive'}}>Olive</button>
          <button 
          onClick={()=>setColor('Orange')}
           className='p-3 rounded-xl' style={{backgroundColor:'Orange'}}>Orange</button>
<button 
          onClick={()=>setColor('Purple')}
           className='p-3 rounded-xl' style={{backgroundColor:'Purple'}}>Purple</button>
<button 
          onClick={()=>setColor('Pink')}
           className='p-3 rounded-xl' style={{backgroundColor:'Pink'}}>Pink</button>


           
         </div>
         
      </nav>

      </div>
    </>
  )
}

export default App
