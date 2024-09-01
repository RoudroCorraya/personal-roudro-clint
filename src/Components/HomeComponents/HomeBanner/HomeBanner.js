import React from 'react';
import banner1 from '../../../assets/image/bannerImage/banner1.jpg';
import banner2 from '../../../assets/image/bannerImage/banner2.png';
import banner3 from '../../../assets/image/bannerImage/me.jpg';
import { Link } from 'react-router-dom';
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { PiPhoneCallFill } from 'react-icons/pi';
import { FaFacebookF, FaLinkedinIn, FaLocationDot, FaSquareTwitter, FaSquareXTwitter, FaXTwitter } from 'react-icons/fa6';
import { FaFacebook, FaInstagram, FaInstagramSquare, FaLinkedin, FaXingSquare } from 'react-icons/fa';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        
            <div className=' grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 py-14'>
                {/* <div className=''>
                <span className='text-white py-1 px-2 bg-info w-28 rounded-tl-xl rounded-tr-xl rounded-br-xl '>Hello I am </span>
                </div> */}
            <div className=''>
                <div className=' w-full lg:mx-0 md:mx-auto sm:mx-auto iconCOntrol'>
                <span className='text-white  py-1 px-2 bg-info w-28 rounded-tl-xl rounded-tr-xl rounded-br-xl '>Hello I am </span>
                </div>
                <h1 className='text-6xl font-bold text-white lg:text-left md: text-center sm:text-center'>Rickson Corraya</h1>
                <h3 className='text-3xl font-semibold text-white lg:text-left md: text-center sm:text-center'>Web Developer</h3>
                <div className='py-5 lg:text-left md: text-center sm:text-center'>
                    <ul className='text-white '>
                        <li><span className='lg:mr-8 md:mr-3 sm:mr-3 '><AiOutlineMail className='inline-block' /></span>rickson826@gmail.com</li>
                        <li><span className='lg:mr-8 md:mr-3 sm:mr-3'><PiPhoneCallFill className='inline-block' /></span>01836200259</li>
                        <li><span className='lg:mr-8 md:mr-3 sm:mr-3'><FaLocationDot className='inline-block' /></span>Dhaka, Bangladesh</li>
                    </ul>
                </div>
                <div className=' w-full'>
                    <div className=' w-full iconCOntrol'>
                        <Link className='mx-3 text-4xl text-white'><FaFacebook className='inline-block'/></Link>
                        <Link className='mx-3 text-4xl text-white'><AiFillInstagram className='inline-block'/></Link>
                        <Link className='mx-3 text-4xl text-white'><FaSquareXTwitter className='inline-block'/></Link>
                        <Link className='mx-3 text-4xl text-white'><FaLinkedin className='inline-block'/></Link>
                    
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
            </div>
            <div className='m-auto'>
                <div className="image">
                    
                </div>
            </div>
        </div>
      
    );
};

export default HomeBanner;