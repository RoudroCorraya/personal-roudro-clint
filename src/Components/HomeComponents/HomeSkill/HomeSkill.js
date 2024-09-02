import React from 'react';
import './HomeSkill.css';

const HomeSkill = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 my-24'>
            <div className=''>
                <h3 className='text-center text-white text-3xl font-semibold mb-14'>Technical Skill</h3>
                <div className='my-9'>
                    <p className='text-start mt-2 font-bold text-white'>Html</p>

                    <progress className="progress progress-accent w-full" value="87" max="100"></progress>
                </div>
                <div className='my-9'>
                    <p className='text-start mt-2 font-bold text-white'>Css</p>
                    <progress className="progress progress-accent w-full" value="85" max="100"></progress>
                </div>
                <div className='my-9'>
                    <p className='text-start mt-2 font-bold text-white'>Javascript</p>
                    <progress className="progress progress-accent w-full" value="65" max="100"></progress>
                </div>
                <div className='my-9'>
                    <p className='text-start mt-2 font-bold text-white'>React</p>
                    <progress className="progress progress-accent w-full" value="76" max="100"></progress>
                </div>
                <div className='my-9'>
                    <p className='text-start mt-2 font-bold text-white'>Php</p>
                    <progress className="progress progress-accent w-full" value="60" max="100"></progress>
                </div>

            </div>
            <div>
                <h3 className='text-center text-white text-3xl font-semibold '>Professional Skill</h3>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-14'>
                    <div className='text-center mt-5'>
                    <div className="radial-progress text-accent" style={{ "--value": "80", "--size": "8rem", "--thickness": "10px" }} role="progressbar"><span className='text-white'>80%</span></div>
                    <p className='text-center text-white font-semibold mt-5'>Communication</p>
                    </div>
                    <div className='text-center mt-5'>
                    <div className="radial-progress text-accent" style={{ "--value": "76", "--size": "8rem", "--thickness": "10px" }} role="progressbar"><span className='text-white'>76%</span></div>
                    <p className='text-center text-white font-semibold mt-5'>Team Work</p>
                    </div>
                    <div className='text-center mt-5'>
                    <div className="radial-progress text-accent" style={{ "--value": "85", "--size": "8rem", "--thickness": "10px" }} role="progressbar"><span className='text-white'>85%</span></div>
                    <p className='text-center text-white font-semibold mt-5'>Project Management</p>
                    </div>
                    <div className='text-center mt-5 '>
                    <div className="radial-progress text-accent" style={{ "--value": "70", "--size": "8rem", "--thickness": "10px" }} role="progressbar"><span className='text-white'>70%</span></div>
                    <p className='text-center text-white font-semibold mt-5'>Creativity</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSkill;