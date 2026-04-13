'use client'
import AboutUs from "@/Components/Pages/AboutUs";
import Home from "@/Components/Pages/Home";
import ReviewPage from "@/Components/Pages/ReviewPage";




export default function Ascensionn() {
  
  
  return (
    <div className="flex flex-col text-white w-screen h-screen overflow-y-auto  overflow-x-hidden overflow-hidden snap-y snap-mandatory scroll-smooth [&>*]:snap-start [&>*]:shrink-0 backdrop-blur-xs" style={{background: "linear-gradient(to bottom, #051923 10%, #003554 44%, #006494 90%, #0582CA 100%)"}} >
      <Home />
      <AboutUs />
      <ReviewPage />
    </div>
  );
}
