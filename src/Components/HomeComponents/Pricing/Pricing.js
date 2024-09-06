import React from 'react';
import './Pricing.css';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaHourglass, FaToiletPaper } from 'react-icons/fa6';
import { PiHourglassFill } from 'react-icons/pi';
import { RiFilePaper2Fill } from 'react-icons/ri';

const Pricing = () => {
    return (
        <div className='my-24'>
            <h3 className='text-3xl font-semibold text-white text-center my-28'>Pricing Table</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1'>
            <div className="card bg-base-100 w-80 pricespace rounded-none shadow-black shadow-xl drop-shadow-2xl text-center text-white">
                <div className="card-body ">
                <FaRegCalendarAlt className='mx-auto text-3xl '/>
                    <h2 className="card-title mx-auto">Full-time Work</h2>
                    <h1 className="card-title mx-auto text-accent text-3xl font-bold">$ 1500</h1>
                    <ul className=''>
                        <li className='my-2'>Web Design</li>
                        <li className='my-2'>Web Development</li>
                        <li className='my-2'>Web Customization</li>
                        <li className='my-2'>Domain Hosting</li>
                        <li className='my-2'>Responsiveness</li>
                        <li className='my-2'>Bootstrap/Tailwind </li>
                        <li className='my-2'>Mongodb/Api</li>
                        <li className='my-2'>Bug Fxing</li>
                    </ul>
                   
                    <div className="card-actions justify-center">
                        <button className="btn bg-accent text-white">Hire Now</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 w-80 pricespace rounded-none shadow-black shadow-xl drop-shadow-2xl text-center text-white">
                <div className="card-body ">
                <RiFilePaper2Fill className='mx-auto text-3xl '/>
                    <h2 className="card-title mx-auto">Fixed-price Work</h2>
                    
                    <h1 className="card-title mx-auto text-accent text-3xl font-bold">$ 500</h1>
                    <ul className=''>
                        <li className='my-2'>Web Design</li>
                        <li className='my-2'>Web Development</li>
                        <li className='my-2'>Web Customization</li>
                        <li className='my-2'>Domain Hosting</li>
                        <li className='my-2'>Responsiveness</li>
                        <li className='my-2'>Bootstrap/Tailwind </li>
                        <li className='my-2'>Mongodb/Api</li>
                        <li className='my-2'>Bug Fxing</li>
                    </ul>
                    <div className="card-actions justify-center">
                        <button className="btn bg-accent text-white">Hire Now</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 w-80 pricespace rounded-none shadow-black shadow-xl drop-shadow-2xl text-center text-white">
                <div className="card-body ">
                <PiHourglassFill className='mx-auto text-3xl '/>
                <h2 className="card-title mx-auto">Hourly-basis Work</h2>
                <h1 className="card-title mx-auto text-accent text-3xl font-bold">$ 50</h1>
                    <ul className=''>
                        <li className='my-2'>Web Design</li>
                        <li className='my-2'>Web Development</li>
                        <li className='my-2'>Web Customization</li>
                        <li className='my-2'>Domain Hosting</li>
                        <li className='my-2'>Responsiveness</li>
                        <li className='my-2'>Bootstrap/Tailwind </li>
                        <li className='my-2'>Mongodb/Api</li>
                        <li className='my-2'>Bug Fxing</li>
                    </ul>
                    <div className="card-actions justify-center">
                        <button className="btn bg-accent text-white">Hire Now</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Pricing;