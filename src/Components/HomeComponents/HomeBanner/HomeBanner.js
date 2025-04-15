// import React from 'react';
import banner1 from '../../../assets/image/bannerImage/banner1.jpg';
import banner2 from '../../../assets/image/bannerImage/banner2.png';
import banner3 from '../../../assets/image/bannerImage/profile.jpg';
import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { PiPhoneCallFill } from 'react-icons/pi';
import { FaFacebookF, FaLinkedinIn, FaLocationDot, FaSquareTwitter, FaSquareXTwitter, FaXTwitter } from 'react-icons/fa6';
import { FaFacebook, FaInstagram, FaInstagramSquare, FaLinkedin, FaXingSquare } from 'react-icons/fa';
import './HomeBanner.css';
import FadeInOnScroll from '../../../ScrollEffects/FadeInOnScroll';
import StaggeredFadeIn from '../../../ScrollEffects/StaggeredFadeIn';

const HomeBanner = () => {
    // ======================================
    const outerDivRef = useRef(null);

    const innerDivRef = useRef(null);

    useEffect(() => {
        if (!outerDivRef.current || !innerDivRef.current) return;
        let outerDegree = 0;

        let innerDegree = 0;
        const rotationSpeed = 0.5;
        const intervalTime = 10;
        const rotateOuterDiv = () => {
            const outerDiv = outerDivRef.current;

            const innerDiv = innerDivRef.current;
            if (!outerDiv || !innerDiv) return;
            if (!outerDivRef.current || !innerDivRef.current) return;
            outerDegree += rotationSpeed;   // Outer div rotates by the defined speed
            innerDegree -= rotationSpeed;   // Inner div rotates in the opposite direction

            outerDiv.style.transform = `rotate(${outerDegree}deg)`;
            innerDiv.style.transform = `rotate(${innerDegree}deg)`;
        };


        const interval = setInterval(rotateOuterDiv, intervalTime);
        return () => clearInterval(interval);

    }, [outerDivRef.current, innerDivRef.current]);
    // ======================================
    return (

        <div className=' grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 py-14'>
            {/* <div className=''>
                <span className='text-white py-1 px-2 bg-info w-28 rounded-tl-xl rounded-tr-xl rounded-br-xl '>Hello I am </span>
                </div> */}

            <StaggeredFadeIn className=''>
                <div className=' w-full lg:mx-0 md:mx-auto sm:mx-auto iconCOntrol'>
                    <span className='text-white  py-1 px-2 bg-accent w-28 rounded-tl-xl rounded-tr-xl rounded-br-xl '>Hello I am </span>
                </div>
                <h1 className='text-6xl font-bold text-white lg:text-left md: text-center sm:text-center'>Roudro Corraya</h1>
                <h3 className='text-3xl font-semibold text-white lg:text-left md: text-center sm:text-center'>Web Developer</h3>
                <div className='py-5 lg:text-left md: text-center sm:text-center'>
                    <ul className='text-white '>
                        <li><span className='lg:mr-8 md:mr-3 sm:mr-3 '><AiOutlineMail className='inline-block' /></span>roudro826officail@gmail.com</li>
                        <li><span className='lg:mr-8 md:mr-3 sm:mr-3'><PiPhoneCallFill className='inline-block' /></span>01836200259</li>
                        <li><span className='lg:mr-8 md:mr-3 sm:mr-3'><FaLocationDot className='inline-block' /></span>Dhaka, Bangladesh</li>
                    </ul>
                </div>
                <div className=' w-full'>
                    <div className=' w-full iconCOntrol'>
                        <Link to='https://www.facebook.com/share/164andJDKy/' className='mx-3 text-4xl text-white hover:text-accent transition-all duration-500'><FaFacebook className='inline-block' /></Link>
                        <Link to='https://www.instagram.com/ricksoncorraya?igsh=cDh3ZGlsdmFhZ2U2' className='mx-3 text-4xl text-white hover:text-accent transition-all duration-500'><AiFillInstagram className='inline-block' /></Link>
                        <Link to='https://x.com/CRoudro?t=kJwCw-Uf_TJN4HQb0VSM9w&s=09' className='mx-3 text-4xl text-white hover:text-accent transition-all duration-500'><FaSquareXTwitter className='inline-block' /></Link>
                        <Link to='https://www.linkedin.com/in/roudro-corraya-29b2a41b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='mx-3 text-4xl text-white hover:text-accent transition-all duration-500'><FaLinkedin className='inline-block' /></Link>

                    </div>




                </div>

                {/* <div className='w-full flex lg:justify-start md:justify-center sm:justify-center '>
                    <Link className='mr-3'><button className="btn btn-circle btn-outline">
                        <FaFacebookF className='inline-block text-white' />
                    </button></Link>
                    <Link className='mr-3'><button className="btn btn-circle btn-outline">
                        <FaInstagramSquare className='inline-block text-white' />
                    </button></Link>
                    <Link className='mr-3'><button className="btn btn-circle btn-outline">
                        <FaSquareTwitter className='inline-block text-white' />
                    </button></Link>
                    <Link className='mr-3'><button className="btn btn-circle btn-outline">
                        <FaLinkedinIn className='inline-block text-white ' />
                    </button></Link>

                
                </div> */}
            </StaggeredFadeIn>
            <FadeInOnScroll direction='right' className='m-auto'>
                <div className="image">
                
                    {/* ============================================= */}
                    <div className="outer-div" ref={outerDivRef}>
                        <div className="inner-div" ref={innerDivRef}></div>
                    </div>
                    {/* ============================================= */}
                </div>
            </FadeInOnScroll>

        </div>

    );
};

export default HomeBanner;