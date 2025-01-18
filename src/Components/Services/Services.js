import React, { useState } from 'react';
import { motion } from 'framer-motion';
import service1 from '../../../src/assets/image/services/service1.jpg';
import service2 from '../../../src/assets/image/services/service2.jpg';
import service3 from '../../../src/assets/image/services/service3.jpg';
import service4 from '../../../src/assets/image/services/service4.jpg';
import service5 from '../../../src/assets/image/services/service5.jpg';


const Services = () => {
    const [positionIndexes, setpositionIndexes] = useState([0, 1, 2, 3, 4]);
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
        <div>
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


            <div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;