import React from 'react';
import StaggeredFadeIn from '../../../ScrollEffects/StaggeredFadeIn';

const AddBlog = () => {
    const Swal = require('sweetalert2')
    const handleBlogs = event =>{
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const Thum_image = form.Thum_image.value;
        const title = form.title.value;
        const details = form.details.value;
        const BlogData = {image, Thum_image, title, details};
        console.log('blog data', BlogData);
        fetch('http://localhost:5000/dashboard/addblog',{
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(BlogData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log("add service post data", data);
        })
        form.reset();
                Swal.fire({
                    title: 'blog added successfully',

                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                
                

    }
    return (
        <StaggeredFadeIn className='text-white'>
            <h1>Add Projects</h1>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Blog now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleBlogs} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Set Image</span>
                                </label>
                                <input name='image' type="text" placeholder="image url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Set Thummail Image</span>
                                </label>
                                <input name='Thum_image' type="text" placeholder="Thum url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Blog Title</span>
                                </label>
                                <input name='title' type="text" placeholder="service title" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Blog details</span>
                                </label>
                                <textarea name='details' className="textarea textarea-accent h-44" placeholder="Blog details"></textarea>
                               
                            </div>
                              
                            

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-accent">Add Blog</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </StaggeredFadeIn>
    );
};

export default AddBlog;