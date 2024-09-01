import React from 'react';
import banner1 from '../../../assets/image/bannerImage/banner1.jpg';
import banner2 from '../../../assets/image/bannerImage/banner2.png';
import banner3 from '../../../assets/image/bannerImage/me.jpg';
import { Link } from 'react-router-dom';
import { AiOutlineMail } from "react-icons/ai";
import { PiPhoneCallFill } from 'react-icons/pi';
import { FaFacebookF, FaLinkedinIn, FaLocationDot, FaSquareTwitter } from 'react-icons/fa6';
import { FaInstagramSquare, FaXingSquare } from 'react-icons/fa';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div className=' grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 py-14'>
            <div className=''>
                <p className='text-white py-1 px-2 bg-info w-28 rounded-tl-xl rounded-tr-xl rounded-br-xl '>Hello I am </p>
                <h1 className='text-6xl font-bold text-white '>Rickson Corraya</h1>
                <h3 className='text-3xl font-semibold text-white '>Web Developer</h3>
                <div className='py-5'>
                    <ul className='text-white '>
                        <li><span className='mr-8 '><AiOutlineMail className='inline-block' /></span>rickson826@gmail.com</li>
                        <li><span className='mr-8 '><PiPhoneCallFill className='inline-block' /></span>01836200259</li>
                        <li><span className='mr-8'><FaLocationDot className='inline-block' /></span>Dhaka, Bangladesh</li>
                    </ul>
                </div>
                <div className='w-80 flex justify-start '>
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

                </div>
            </div>
            <div className='m-auto'>
                <div className="image">
                    
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;