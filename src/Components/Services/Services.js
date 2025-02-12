import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import ReactCardFlip from 'react-card-flip';
import service1 from '../../../src/assets/image/services/ser11.jpg';
import service2 from '../../../src/assets/image/services/ser9.webp';
import service3 from '../../../src/assets/image/services/ser12.jpeg';
import service4 from '../../../src/assets/image/services/service7.webp';
import service5 from '../../../src/assets/image/services/ser8.jpg';
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { TiTick } from "react-icons/ti";
import { BsStickies } from "react-icons/bs";
import './Service.css';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { BiFullscreen } from 'react-icons/bi';


const Services = () => {
    const serviceLoaded = useLoaderData();
    const [services, setServices] = useState(serviceLoaded);
    const [positionIndexes, setpositionIndexes] = useState([0, 1, 2, 3, 4]);
    const [isfliped, setIsfliped] = useState(false);
    const [flippedId, setFlippedId] = useState(null);
    const [isAnimate, setIsAnimate] = useState(false);
    const handleFliped = () => {
        
        if (!isAnimate) {
            setIsfliped(!isfliped);
            setIsAnimate(true);
        }
    }
    const handleNext = () => {
        setpositionIndexes((prevIndexes) => {
            const updateIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
            return updateIndexes;
        })
    }
    const handleBack = () => {
        setpositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 4) % 5
            );

            return updatedIndexes;
        });
    };
    const images = [
        service1,
        service2,
        service3,
        service4,
        service5
    ]
    const position = [
        'center',
        'left1',
        'left',
        'right',
        'right1'
    ]
    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-50%", scale: 0.7, zIndex: 3 },
        left: { x: "-90%", scale: 0.5, zIndex: 2 },
        right: { x: "90%", scale: 0.5, zIndex: 1 },
        right1: { x: "50%", scale: 0.7, zIndex: 3 },
    };


    return (
        <div className='my-28'>
            <h3 className='text-3xl font-semibold text-white text-center'>Our Work Environment</h3>


            <div className="flex items-center flex-col justify-center">
                {images.map((image, index) => (
                    <motion.img
                        key={index}
                        src={image}
                        alt={image}
                        className="rounded-[12px] h-80"
                        initial="center"
                        animate={position[positionIndexes[index]]}
                        variants={imageVariants}
                        transition={{ duration: 0.5 }}
                        style={{ width: "30%", position: "absolute" }}

                    />

                ))}

                <div className="flex flex-row gap-3">
                    <button
                        className="text-white mt-[400px] bg-accent rounded-md py-2 px-4"
                        onClick={handleBack}
                    >
                        <FaChevronCircleLeft className='text-3xl' />
                    </button>
                    <button
                        className="text-white mt-[400px] bg-accent rounded-md py-2 px-4"
                        onClick={handleNext}
                    >
                        <FaChevronCircleRight className='text-3xl' />
                    </button>
                </div>
            </div>
            <h3 className='text-3xl font-semibold text-white text-center mt-10'>Services We Offer !</h3>
            <div className=' grid lg:grid-cols-3 md:grid-cols-1 sm: grid-cols-1 flip-card '>
                {
                    services.map(service => <div key={service._id} className='w-full min-h-64 my-3'>
                        <div className="card  w-80 my-24">

                            <motion.div
                                className='flip-card-inner '
                                initial={false}
                                animate={{ rotateY: isfliped ? 180 : 360 }}
                                transition={{ duration: 0.6, animationDirection: "normal" }}
                                onAnimationComplete={() => setIsAnimate(false)}
                            >
                               
                                <div
                                    className="hero min-h-64   flip-card-front border-4  rounded-2xl shadow-black shadow-xl drop-shadow-2xl"
                                    style={{
                                        backgroundImage: `url(${service?.image})`,
                                    }}>
                                    <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                                    <div className="hero-content text-neutral-content text-center">
                                        <div className="max-w-md text-white">
                                            <h1 className="mb-5 text-3xl font-bold">{service?.title}</h1>
                                            <p className="mb-5">
                                                {
                                                    service?.details
                                                }
                                            </p>
                                            <button className="btn btn-accent text-white" onClick={()=>handleFliped(service._id)}>Details</button>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="hero min-h-64 flip-card-back rounded-2xl border-4 shadow-black shadow-xl drop-shadow-2xl"
                                    style={{
                                        
                                        backgroundImage: `url(${service?.image})`,
                                    }}>
                                    <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                                    <div className="hero-content text-neutral-content text-center">
                                        <div className="max-w-md">
                                            <ul className='text-white'>
                                                <li className=''><span><TiTick className='inline-block text-2xl text-accent' /></span>Additional Change</li>
                                                <li><span><TiTick className='inline-block text-2xl text-accent' /></span>Code Review</li>
                                                <li><span><TiTick className='inline-block text-2xl text-accent' /></span>Features Issue</li>
                                                <li><span><TiTick className='inline-block text-2xl text-accent' /></span>Add Features</li>
                                                <li><span><TiTick className='inline-block text-2xl text-accent' /></span>CSS Animation</li>
                                                <li><span><TiTick className='inline-block text-2xl text-accent' /></span>Responsiveness</li>
                                            </ul>
                                            <Link to={`/servicedetails/${service._id}`}><button className="btn btn-accent text-white">Get Service</button></Link>
                                            <BsStickies className='inline-block text-2xl text-accent mx-3' onClick={handleFliped}/>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>)
                }







            </div>

        </div>
    );
};

export default Services;