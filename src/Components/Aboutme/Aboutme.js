import React from 'react';
import './Aboutme.css';
import { FaDownload } from 'react-icons/fa';

import FadeInOnScroll from '../../../src/ScrollEffects/FadeInOnScroll';
import StaggeredFadeIn from '../../../src/ScrollEffects/StaggeredFadeIn';

const Aboutme = () => {
    return (
        <div style={{ position: "relative" }}>
            <div className="flex flex-col xl:flex-row items-center justify-between mt-28 mb-3">

                {/* Left Box */}
                <FadeInOnScroll className="w-52 my-3 flex justify-center xl:justify-end border-8 border-white order-1">
                    <div className="w-64 h-56 overbg bg-linear-to-r from-black to-cyan-400 
                        translate-x-0 translate-y-0 
                        xl:translate-x-1/4 xl:-translate-y-1/2" />
                </FadeInOnScroll>

                {/* Center Content */}
                <StaggeredFadeIn className="w-full xl:w-2/5 my-3 order-2 text-center xl:text-left">
                    <p className="text-white">Hi, I am Roudro</p>

                    <h1 className="font-bold text-2xl text-white">Web Developer</h1>

                    <p className="tracking-[10px] text-xl text-white">
                        Based on <span className="font-semibold">Bangladesh</span>
                    </p>

                    <p className="my-3 text-white mx-auto max-w-[90%] md:max-w-[500px] lg:max-w-full text-center xl:text-left">
                        I have a strong grasp of front-end and back-end technologies. My expertise in creating responsive, dynamic, and visually appealing websites sets me apart in the industry.
                    </p>



                    <button className="btn btn-accent mt-6 xl:translate-y-0">
                        Download CV <span><FaDownload /></span>
                    </button>
                </StaggeredFadeIn>

                {/* Right Box */}
                <FadeInOnScroll className="w-52 my-3 flex justify-center xl:justify-end border-8 border-white order-3">
                    <div className="w-64 h-56 overbg2 bg-linear-to-r from-black to-cyan-400 
                        translate-x-0 translate-y-0 
                        xl:translate-x-1/4 xl:translate-y-1/2" />
                </FadeInOnScroll>
            </div>
        </div>
    );
};

export default Aboutme;
