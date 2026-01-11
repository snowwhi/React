import Card from './Card.jsx'
    import './index.css'
function Body() {

  return (
    <>
  <h1 className='py-4 text-3xl text-slate-950 font-bold text-center'> Hello, check out Some Products </h1>
  <div className='bg-white flex flex-row justify-around items-center h-96 w-full'> 
    <Card btn_text='Love you'/>
    <Card btn_text='Hello g' />
    <Card btn_text='hi g'/>
    <Card btn_text='Hate you'/>
  </div>
    </>
  )
}

export default Body
