import React, { useState } from 'react';
import { useRouteLoaderData } from 'react-router-dom';


const AddService = () => {
    
   
            const Swal = require('sweetalert2');
    const handleAddService = event =>{
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const title = form.title.value;
        const details = form.details.value;
        const serviceData = {image, title, details}
        console.log('service data', serviceData);
        fetch('http://localhost:5000/dashboard/addservice',{
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log("add service post data", data);
        })
        form.reset();
                Swal.fire({
                    title: 'service added successfully',

                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                

    }
    return (
        <div className='text-white'>
            <h1>Add you service</h1>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add service now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleAddService} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Set front Image</span>
                                </label>
                                <input name='image' type="text" placeholder="image url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Service Title</span>
                                </label>
                                <input name='title' type="text" placeholder="service title" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Service details</span>
                                </label>
                                <textarea name='details' className="textarea textarea-accent h-44" placeholder="Service details"></textarea>
                               
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-accent">add service</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;