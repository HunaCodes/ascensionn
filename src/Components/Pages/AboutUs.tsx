import React from 'react'

export default function AboutUs() {

  const aboutUsText = "At Ascensionn, we specialize in helping Angel Investors attract over 50 thesis-aligned deals within 180 days. Our unique approach empowers investors to build a consistent and proprietary deal flow, ensuring they find high-quality opportunities that match their specific investment goals. With a focus on precision and efficiency, we streamline the deal-sourcing process to create lasting value for both investors and startups.";

  return (
    <div className='relative w-screen h-screen flex flex-col'>

        {/* Background Image */}
        <div className='relative w-full h-[45%] top-0 bg-[url("/aboutUsBG.jpeg")] bg-cover bg-center justify-center items-center flex flex-col text-5xl'>

            {/* Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-[#051923] via-transparent to-transparent opacity-100  z-0'></div>

            {/* Title */}
            <div className='text-white font-bold drop-shadow-lg top-0 h-full mt-5 z-10'>About Us</div>

            {/*sBackground information*/}
            <i className='text-white text-center w-[60%] text-base mb-30 z-10'>"{aboutUsText}"</i>
        </div>


        {/* Our Team Title */}
        <div className='flex text-white font-semibold w-full justify-center mt-5 text-2xl'>Our Team</div>


    </div>
  )
}
