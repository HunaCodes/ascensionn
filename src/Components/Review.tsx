import React from 'react'
import {Review as ReviewType} from "@/interfaces/Review";

export default function Review({testimonial}:{testimonial:ReviewType}){

  return (
    <div className='bg-black w-20 h-20 text-sm'>
      {testimonial.company}
    </div>
  )
}
