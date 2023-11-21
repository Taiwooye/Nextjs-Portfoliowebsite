'use client'
import React from 'react'
import Image from 'next/image'
import miles from '../public/Miles.png';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
 <div className="grid grid-cols-1 sm:grid-cols-12 py-24">
    <div className='col-span-7 place-self-center text-center sm:text-left'>
 <h1 className='text-white mb-4 text-4xl sm:text-4xl lg:text-4xl font-extrabold'>
<span className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 to bg-gray-600'>Hello, I'm {""}</span>
<br />
<TypeAnimation
      sequence={[
      
        'Taiwo',
        1000, 
        'Web Developer',
        1000,
        'A Javascript, React, Nextjs and Typescript Expert',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    /></h1> 
<p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate tenetur nemo numquam!</p> 
<div>
    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 text-black bg-gradient-to-br from-green-400 via-red-300 to-purpe-200 hover:bg-slate-200'>Hire Me</button>
    <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-300 via-green-500 to-gray-500 hover:bg-slate-800 text-white mt-3'
    ><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
</div>
 </div>
 <div className='col-span-5 place-self-center mt-4 lg:mt-8 mb-6'>
   <div className='rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]'>
   <Image src={miles}
   className='absolute transform -translate-x-1/2
   -translate-y-1/2 top-1/2 left-1/2'
    alt='miles'
    width={375}
    height={300}
    style={{
      objectFit: "cover",
      borderRadius: "500px", //👈 and here you can select border radius
    }}
    />
   </div>
 </div>
 </div>
    </section>
  )
}

export default HeroSection