import './index.css'
function Card({btn_text='Checkout'}) {

  return (
    <>
   <div className='bg-white border-2 h-80 p-1 w-72 border-slate-950 rounded-2xl justify-items-center'>
   <img src="https://picsum.photos/300/200" alt="Random" className='rounded-2xl' />
   <p className='text-slate-950 font-bold pb-4' >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
   </p>
   <button className='bg-slate-950 flex  text-white p-2 rounded-2xl '> {btn_text} </button>
</div>
    </>
  )
}

export default Card
