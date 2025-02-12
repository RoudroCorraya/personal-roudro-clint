import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { TiTick } from "react-icons/ti";

const ServiceDetails = () => {
    const getServiceLoaded = useLoaderData();
    return (
        <div className='text-white'>
            <h3>Service Details {getServiceLoaded.title}</h3>
            <div className="card lg:card-side bg-base-100 shadow-black shadow-xl drop-shadow-2xl my-6">
                <figure className='lg:w-1/3 md:w-full sm:w-full rounded-2xl'>
                    <img
                        src={getServiceLoaded.image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{getServiceLoaded.title}</h2>
                    <p>{getServiceLoaded.details}</p>
                    <ul className='text-white'>
                        <li className=''><span><TiTick className='inline-block text-2xl text-accent' /></span>Additional Change</li>
                        <li><span><TiTick className='inline-block text-2xl text-accent' /></span>Code Review</li>
                        <li><span><TiTick className='inline-block text-2xl text-accent' /></span>Features Issue</li>
                        <li><span><TiTick className='inline-block text-2xl text-accent' /></span>Add Features</li>
                        <li><span><TiTick className='inline-block text-2xl text-accent' /></span>CSS Animation</li>
                        <li><span><TiTick className='inline-block text-2xl text-accent' /></span>Responsiveness</li>
                        <li><span><TiTick className='inline-block text-2xl text-accent' /></span>Minimum Service Charge <span className='text-3xl font-bold'>$10</span></li>
                    </ul>
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;