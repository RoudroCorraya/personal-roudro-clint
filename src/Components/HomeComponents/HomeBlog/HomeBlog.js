import React, { useEffect, useState } from 'react';
import './HomeBlog.css';
import blog1 from '../../../assets/image/blog/blog1.jpg';
import blog2 from '../../../assets/image/blog/blog2.jpg';
import blog3 from '../../../assets/image/blog/blog3.jpg';
import { Link } from 'react-router-dom';
import StaggeredFadeIn from '../../../ScrollEffects/StaggeredFadeIn';

const HomeBlog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/allblogs')
    .then(res => res.json())
    .then(data => {
        console.log('blog data ', data);
        setBlogs(data);
    })
    }, [])
    
    return (
        <div className=''>
            <h3 className='text-white text-3xl font-semibold text-center my-28'>My latest Blogs</h3>

            <StaggeredFadeIn className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1'>
                {
                blogs.map((blog)=><div key={blog._id} className='w-80 my-4 mx-auto hover:-mt-6 transition-all duration-500'>
                <div className="card card-compact bg-base-100 w-80 shadow-black shadow-xl drop-shadow-2xl text-white">
                    <figure className=''>
                        <img className='h-56'
                            src={blog.Thum_image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{blog.title}</h2>
                        <p>{blog.details}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/blogs/${blog._id}`}><button className="btn bg-accent text-white">read more</button></Link>
                        </div>
                    </div>
                </div>
            </div>)
                }
               
                
                
            </StaggeredFadeIn>


        </div>
    );
};

export default HomeBlog;