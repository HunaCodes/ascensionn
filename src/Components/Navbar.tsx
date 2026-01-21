import React from 'react'

export default function Navbar() {
  return (
    <div className='absolute h-screen w-screen'>
        
       <h1 className='h-full w-full flex items-end justify-center pb-10'>
        
        <div className='flex w-fit bg-[#051923] rounded-md py-3 px-4 gap-10 text-md'>

          <button className="cursor-pointer" >About Us</button>
          <button className="cursor-pointer" >Find Out More</button>
          <button className="cursor-pointer" >Reviews</button>
          <button className="cursor-pointer" >FAQs</button>
          <button className="bg-[#00A6FB] px-2 rounded-full py-2 cursor-pointer" >Book Now &rarr;</button>
        
        </div>
        
      </h1>
        
        
    </div>
  )
}
