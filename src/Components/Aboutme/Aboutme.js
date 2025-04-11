import React, { useEffect, useState } from 'react';

import './Aboutme.css';
import { FaDownload } from 'react-icons/fa';
// import { MdDownload } from 'react-icons/md';

import FadeInOnScroll from '../../../src/ScrollEffects/FadeInOnScroll';
import StaggeredFadeIn from '../../../src/ScrollEffects/StaggeredFadeIn';


const Aboutme = () => {
   
    return (
        <div style={{ position: "relative" }}>
            <div  className='flex justify-between flex-wrap mt-40 mb-3'>
            <FadeInOnScroll className=' w-52 my-3 flex justify-end border-8 border-white'>
                <div className='w-64 h-56 overbg bg-linear-to-r from-black to-cyan-400 translate-x-1/4 -translate-y-1/2'>

                   


                </div>

            </FadeInOnScroll>
            <StaggeredFadeIn className='w-2/5 h-1/2  my-3 -translate-y-1/3'>
              
              <p className=' text-white'>Hi, I am Roudro</p>
               
               <h1 className='font-bold text-2xl text-white'>Web Developer</h1>
               <p className='tracking-[10px] text-xl  text-white'>Based on <span className=' font-semibold '>Bangladesh</span></p>

            

               <p className='my-3 text-white'>I have a strong grasp of front-end and back-end technologies. My expertise in creating responsive, dynamic, and visually appealing websites sets me apart in the industry.</p>
              
               <button className="btn btn-accent ease-[.14s] translate-y-24 ">Download CV <span><FaDownload /></span></button>
            


            </StaggeredFadeIn>
            <FadeInOnScroll className=' w-52 my-3 flex justify-end border-8 border-white'>
                <div className='w-64 h-56 overbg2 bg-linear-to-r from-black to-cyan-400 translate-x-1/4 translate-y-1/2'>

                    


                </div>

            </FadeInOnScroll>




        </div>
        </div>
    );
};

export default Aboutme;