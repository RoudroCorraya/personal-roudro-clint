import React, { useEffect, useState } from 'react';

import './Aboutme.css';
import { FaDownload } from 'react-icons/fa';
// import { MdDownload } from 'react-icons/md';


const Aboutme = () => {
   
    return (
        <div style={{ position: "relative" }}>
            <div  className='flex justify-between flex-wrap mt-40 mb-3'>
            <div className=' w-52 my-3 flex justify-end border-8 border-white'>
                <div className='w-64 h-56 overbg bg-linear-to-r from-black to-cyan-400 translate-x-1/4 -translate-y-1/2'>

                    <h3 className='text-black font-bold text-3xl'>Hellow me</h3>


                </div>

            </div>
            <div className='w-2/5 h-1/2  my-3 -translate-y-1/3'>
              
              <p className=' text-white'>Hi, I am Roudro</p>
               
               <h1 className='font-bold text-2xl text-white'>Web Developer</h1>
               <p className='tracking-[10px] text-xl  text-white'>Based on <span className=' font-semibold '>Bangladesh</span></p>

            

               <p className='my-3 text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer  </p>
              
               <button className="btn btn-accent ease-[.14s] translate-y-24 ">Download CV <span><FaDownload /></span></button>
            


            </div>
            <div className=' w-52 my-3 flex justify-end border-8 border-white'>
                <div className='w-64 h-56 overbg2 bg-linear-to-r from-black to-cyan-400 translate-x-1/4 translate-y-1/2'>

                    <h3 className='text-black font-bold text-3xl'>Hellow me</h3>


                </div>

            </div>




        </div>
        </div>
    );
};

export default Aboutme;