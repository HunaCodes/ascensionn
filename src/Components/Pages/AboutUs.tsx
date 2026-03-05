import React from 'react'

export default function AboutUs() {

  const aboutUsText = "At Ascensionn, we specialize in helping Angel Investors attract over 50 thesis-aligned deals within 180 days. Our unique approach empowers investors to build a consistent and proprietary deal flow, ensuring they find high-quality opportunities that match their specific investment goals. With a focus on precision and efficiency, we streamline the deal-sourcing process to create lasting value for both investors and startups.";

  return (
    <div className='relative w-screen h-screen flex flex-col'>

        {/* Background Image */}
        <div className='relative w-full h-[47%] top-0 bg-[url("/aboutUsBG.jpeg")] bg-cover bg-[center_75%] justify-center items-center flex flex-col text-5xl'>

          {/* Logo Image */}
          <img className='w-[5%] h-[20%] absolute z-1 top-0 right-0 p-1 cursor-pointer transform hover:scale-110 duration-300' src="/logo.png" />

            {/* Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-[#051923] via-transparent to-transparent opacity-100  z-0'></div>

            {/* Title */}
            <div className='text-white font-bold text-6xl drop-shadow-2xl top-0 h-full mt-5 z-10'>About Us</div>

            {/*sBackground information*/}
            <i className='text-white text-center w-[60%] h-fit pb-30 drop-shadow-2xl text-base z-10 transform animate-fadeIn'>"{aboutUsText}"</i>
        </div>


        {/* Our Team Title */}
        <div className='flex flex-col text-white font-semibold w-full items-center mt-5 text-2xl gap-10'>
          
          <h1>Our Team</h1>
          
          {/* Image of the creator */}
          <img className="w-1/11 transform hover:scale-90 duration-300 cursor-pointer" src="/pp.png"></img>
          
        
        </div>



    </div>
  )
}
