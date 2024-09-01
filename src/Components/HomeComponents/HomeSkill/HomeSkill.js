import React from 'react';
import './HomeSkill.css';

const HomeSkill = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 my-24'>
            <div >
                <h3 className='text-center text-white text-3xl font-semibold '>Technical Skill</h3>
                <div className=''>
                    <p className='text-start mt-2 font-bold text-white'>Html</p>

                    <progress className="progress progress-accent w-full" value="87" max="100"></progress>
                </div>
                <div className=''>
                    <p className='text-start mt-2 font-bold text-white'>Css</p>
                    <progress className="progress progress-accent w-full" value="85" max="100"></progress>
                </div>
                <div className=''>
                    <p className='text-start mt-2 font-bold text-white'>Javascript</p>
                    <progress className="progress progress-accent w-full" value="65" max="100"></progress>
                </div>
                <div className=''>
                    <p className='text-start mt-2 font-bold text-white'>React</p>
                    <progress className="progress progress-accent w-full" value="76" max="100"></progress>
                </div>
                <div className=''>
                    <p className='text-start mt-2 font-bold text-white'>Php</p>
                    <progress className="progress progress-accent w-full" value="60" max="100"></progress>
                </div>

            </div>
            <div>
                <h3 className='text-center text-white text-3xl font-semibold '>Professional Skill</h3>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
                    <div className="radial-progress text-accent" style={{ "--value": 70 }} role="progressbar">
                        <span className='text-white'>70%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSkill;