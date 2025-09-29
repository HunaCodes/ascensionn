import React from 'react'
import {Review as ReviewType} from "@/interfaces/Review";

export default function Review({testimonial}:{testimonial:ReviewType}){

  return (
    <div className='flex flex-col gap-2 bg-asc-500 text-sm md:text-xl text-white rounded-xl w-full lg:w-[48%] min-h-[25vh] h-fit max-h-[30vh] p-2'>
      <h1 className='flex flex-row h-fit border-2 text-md font-bold md:text-2xl'>{testimonial.title}</h1>
      <div className='flex flex-row w-full h-full relative border-2 text-zinc-300 overflow-hidden text-ellipsis leading-4.5'>
        {testimonial.text}
      </div>
      <div className='flex flex-col w-full h-10 font-bold border-2'>  
        <div className='flex w-full text-sm md:text-lg '>{testimonial.name}</div>
        <div className='flex w-full text-xs md:text-md '>{testimonial.company}</div>
      </div>
    </div>
  )
}
