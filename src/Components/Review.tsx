import React from 'react'
import {Review as ReviewType} from "@/interfaces/Review";

export default function Review({testimonial}:{testimonial:ReviewType}){
  const text = testimonial.text.length> 390? testimonial.text.substring(0,390)+"..." : testimonial.text;
  return (
    <div className='flex flex-col gap-2 bg-asc-500 text-md text-zinc-200 rounded-xl w-full md:w-[48%] h-[25vh] p-2'>
      <h1 className='flex flex-row h-fit text-md font-bold'>{testimonial.title}</h1>
      <div className='flex flex-row w-full h-full relative overflow-hidden text-ellipsis leading-4.5'>
        {text}
      </div>
      <div className='flex flex-col w-full h-12 tracking-tighter gap-0 font-bold'>  
        <div className='flex w-full text-md '>{testimonial.name}</div>
        <div className='flex w-full text-md '>{testimonial.company}</div>
      </div>
    </div>
  )
}
