
import './index.css'
function Header() {

  return (
    <>
     <header className='position relative' >
      <nav>
        <ul className='bg-slate-950 flex flex-row justify-around items-center text-white py-6'>
          <li className='w-auto'>Home</li>
          <li className='w-auto'> About</li>
          <li className='w-auto'>Contat Us</li>
          <li className='w-auto'> Login</li>
          <li className='w-auto'>Random</li>
        </ul>
      </nav>
     </header>
    </>
  )
}

export default Header
