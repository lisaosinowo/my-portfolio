import './App.css'
import DesktopPic from "./media/hillary-black-vFJN8Nde1Wc-unsplash.jpg"
import LisaCircleImg from "./media/lisa-pink.jpg"

function App() {

  return (
    <div className="">
      <div className="relative">
        {/* Hero picture of desktop */}
        <img src={DesktopPic} alt="Desktop" className="flex w-5/6 h-85 justify-self-center lg:w-[700px]" />
        {/* Profile pic + follow button */}
        <div className="absolute flex justify-between justify-self-center items-center mt-4 w-5/6 sm:w-3/4 lg:w-[550px] inset-x-0 bottom-[-25%] md:bottom-[-20%] lg:bottom-[-15%] mx-auto bg-[--lilac1] rounded-3xl p-4">
          <img src={LisaCircleImg} alt="Lisa" className="w-32 h-32 rounded-full border-2" />
          <button className="bg-[--lilac2] text-white font-bold py-2 px-6 rounded-3xl">Follow</button>
        </div>
      </div>
      
    </div>
  )
}

export default App
