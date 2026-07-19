import './App.css'
import DesktopPic from "./media/hillary-black-vFJN8Nde1Wc-unsplash.jpg"
import LisaCircleImg from "./media/lisa-pink.jpg"

function App() {

  return (
    <div className="">
      <div className="">
        {/* Hero picture of desktop */}
        <img src={DesktopPic} alt="Desktop" className="flex w-5/6 h-85 justify-self-center lg:w-[700px]" />
        {/* Profile pic + follow button */}
        <div className="flex justify-between justify-self-center items-center mt-4 w-2/3 lg:w-[550px]">
          <img src={LisaCircleImg} alt="Lisa" className="w-32 h-32 rounded-full border-2" />
          <button className="bg-[--lilac2] text-white font-bold py-2 px-6 rounded-3xl">Follow</button>
        </div>
      </div>
      
    </div>
  )
}

export default App
