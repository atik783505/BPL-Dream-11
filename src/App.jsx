
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './component/homepage/banner/banner'
import Player from './component/homepage/Player/Player'
import Navbar from './component/navbar/Navbar'
import { ToastContainer } from 'react-toastify';

function App() {
const playeData = fetch('/data.json').then(res => res.json());
const [coin,setCoin] = useState(500000)

  return (
    <>
     <Navbar coin={coin}></Navbar>
     <Banner></Banner>
     <Suspense fallback={<p>Player is comming</p>}>

     <Player playeData={playeData} setCoin={setCoin} coin={coin}></Player>
     </Suspense>
     <ToastContainer></ToastContainer>
    </>
  )
}

export default App
