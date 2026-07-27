import './App.css'
import DesktopPic from "./media/hillary-black-vFJN8Nde1Wc-unsplash.jpg"
import LisaCircleImg from "./media/lisa-pink.jpg"

import MainContainer from './components/MainContainer'

function App() {

  return (
    <div className=''>
        <div className="">
        <div className="relative">
          {/* Hero picture of desktop */}
          <img src={DesktopPic} alt="Desktop" className="flex w-5/6 h-85 justify-self-center lg:w-[700px]" />
          {/* Profile pic + follow button */}
          <div className="absolute flex justify-between mt-4 main-container-width inset-x-0 max-[385px]:bottom-[-40%] max-[492px]:bottom-[-32%] bottom-[-28%] md:bottom-[-20%] lg:bottom-[-15%] mx-auto bg-[--lilac1] rounded-3xl">
            <img src={LisaCircleImg} alt="Lisa" className="w-32 h-32 rounded-full border-2" />
            <button className="bg-[--lilac2] hover:bg-[--lilac] min-[768px]:text-xl text-white font-bold py-2 px-6 rounded-3xl cursor-pointer">Follow</button>
          </div>
        </div>
        <MainContainer />
      </div>
    </div>
    
  )
}

export default App
