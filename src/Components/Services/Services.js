import React, { useState } from 'react';
import { motion } from 'framer-motion';
import service1 from '../../../src/assets/image/services/ser11.jpg';
import service2 from '../../../src/assets/image/services/ser9.webp';
import service3 from '../../../src/assets/image/services/ser12.jpeg';
import service4 from '../../../src/assets/image/services/service7.webp';
import service5 from '../../../src/assets/image/services/ser8.jpg';
import { TiTick } from "react-icons/ti";
import { BsStickies } from "react-icons/bs";
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import './Service.css';
import StaggeredFadeIn from '../../ScrollEffects/StaggeredFadeIn';

const Services = () => {
    const serviceLoaded = useLoaderData();
    const [services, setServices] = useState(serviceLoaded);
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
    const [flippedId, setFlippedId] = useState(null);

    const handleFliped = (serviceId) => {
        setFlippedId((prev) => (prev === serviceId ? null : serviceId));
    };

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => prevIndexes.map((i) => (i + 1) % 5));
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => prevIndexes.map((i) => (i + 4) % 5));
    };

    const images = [service1, service2, service3, service4, service5];
    const position = ['center', 'left1', 'left', 'right', 'right1'];

    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-50%", scale: 0.7, zIndex: 3 },
        left: { x: "-90%", scale: 0.5, zIndex: 2 },
        right: { x: "90%", scale: 0.5, zIndex: 1 },
        right1: { x: "50%", scale: 0.7, zIndex: 3 },
    };

    return (
        <div className="my-28 space-y-24">
            {/* Section 1: Work Environment */}
            <StaggeredFadeIn>
                <h3 className='text-3xl font-semibold text-white text-center'>Our Work Environment</h3>
                <div className="flex items-center flex-col justify-center relative h-[500px]">
                    {images.map((image, index) => (
                        <motion.img
                            key={index}
                            src={image}
                            alt={image}
                            className="rounded-[12px] h-80 w-80"
                            initial="center"
                            animate={position[positionIndexes[index]]}
                            variants={imageVariants}
                            transition={{ duration: 0.5 }}
                            style={{ position: "absolute" }}
                        />
                    ))}

                    <div className="flex flex-row gap-3 mt-[400px] z-10">
                        <button
                            className="text-white bg-accent rounded-md py-2 px-4"
                            onClick={handleBack}
                        >
                            <FaChevronCircleLeft className='text-3xl' />
                        </button>
                        <button
                            className="text-white bg-accent rounded-md py-2 px-4"
                            onClick={handleNext}
                        >
                            <FaChevronCircleRight className='text-3xl' />
                        </button>
                    </div>
                </div>
            </StaggeredFadeIn>

            {/* Section 2: Services We Offer */}
            <StaggeredFadeIn>
                <h3 className='text-3xl font-semibold text-white text-center mt-10'>Services We Offer!</h3>
                <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 flip-card'>
                    {services.map((service) => (
                        <div key={service._id} className='w-full min-h-64 my-3 flex justify-center'>
                            <div className="card w-80 my-24">
                                <motion.div
                                    className='flip-card-inner'
                                    initial={false}
                                    animate={{ rotateY: flippedId === service._id ? 180 : 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {/* Front */}
                                    <div
                                        className="hero min-h-64 flip-card-front border-4 rounded-2xl shadow-black shadow-xl drop-shadow-2xl"
                                        style={{ backgroundImage: `url(${service?.image})` }}
                                    >
                                        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                                        <div className="hero-content text-neutral-content text-center">
                                            <div className="max-w-md text-white">
                                                <h1 className="mb-5 text-3xl font-bold">{service?.title}</h1>
                                                <p className="mb-5">{service?.details}</p>
                                                <button
                                                    className="btn btn-accent text-white"
                                                    onClick={() => handleFliped(service._id)}
                                                >
                                                    Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Back */}
                                    <div
                                        className="hero min-h-64 flip-card-back rounded-2xl border-4 shadow-black shadow-xl drop-shadow-2xl"
                                        style={{ backgroundImage: `url(${service?.image})` }}
                                    >
                                        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                                        <div className="hero-content text-neutral-content text-center">
                                            <div className="max-w-md">
                                                <ul className='text-white'>
                                                    <li><TiTick className='inline-block text-2xl text-accent' /> Additional Change</li>
                                                    <li><TiTick className='inline-block text-2xl text-accent' /> Code Review</li>
                                                    <li><TiTick className='inline-block text-2xl text-accent' /> Features Issue</li>
                                                    <li><TiTick className='inline-block text-2xl text-accent' /> Add Features</li>
                                                    <li><TiTick className='inline-block text-2xl text-accent' /> CSS Animation</li>
                                                    <li><TiTick className='inline-block text-2xl text-accent' /> Responsiveness</li>
                                                </ul>
                                                <Link to={`/servicedetails/${service._id}`}>
                                                    <button className="btn btn-accent text-white">Get Service</button>
                                                </Link>
                                                <span
                                                    onClick={() => handleFliped(service._id)}
                                                    className='cursor-pointer'
                                                >
                                                    <BsStickies className='inline-block text-2xl text-accent mx-3' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </StaggeredFadeIn>
        </div>
    );
};

export default Services;
