import React, { useState } from 'react'

export default function AboutUs() {

  const aboutUsText = "At Ascensionn, we specialize in helping Angel Investors attract over 50 thesis-aligned deals within 180 days. Our unique approach empowers investors to build a consistent and proprietary deal flow, ensuring they find high-quality opportunities that match their specific investment goals. With a focus on precision and efficiency, we streamline the deal-sourcing process to create lasting value for both investors and startups.";
  const personalBio = "I'm Gurnoor Singh, founder of Ascensionn. My focus is on helping angel investors find 50+ thesis-aligned deals in just 180 days, while building a steady flow of exclusive opportunities. With a background in real estate and a passion for connecting the right investors to the right deals, I’m dedicated to making the investment process smoother and more efficient."

  const [popup, setPopUp] = useState(false);


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
            <i className='text-white text-center w-[60%] h-fit pb-30 drop-shadow-2xl text-base z-1 transform animate-fadeIn'>"{aboutUsText}"</i>
        </div>


        {/* Our Team Title */}
        <div className='flex flex-col text-white font-semibold w-full items-center mt-5 text-2xl gap-10'>
          
          <h1>Our Team</h1>
          
          {/* Image of the creator */}
          <img className="w-1/11 transform hover:scale-90 duration-300 cursor-pointer" src="/pp.png" onClick={()=>setPopUp(true)}></img>
          
          {popup === true && <div className='absolute inset-0 m-auto w-1/2 h-[80%] bg-[#0d3a50] border-2 border-black rounded-4xl z-50'>
            
            <button className = "justify-end px-4 cursor-pointer flex w-full" onClick={()=>(setPopUp(false))}>Close</button>            

              {/* Personal info */}
              <div className='w-full items-center font-normal flex flex-col gap-10'>
                <h1 className='text-lg'>Gurnoor Singh</h1>
                <p className='text-center text-md w-[80%] italic'>"{personalBio}"</p>
              </div>

              {/* Acomplishments */}
              <div></div>

              {/* Social Links */}
              <div className='flex gap-5 justify-center w-full mt-10'>
                    <a href="https://www.instagram.com/yourusername">
                      <img
                        src="/instagram.png"
                        className="w-[50px] h-[50px] cursor-pointer rounded-sm transform hover:scale-90 duration-300"
                        alt="Instagram"
                      />
                    </a>

                    <a href="https://www.youtube.com/@yourchannel">
                      <img
                        src="/youtube.png"
                        className="w-[50px] h-[50px] cursor-pointer transform hover:scale-90 duration-300"
                        alt="Youtube"
                      />
                    </a>

                    <a href="https://www.linkedin.com/company/ascensionn-ecom/posts/?feedView=all">
                      <img
                        src="/linkedin.png"
                        className="w-[50px] h-[50px] cursor-pointer transform hover:scale-90 duration-300"
                        alt="LinkedIn"
                      />
                    </a>

                    <a href="https://x.com/yourusername">
                      <img
                        src="/twitter.png"
                        className="w-[50px] h-[50px] bg-white cursor-pointer transform hover:scale-90 duration-300"
                        alt="X"
                      />
                    </a>
              </div>
            
          </div>} 
        
        </div>



    </div>
  )
}
