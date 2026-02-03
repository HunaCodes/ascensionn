import React from 'react'
import Image from 'next/image'
import Navbar from '../Navbar'

export default function Home() {
  return (
    <div className='w-screen h-screen flex flex-col bg-[url("/BG2.jpg")] bg-cover bg-center items-center justify-center'>

      <div className='flex font-bold text-5xl items-center justify-center mb-40'>
        <h1 className='drop-shadow-lg lg:text-8xl'>Ascensi</h1>
        <Image className="drop-shadow-2xl" src ='/logo.png' alt="Logo" width={90} height={80}></Image>
        <h1 className='drop-shadow-lg lg:text-8xl'>nn</h1>
      </div>
    
    <Navbar></Navbar>
    
    
    </div>
  )
}
