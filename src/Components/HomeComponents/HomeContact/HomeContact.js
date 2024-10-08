import React from 'react';
import './HomeContact.css';
import contactImage from '../../../assets/image/HomeContact/glove3.png';
import { FaLocationDot, FaMapLocation, FaMapLocationDot, FaPeopleGroup } from 'react-icons/fa6';
import { FaPeopleCarry } from 'react-icons/fa';
const HomeContact = () => {
    return (
        <div className='contact'>
            {/* <h3 className='text-3xl font-semibold text-white text-center my-28'>Contact Us</h3> */}
            <div className=' grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
            <div className='contactImage pt-28'>
                
                <img src={contactImage} alt='contactImage'/>
                <div className='contactOverlay text-center'>
                    {/* <div><FaPeopleGroup className='inline-block  text-9xl text-accent' /></div> */}
                    {/* <div><FaPeopleCarry className='inline-block  text-9xl text-accent' /></div> */}
                    <h3 className='text-3xl font-semibold text-white text-center'>Contact Us</h3>
                    <div>
                        <FaLocationDot className='inline-block  text-2xl text-white mt-32 mr-32' />
                        <FaLocationDot className='inline-block  text-2xl text-white  ml-16 mt-32' />
                        
                     
                    
                    </div>
                  
                </div>
                
            </div>
                <div className='contact w-80 mx-auto'>
                    <label className="input input-bordered flex items-center gap-2 my-6">
                        
                        <input type="text" className="grow" placeholder="Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 my-6">
                       
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 my-6">
                       
                        <input type="text" className="grow" placeholder="Phone" />
                    </label>
                  
                       
                    <textarea className="textarea textarea-bordered w-80 h-44" placeholder="Write your query"></textarea>
                    <button className="btn btn-accent">Submit</button>
                </div>
                
            </div>
        </div>
    );
};

export default HomeContact;