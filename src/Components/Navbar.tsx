import React from 'react'

export default function Navbar() {
  return (
    <div className='absolute h-screen w-screen'>
        
       <h1 className='h-full w-full flex items-end justify-center pb-20 drop-shadow-lg'>
        
        <div className='flex w-fit bg-[#051923] rounded-full py-2 px-2 text-xs gap-1 md:py-3 md:px-4 md:gap-5 md:text-lg font-semibold'>

          <button className="cursor-pointer bg-[#0F2330] px-1.5 md:px-3 rounded-full py-2 transform duration-300 hover:scale-110" >Find Out More</button>
          <button className="cursor-pointer bg-[#0F2330] px-1.5 md:px-3 rounded-full py-2 transform duration-300 hover:scale-110" >About Us</button>
          <button className="cursor-pointer bg-[#0F2330] px-1.5 md:px-3 rounded-full py-2 transform duration-300 hover:scale-110" >Reviews</button>
          <button className="cursor-pointer bg-[#0F2330] px-1.5 md:px-3 rounded-full py-2 transform duration-300 hover:scale-110" >FAQs</button>
          <button className="bg-[#00A6FB] px-2 rounded-full lg:py-2 cursor-pointer transform duration-400 hover:scale-115" >Book Now &rarr;</button>
        
        </div>
        
      </h1>
        
        
    </div>
  )
}
