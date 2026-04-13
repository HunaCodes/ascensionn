import Image from 'next/image';

export default function AboutUs() {

  const aboutUsText = "At Ascensionn, we specialize in helping Angel Investors attract over 50 thesis-aligned deals within 180 days. Our unique approach empowers investors to build a consistent and proprietary deal flow, ensuring they find high-quality opportunities that match their specific investment goals. With a focus on precision and efficiency, we streamline the deal-sourcing process to create lasting value for both investors and startups.";

  return (
    // <div className='flex flex-col relative w-screen h-screen shrink-0'>

    //     {/* Background Image */}
    //     <div className='relative w-full h-full top-0  object-scale-down justify-center items-center flex flex-col text-5xl'>

    //       <img className='w-[5%] h-[20%] absolute z-1 top-0 right-0 p-1 cursor-pointer hover:scale-110 duration-300' src="/logo.png" />

    //         {/* Overlay */}
    //         <div className='absolute inset-0 bg-gradient-to-t from-[#051923] via-transparent to-transparent opacity-100  z-0'></div>

    //         {/* Title */}
    //         <div className='text-white font-bold text-6xl drop-shadow-2xl top-0 h-full mt-5 z-10'>About Us</div>

    //         {/*sBackground information*/}
    //         <i className='text-white text-center w-[60%] h-fit pb-30 drop-shadow-2xl text-base z-10 transform animate-fadeIn'>"{aboutUsText}"</i>
    //     </div>


    //     {/* Our Team Title */}
    //     <div className='flex text-white font-semibold w-full h-full justify-center mt-5 text-2xl'>Our Team</div>


    // </div>
    <div className='flex flex-col relative w-screen h-screen shrink-0 justify-center items-center p-1 overflow-y-hidden'>
      {/* BG image */}
      <Image src={"/aboutUsBG.jpeg"} alt='bg' width={5496 } height={3664} className='flex absolute z-10 w-full h-full object-cover object-[center_100%]'/>
      
      {/* BG gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-[#051923] via-transparent to-transparent opacity-100  z-10' />
      
      {/* ascension logo */}
      <Image src={"/logo.png"} alt='logo' width={128} height={128} className='flex w-[6%] h-auto aspect-square absolute right-0 top-0 hover:scale-110 duration-300'/>
      
      {/* all text */}
      <div className='text-white font-bold text-6xl drop-shadow-2xl top-0 h-full mt-5 z-10 animate-fadeIn'>About Us</div>
      
      <i className='text-white text-center w-[60%] h-fit pb-30 drop-shadow-2xl text-base z-10 transform animate-fadeIn'>"{aboutUsText}"</i>
        
      <div className='flex text-white font-semibold w-full h-full justify-center mt-5 text-2xl z-10'>Our Team</div>
    </div>
  )
}
