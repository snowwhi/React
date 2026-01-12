import { useState,useCallback,useEffect,useRef} from 'react'
import './index.css'
function PassGenerator() {
  const passwordRef = useRef(null)
  const [password,setPassword] = useState("")
  const [NumberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setcharAllowed]=useState(false)
  const [length,setlength]=useState(6)
  // Making a password
  const passwordGene=useCallback(()=>{
     let pass =''
     let str='ABDEFGHIJKLMNOPRSTUVWXZabdefghijklmnoprstuvwxz'
      if(NumberAllowed) str+= '0123456789'
      if (charAllowed) str += '!@#$%^&*()[]{}?,.'
     for (let index = 1; index < length; index++) {
         let char = Math.floor(Math.random() * str.length);
         pass += str.charAt(char)
     }
     setPassword(pass)
  },[NumberAllowed,charAllowed,length,setPassword])
  //  use Effect
 useEffect(() => {
   passwordGene()
  },[length, NumberAllowed, charAllowed, passwordGene])
  // copy functionality
  useRef()
 // const 
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password)
  }, [password])
  return (
  
   <div className='bg-slate-950 w-full h-screen text-white '> 
 <h1 className='text-4xl justify-self-center pt-3'>Pass Generator</h1>
 <div className=' mt-5 w-2/4 h-48 bg-slate-800 justify-self-center rounded-3xl relative'>
  <input
  value={password}
  className='p-2 bg-white text-2xl text-slate-950 w-11/12 box-border m-1 rounded-3xl absolute top-8 left-3 ' 
  type="text" 
  placeholder='Password'
  ref={passwordRef}
  readOnly
  />
  <button 
  className='bg-slate-950 p-3 absolute top-9 right-10 rounded-r-xl'
  type="button"
  onClick={copyPasswordToClipboard}>
  Copy
  </button>
  <div className='absolute accent-slate-950 bottom-10 flex flex-row justify-around w-11/12 '>
   <input 
   className=' accent-slate-950 '
   type="range"
   min={6}
   max={100}
   value={length}
   onChange={(e)=>setlength(e.target.value)}
    />
    <label
   className=' accent-slate-950 '
    >Length{length}
    </label>
    <input 
    type="checkbox"
    className=' accent-slate-950'
    onClick={()=> setNumberAllowed(prev=>!prev)}
     />
     <label> NumberAllowed</label>
     <input 
    type="checkbox"
    className=' accent-slate-950'
   onChange={()=>{setcharAllowed((prev) => !prev);
          }}
     />
     <label> CharacterAllowed</label>
     
     </div>
 </div>
   </div>
  )
}

export default PassGenerator
