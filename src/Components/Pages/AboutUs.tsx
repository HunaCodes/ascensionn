import React from 'react'

export default function AboutUs() {
  return (
    <div className='w-screen h-screen flex flex-col'>

        {/* Background Image */}
        <div className='w-full h-[45%] top-0 bg-[url("/aboutUsBG.jpeg")] bg-cover bg-center justify-center items-center flex flex-col text-5xl'>
            <h1 className='lg:text-7xl font-bold flex top-0 h-full mt-20 drop-shadow-2xl'>About Us</h1>
            <p className='text-sm text-center'>At Ascensionn, we make property management simple, stress-free, and effective. Whether you own a home, apartment, or business space, we're here to take care of the details and help your property succeed. With a focus on clear communication and great service, we’re a team you can trust.</p>
        </div>



    </div>
  )
}
