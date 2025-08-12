import React from 'react'
import {Review as ReviewType} from "@/interfaces/Review";

export default function Review({testimonial}:{testimonial:ReviewType}){

  return (
    <div className='flex flex-col gap-2 bg-asc-500 text-sm text-white rounded-xl w-[99%] h-[30vh] p-2'>
      <h1 className='flex text-md font-bold'>{testimonial.title}</h1>
      <div className='flex w-full h-full relative text-zinc-300 text-ellipsis overflow-hidden leading-4.5'>
        {testimonial.text}
      </div>
      <div className='flex flex-col w-full h-10 font-bold'>  
        <div className='flex w-full text-sm '>{testimonial.name}</div>
        <div className='flex w-full text-xs '>{testimonial.company}</div>
      </div>
    </div>
  )
}
