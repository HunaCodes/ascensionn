import Review from '@/Components/Review'
import { Review as RType } from '@/interfaces/Review'
import Image from 'next/image'
import Link from 'next/link'
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
    <div className='flex w-screen h-screen flex-col bg-asc-300 justify-center items-center p-2 text-white'>
      <nav className='flex w-full justify-between items-center'>
        <div>menu</div>
        <Link href={"/"}>
          <Image src={'/logo.png'} alt='ascensionn' width={40} height={40} className='h-auto'/>
        </Link>
      </nav>
      
      <h1 className='flex h-fit py-1 w-full text-4xl font-extrabold justify-center items-center'>Reviews</h1>
      <div className='flex flex-col w-full h-full overflow-y-auto gap-2'>
        <Review testimonial={review} />
        <Review testimonial={review} />
        <Review testimonial={review} />
        <Review testimonial={review} />
        <Review testimonial={review} />
      </div>
    </div>
  )
}
