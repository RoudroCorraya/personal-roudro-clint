import React from 'react';
import './HomeWhatiDo.css';
import { FaCode } from "react-icons/fa";
import { BiSolidCustomize } from 'react-icons/bi';
import { VscVscode } from 'react-icons/vsc';
import StaggeredFadeIn from '../../../ScrollEffects/StaggeredFadeIn';


const HomeWhatiDo = () => {
    return (
        <div className='my-10'>
            <h3 className='text-3xl font-semibold text-white text-center mb-14'>What I Do</h3>
            
           
            <StaggeredFadeIn className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-8">
                
                <div className='hover:-mt-6 transition-all duration-500'>
                    <div className="card bg-base-100 lg:w-80 md:w-auto sm:w-auto rounded-none shadow-black shadow-xl drop-shadow-2xl text-white">
                        <div className="card-body">
                            <span><FaCode className='text-3xl' /></span>
                            <h2 className="card-title">Web Design</h2>
                            <p>I can create visually appealing and user-friendly designs tailored to your business needs.</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-accent text-white">Details</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hover:-mt-6 transition-all duration-500'>
                    <div className="card bg-base-100 lg:w-80 md:w-auto sm:w-auto rounded-none shadow-black shadow-xl drop-shadow-2xl text-white">
                        <div className="card-body">
                            <span><VscVscode className='text-3xl' /></span>
                            <h2 className="card-title">Web Development</h2>
                            <p>Clean, fast, and scalable web apps built with modern tech like React and Node.js.</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-accent text-white">Details</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hover:-mt-6 transition-all duration-500'>
                    <div className="card bg-base-100 lg:w-80 md:w-auto sm:w-auto rounded-none shadow-black shadow-xl drop-shadow-2xl text-white">
                        <div className="card-body">
                            <span><BiSolidCustomize className='text-3xl' /></span>
                            <h2 className="card-title">Customization</h2>
                            <p>I provide full customization support for existing projects to match your brand.</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-accent text-white">Details</button>
                            </div>
                        </div>
                    </div>
                </div>

            </StaggeredFadeIn>
        </div>
    );
};

export default HomeWhatiDo;
