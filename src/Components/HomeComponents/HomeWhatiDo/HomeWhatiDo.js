import React from 'react';
import './HomeWhatiDo.css';
import websideng from '../../../assets/image/whatIDo/webdesign.png';
import bugfixing from '../../../assets/image/whatIDo/bugfixing.png';
import responsive from '../../../assets/image/whatIDo/ai-generated-8876491_1280.png';
import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';
import { SiVisualstudiocode } from 'react-icons/si';
import { BiSolidCustomize } from 'react-icons/bi';

const HomeWhatiDo = () => {
    return (
        <div className='my-10 '>
            <div>
                <h3 className='text-3xl font-semibold text-white text-center mb-14'>What I Do</h3>
            </div>
            <div className=' grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 '>

                <div className="card bg-base-100 lg:w-80 md:w-auto sm:w-auto rounded-none shadow-black shadow-xl drop-shadow-2xl text-white">
                    <div className="card-body">
                    <span ><FaCode  className='text-3xl'/></span>
                        <h2 className="card-title">Web Design</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-accent text-white">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 lg:w-80 md:w-auto sm:w-auto rounded-none shadow-black shadow-xl drop-shadow-2xl text-white">
                    <div className="card-body">
                    <span><SiVisualstudiocode className='text-3xl'/></span>
                        <h2 className="card-title">Web Development</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-accent text-white">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 lg:w-80 md:w-auto sm:w-auto rounded-none shadow-black shadow-xl drop-shadow-2xl text-white">
                    <div className="card-body">
                    <span><BiSolidCustomize  className='text-3xl'/></span>
                        <h2 className="card-title">Customization</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-accent text-white">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeWhatiDo;