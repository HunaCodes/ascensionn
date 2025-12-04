import React from 'react'

export default function AboutUs() {
  return (
    <div className='relative w-screen h-screen flex flex-col'>

        {/* Background Image */}
        <div className='w-full h-[45%] top-0 bg-[url("/aboutUsBG.jpeg")] bg-cover bg-center justify-center items-center flex flex-col text-5xl'>
            <div className='bg-gradient-to-b to-transparent from-transparent via-[#051923] from-[5%] via-[15%] w-screen h-80 z-10 absolute top-[40%]'></div>

            <div className='text-white font-bold drop-shadow-lg top-0 h-full pt-5'>About Us</div>
        </div>




    </div>
  )
}
