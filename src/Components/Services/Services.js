import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import ReactCardFlip from 'react-card-flip';
import service1 from '../../../src/assets/image/services/service1.jpg';
import service2 from '../../../src/assets/image/services/service2.jpg';
import service3 from '../../../src/assets/image/services/service3.jpg';
import service4 from '../../../src/assets/image/services/service4.jpg';
import service5 from '../../../src/assets/image/services/service5.jpg';
import './Service.css';


const Services = () => {
    const [positionIndexes, setpositionIndexes] = useState([0, 1, 2, 3, 4]);
    const [isfliped, setIsfliped] = useState(false);
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
        <div className='my-20'>
            <h3 className='text-3xl font-semibold text-white text-center'>Services</h3>


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
                        style={{ width: "40%", position: "absolute" }}
                    />
                ))}
                <div className="flex flex-row gap-3">
                    <button
                        className="text-white mt-[400px] bg-accent rounded-md py-2 px-4"
                        onClick={handleBack}
                    >
                        back
                    </button>
                    <button
                        className="text-white mt-[400px] bg-accent rounded-md py-2 px-4"
                        onClick={handleNext}
                    >
                        next
                    </button>
                </div>
            </div>

            <div className=' grid lg:grid-cols-3 md:grid-cols-1 sm: grid-cols-1 flip-card'>
                <div className='w-full min-h-64'>
                    <div className="card  w-80 my-24" onClick={handleFliped}>

                        <motion.div 
                            className='flip-card-inner '
                            initial={false}
                            animate={{ rotateY: isfliped ? 180 : 360 }}
                            transition={{ duration: 0.6, animationDirection: "normal" }}
                            onAnimationComplete={() => setIsAnimate(false)}
                        >
                            <div className="card-body flip-card-front shadow-black shadow-xl drop-shadow-2xl text-white">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-accent">Buy Now</button>
                                </div>
                            </div>
                            <div className="card-body flip-card-back shadow-black shadow-xl drop-shadow-2xl text-white">
                                <h2 className="card-title">Card back!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-accent">Buy Now</button>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
                <div className='w-full min-h-64' >
                    <div className="card  w-80 my-24" onClick={handleFliped}>

                        <motion.div
                            className='flip-card-inner '
                            initial={false}
                            animate={{ rotateY: isfliped ? 180 : 360 }}
                            transition={{ duration: 0.6, animationDirection: "normal" }}
                            onAnimationComplete={() => setIsAnimate(false)}
                        >
                            <div className="card-body flip-card-front shadow-black shadow-xl drop-shadow-2xl text-white">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-accent">Buy Now</button>
                                </div>
                            </div>
                            <div className="card-body flip-card-back shadow-black shadow-xl drop-shadow-2xl text-white">
                                <h2 className="card-title">Card back!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-accent">Buy Now</button>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
                <div className='w-full min-h-64' >
                    <div className="card  w-80 my-24" onClick={handleFliped}>

                        <motion.div
                            className='flip-card-inner '
                            initial={false}
                            animate={{ rotateY: isfliped ? 180 : 360 }}
                            transition={{ duration: 0.6, animationDirection: "normal" }}
                            onAnimationComplete={() => setIsAnimate(false)}
                        >
                            <div className="card-body flip-card-front shadow-black shadow-xl drop-shadow-2xl text-white">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-accent">Buy Now</button>
                                </div>
                            </div>
                            <div className="card-body flip-card-back shadow-black shadow-xl drop-shadow-2xl text-white">
                                <h2 className="card-title">Card back!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-accent">Buy Now</button>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
                <div className='w-full min-h-64' >
                    <div className="card  w-80 my-24" onClick={handleFliped}>

                        <motion.div
                            className='flip-card-inner '
                            initial={false}
                            animate={{ rotateY: isfliped ? 180 : 360 }}
                            transition={{ duration: 0.6, animationDirection: "normal" }}
                            onAnimationComplete={() => setIsAnimate(false)}
                        >
                            <div className="card-body flip-card-front shadow-black shadow-xl drop-shadow-2xl text-white">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-accent">Buy Now</button>
                                </div>
                            </div>
                            <div className="card-body flip-card-back shadow-black shadow-xl drop-shadow-2xl text-white">
                                <h2 className="card-title">Card back!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-accent">Buy Now</button>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
                <div className='w-full min-h-64' >
                    <div className="card  w-80 my-24" onClick={handleFliped}>

                        <motion.div
                            className='flip-card-inner '
                            initial={false}
                            animate={{ rotateY: isfliped ? 180 : 360 }}
                            transition={{ duration: 0.6, animationDirection: "normal" }}
                            onAnimationComplete={() => setIsAnimate(false)}
                        >
                            <div className="card-body flip-card-front shadow-black shadow-xl drop-shadow-2xl text-white">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-accent">Buy Now</button>
                                </div>
                            </div>
                            <div className="card-body flip-card-back shadow-black shadow-xl drop-shadow-2xl text-white">
                                <h2 className="card-title">Card back!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-accent">Buy Now</button>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
                <div className='w-full min-h-64' >
                    <div className="card  w-80 my-24" onClick={handleFliped}>

                        <motion.div
                            className='flip-card-inner '
                            initial={false}
                            animate={{ rotateY: isfliped ? 180 : 360 }}
                            transition={{ duration: 0.6, animationDirection: "normal" }}
                            onAnimationComplete={() => setIsAnimate(false)}
                        >
                            <div className="card-body flip-card-front shadow-black shadow-xl drop-shadow-2xl text-white">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-accent">Buy Now</button>
                                </div>
                            </div>
                            <div className="card-body flip-card-back shadow-black shadow-xl drop-shadow-2xl text-white">
                                <h2 className="card-title">Card back!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-accent">Buy Now</button>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;