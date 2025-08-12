'use client'
import Image from "next/image";

export default function Ascensionn() {
  return (
    <div className="bg-[url(/BG2.jpg)] bg-cover w-screen h-screen bg-no-repeat bg-center flex flex-col items-center">
      <h1 className="flex w-fit text-[2.5rem] sm:text-[5rem] lg:text-[10rem] items-center">ASCENSI 
        <Image src={'/logo.png'} alt="O" width={1000} height={5000} className="h-10 w-10 sm:h-20 sm:w-20 lg:h-40 lg:w-40 "/> 
        NN 
      </h1>      
    </div>
  );
}
