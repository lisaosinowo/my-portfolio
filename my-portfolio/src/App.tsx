import "./App.css";
import LisaCircleImg from "./media/lisa-pink.jpg";

import MainContainer from "./components/MainContainer";

function App() {
   return (
      <div className="">
         <div className="">
            <div className="relative">
               {/* Hero picture of desktop */}
               <div className="w-full h-0 pb-[26.1rem] max-[990px]:pb-[25rem] max-[950px]:pb-[24rem] max-[905px]:pb-[23rem] max-[850px]:pb-[22rem] max-[800px]:pb-[21rem] max-[768px]:pb-[21rem] max-[730px]:pb-[18.5rem] max-[707px]:pb-[17.5rem] max-[660px]:pb-[17rem] max-[640px]:pb-[21rem] max-[592px]:pb-[19rem] max-[540px]:pb-[19.5rem] max-[489px]:pb-[17.5rem] max-[435px]:pb-[18rem] max-[400px]:pb-[16.5rem] max-[340px]:pb-[15.5rem] max-[318px]:pb-[15rem] relative">
                  <img
                     src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHB5aWVyb3E0ZmV0eG9vYmFwcDExa2pmMWMxOXAwdGVmYXE5Zm94aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/NBjAY6fJTGYzPlgneY/giphy.gif"
                     alt="description of the gif"
                     className="w-full absolute inset-0 flex w-5/6 h-85 justify-self-center min-[1024px]:w-[700px] max-[1024px]:w-[75%] max-[640px]:w-[94%] max-[540px]:w-[100%]"
                  />
               </div>
               {/* Profile pic + follow button */}
               <div className="max-[639px]:mb-4 max-[492px]:mb-5 max-[385px]:mb-8 max-[360px]:mb-10 absolute flex justify-between mt-4 main-container-width inset-x-0 max-[385px]:bottom-[-40%] max-[492px]:bottom-[-32%] bottom-[-28%] md:bottom-[-20%] lg:bottom-[-15%] mx-auto bg-[--lilac1] rounded-3xl">
                  <img
                     src={LisaCircleImg}
                     alt="Lisa"
                     className="w-32 h-32 rounded-full border-2"
                  />
                  <button
                     className="bg-[--lilac2] hover:bg-[--lilac] min-[768px]:text-xl text-white font-bold py-2 px-6 rounded-3xl cursor-pointer"
                     onClick={() =>
                        window.open(
                           "https://www.linkedin.com/in/lisa-osinowo-3bb18b236/",
                           "_blank",
                        )
                     }
                  >
                     Follow
                  </button>
               </div>
            </div>
            <MainContainer />
         </div>
      </div>
   );
}

export default App;
