import React from 'react'

export default function Navbar() {
  return (
    <div className='absolute h-screen w-screen'>
        
       <h1 className='h-full w-full flex items-end justify-center pb-10 drop-shadow-lg'>
        
        <div className='flex w-fit bg-[#051923] rounded-full py-3 px-4 gap-10 text-md font-semibold'>

          <button className="cursor-pointer bg-[#0F2330] px-4 rounded-full py-2" >About Us</button>
          <button className="cursor-pointer bg-[#0F2330] px-4 rounded-full py-2" >Find Out More</button>
          <button className="cursor-pointer bg-[#0F2330] px-4 rounded-full py-2" >Reviews</button>
          <button className="cursor-pointer bg-[#0F2330] px-4 rounded-full py-2" >FAQs</button>
          <button className="bg-[#00A6FB] px-2 rounded-full py-2 cursor-pointer" >Book Now &rarr;</button>
        
        </div>
        
      </h1>
        
        
    </div>
  )
}
