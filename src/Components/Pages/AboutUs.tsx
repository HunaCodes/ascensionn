import React from 'react'

export default function AboutUs() {
  return (
    <div className='relative w-screen h-screen flex flex-col'>

        {/* Background Image */}
        <div className='w-full h-[45%] top-0 bg-[url("/aboutUsBG.jpeg")] bg-cover bg-center justify-center items-center flex flex-col text-5xl'>
            {/* <div className='bg-gradient-to-b to-transparent from-transparent via-[#051923] from-[5%] via-[15%] w-screen h-80 z-10 absolute top-[40%]'></div> */}

            {/* Title */}
            <div className='text-white font-bold drop-shadow-lg top-0 h-full mt-5'>About Us</div>

            {/*sBackground information*/}
            <p className='text-white text-center w-1/2 text-sm mb-30'>At Ascensionn, we help real estate developers boost buyer conversions with our 24/7 AI Sales Concierge. Our system instantly engages, qualifies, and schedules appointments, turning inquiries into closed deals—faster than the competition.</p>
        </div>


        {/* Our Team Title */}
        <div className='flex text-white font-semibold w-full justify-center mt-5 text-2xl'>Our Team</div>


    </div>
  )
}
