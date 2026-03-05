import { Review } from '@/interfaces/Review'
import React, { useEffect, useState } from 'react'
import ReviewComponent from '../Review';
import Image from 'next/image';
const review:Review = {
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


const reviews: Array<Review> = [
    {
        title:"An Amazing review",
        company: "An amazing company",
        text:`An Amazing review which is a long long review but a long long good review. this should take a long long width and height.
        This is just additional text which should overflow.
        This is just additional text which should overflow.
        This is just additional text which should overflow.
            This is just additional text which should overflow.
    This is just additional text which should overflow.
    v
        This is just additional text which should overflow.
    This is just additional text which should overflow.
    v
        This is just additional text which should overflow.
    This is just additional text which should overflow.
    v
        This is just additional text which should overflow.
        This is just additional text which should overflow.`,
        name:"AnAmazing Person"
    },
    {
        title:"An Amazing review",
        company: "An amazing company",
        text:`An Amazing review which is a long long review but a long long good review. this should take a long long width and height.`,
        name:"AnAmazing Person"
    }
    ,
    {
        title:"An Amazing review",
        company: "An amazing company",
        text:`An Amazing review which is a long long review but a long long good review. this should take a long long width and height.`,
        name:"AnAmazing Person"
    }
    ,
    {
        title:"An Amazing review",
        company: "An amazing company",
        text:`An Amazing review which is a long long review but a long long good review. this should take a long long width and height.`,
        name:"AnAmazing Person"
    }
]


export default function ReviewPage() {
    
    const [showReviews, setShowReviews] = useState(true);
    const scrollFunc = ()=>{
        const elem = document.getElementById('reviews');
        const x = elem?.scrollLeft;
        const y = elem?.scrollTop;
        console.log(x,y)
    }

    useEffect(()=>{
        addEventListener('scroll',scrollFunc )
        return ()=>{
            removeEventListener('scroll',scrollFunc);
        }
    },[])

    return (
        <div id='reviews' className='flex w-screen h-screen flex-col justify-between'>
            {!showReviews &&
                <div className='flex flex-col w-full h-full p-2'>
                    <div className='flex flex-col gap-5 items-center h-1/2 '>
                        <h1 className='flex text-6xl font-bold flex-row'>Reviews</h1>
                        <h3 className='flex text-2xl flex-row'>Hear from our Customers</h3>
                    </div>
                    <div className='flex flex-col w-full h-1/2 items-center gap-2'>
                        <p>Here's how we helped Jasmit</p>
                        
                            <iframe className='flex aspect-video w-full h-auto'  src="https://www.youtube.com/embed/M0PbRCTEk-s" title="How Jasmiit made $30k in 30 Days With A Brand New Coaching Offer | Client Interview" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                    </div>
                    <div className='flex w-full h-full items-center justify-center'>
                        <button onClick={()=>{setShowReviews(true)}} className='flex bg-asc-100 h-10 rounded-full w-fit px-5 items-center justify-center '>Read our Reviews &gt;</button>
                    </div>
                </div>
            }

            {
                showReviews && 
                    <div  className='flex w-full h-full overflow-hidden items-center justify-center'>
                        <div className='flex w-8 h-full pl-2 items-center justify-center text-2xl' onClick={()=>{setShowReviews(false)}}>
                            <Image src={"/back_arrow.svg"} alt='<' width={80} height={0} className='flex h-80 w-full'/>
                        </div>
                        <div className='flex flex-col w-full h-full'>
                            <div className='flex w-full h-fit py-5 items-center justify-center text-5xl font-bold'>Reviews</div>
                            <div className='flex w-full h-full overflow-y-hidden p-2'>
                                <div className='flex w-full h-full overflow-y-auto'>
                                    <div className='flex w-full h-fit flex-col gap-5 md:flex-wrap md:flex-row'>
                                        {reviews.map((review, i)=>
                                            <ReviewComponent testimonial={review} key={i} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}
