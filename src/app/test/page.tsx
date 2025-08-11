import Review from '@/Components/Review'
import { Review as RType } from '@/interfaces/Review'
import React from 'react'

export default function Page() {
    const review:RType = {
        title:"An Amazing review",
        company: "An amazing company",
        text:`An Amazing review which is a long long review but a long long good review. this should take a long long width and height.
        This is just additional text which should overflow.
        This is just additional text which should overflow.
        This is just additional text which should overflow.
        This is just additional text which should overflow.
        This is just additional text which should overflow.`,
        name:"AnAmazing Person"
    }
  return (
    <div className='flex w-screen h-screen flex-col bg-asc-300 justify-center items-center'>
        <Review testimonial={review} />


    </div>
  )
}
