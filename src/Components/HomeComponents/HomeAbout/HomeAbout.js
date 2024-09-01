import React from 'react';
import '../HomeAbout/HomeAbout.css';
import aboutImage from '../../../assets/image/aboutme/aboutme.jpg';

const HomeAbout = () => {
    return (
        <div className='grid lg:grid-cols-2 md: grid-cols-1 sm:grid-cols-1 py-12'>
            <div className='adboutImage w-96   my-10'>
                <img className='rounded-2xl ' src={aboutImage} alt='aboutme.png'></img>
            </div>
            <div className='text-white py-10'>
                <h2 className='text-3xl font-semibold my-3'>About Me</h2>
                <p className='my-3'>I am Rickson web developer based on Dhaka. I have rich experience in web design building and customaization. Also I am good at </p>

                <div className='text-white'>
                <ul >
                    <li className='inline-block px-5 py-3 my-3 mr-6 border-solid outline outline-info rounded-lg'>
                        <span>Php</span>
                    </li>
                    <li className='inline-block px-5 py-3 my-3 mr-6 border-solid outline outline-info rounded-lg'>
                        <span>Html</span>
                    </li>
                    <li className='inline-block px-5 py-3 my-3 mr-6 border-solid outline outline-info rounded-lg'>
                        <span>Css</span>
                    </li>
                    <li className='inline-block px-5 py-3 my-3 mr-6 border-solid outline outline-info rounded-lg'>
                        <span>React</span>
                    </li>
                    
                </ul>
                </div>
                <div className='text-white'>
                    <ul>
                    <li className='inline-block px-5 py-3 my-3 mr-6 border-solid outline outline-info rounded-lg'>
                        <span>Javascript</span>
                    </li>
                    </ul>
                </div>
                
                <button className="btn btn-info text-white my-3">Download CV</button>
            </div>
        </div>
    );
};

export default HomeAbout;