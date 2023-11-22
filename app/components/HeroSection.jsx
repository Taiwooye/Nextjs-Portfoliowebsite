'use client'
import React from 'react'
import Image from 'next/image'
import miles from '../public/Miles.png';
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
 <motion.div initial={{opacity: 0, scale: 0.5 }}
  animate={{opacity: 1, scale: 1}}
   transition={{duration: 0.5}} 
   className="grid grid-cols-1 sm:grid-cols-12 pt-16">
    <div className='col-span-7 place-self-center text-center sm:text-left'>
 <h1 className='text-white mb-4 text-4xl sm:text-4xl lg:text-4xl font-extrabold'>
<span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to bg-yellow-600'>Hello, I'm {""}</span>
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
<p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>I've had the honor to work as a front end web developer for several years. Currently, I'm looking to undertake a challenging role that can help me evolve</p> 
<div>
    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-yellow-300 to bg-yellow-600 hover:bg-slate-200'>Hire Me</button>
    <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-yellow-300 to bg-yellow-600 hover:bg-slate-800 text-white mt-3'
    ><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
</div>
 </div>
 <motion.div initial={{opacity: 0, scale: 0.5 }}
  animate={{opacity: 1, scale: 1}}
   transition={{duration: 0.5}}  className='col-span-5 place-self-center mt-4 lg:mt-8 mb-6'>
   <div className='rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]'>
   <Image src={miles}
   className='absolute transform -translate-x-1/2
   -translate-y-1/2 top-1/2 left-1/2'
    alt='miles'
    width={375}
    height={300}
    style={{
      objectFit: "cover",
      borderRadius: "500px",
    }}
    />
   </div>
 </motion.div>
 </motion.div>
    </section>
  )
}

export default HeroSection