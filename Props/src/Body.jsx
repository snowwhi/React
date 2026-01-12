import Card from './Card.jsx'
    import './index.css'
function Body() {

  return (
    <>
  <h1 className='py-4 text-3xl text-slate-950 font-bold text-center'> Hello, check out Some Products </h1>
  <div className='bg-white flex flex-row justify-around items-center h-96 w-full'> 
    <Card btn_text='Love you' image_url='https://picsum.photos/id/1/300/200'/>
    <Card btn_text='Hello g' image_url='https://picsum.photos/id/25/300/200 '/>
    <Card btn_text='hi g'image_url='https://picsum.photos/id/30/300/200'/>
    <Card btn_text='Hate you'image_url='https://picsum.photos/id/8/300/200'/>
  </div>
    </>
  )
}

export default Body
