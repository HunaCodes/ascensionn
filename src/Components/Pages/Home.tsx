import React from 'react'
import Image from 'next/image'
import Navbar from '../Navbar'

export default function Home() {
  return (
    <div className='w-screen h-screen flex flex-col bg-[url("/BG2.jpg")] bg-cover bg-center items-center justify-center'>

      <div className='flex font-bold items-center justify-center mb-40'>
        <h1 className='drop-shadow-lg xs:text-6xl sm:text-7xl md:text-8xl lg:text-[7rem]'>Ascensi</h1>
        <Image className="drop-shadow-2xl xs:w-17 xs:h-19 sm:w-18 sm:h-20 md:w-22 md:h-25 lg:w-25 lg:h-28" src ='/logo.png' alt="Logo" width={90} height={80}></Image>
        <h1 className='drop-shadow-lg xs:text-6xl sm:text-7xl md:text-8xl lg:text-[7rem]'>nn</h1>
      </div>
    
    <Navbar></Navbar>
    
    
    </div>
  )
}
