import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const HomeBlogDetails = () => {
 const LoadedBlogData = useLoaderData();
 const loadeddata = LoadedBlogData[0];
 console.log('loaded data blog', loadeddata);
    
    

    return (
        <div className='text-white'>
            <h3>Blog Details about : {loadeddata.title}</h3>
            <div className="card lg:card-side bg-base-100 shadow-black shadow-xl drop-shadow-2xl my-6">
                <figure className='w-full rounded-2xl'>
                    <img
                        src={loadeddata.Thum_image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{loadeddata.title}</h2>
                    <p>{loadeddata.details}</p>
                    
                    
                    <div className="card-actions justify-end">
                        <Link to='/'><button className="btn btn-accent">Go back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBlogDetails;