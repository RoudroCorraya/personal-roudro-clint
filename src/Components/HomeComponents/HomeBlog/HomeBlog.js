import React from 'react';
import './HomeBlog.css';
import blog1 from '../../../assets/image/blog/blog1.jpg';
import blog2 from '../../../assets/image/blog/blog2.jpg';
import blog3 from '../../../assets/image/blog/blog3.jpg';

const HomeBlog = () => {
    return (
        <div className=''>
            <h3 className='text-white text-3xl font-semibold text-center my-28'>My latest Blogs</h3>

            <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1'>
                <div className='w-80 my-4 mx-auto'>
                    <div className="card card-compact bg-base-100 w-80 shadow-black shadow-xl drop-shadow-2xl text-white">
                        <figure>
                            <img
                                src={blog1}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">New Features!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-accent text-white">read more</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-80 my-4 mx-auto'>
                    <div className="card card-compact bg-base-100 w-80 shadow-black shadow-xl drop-shadow-2xl text-white">
                        <figure>
                            <img
                                src={blog2}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-accent text-white">read more</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-80 my-4 mx-auto'>
                    <div className="card card-compact bg-base-100 w-80 shadow-black shadow-xl drop-shadow-2xl text-white">
                        <figure>
                            <img
                                src={blog3}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-accent text-white">read more</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>


        </div>
    );
};

export default HomeBlog;