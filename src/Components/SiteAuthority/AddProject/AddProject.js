import React from 'react';
import StaggeredFadeIn from '../../../ScrollEffects/StaggeredFadeIn';

const AddProject = () => {
    const Swal = require('sweetalert2')

    const handleAddProject = event =>{
        event.preventDefault();
        const form = event.target;
        const image = form?.image?.value;
        const title = form?.title?.value;
        const Thum_image = form.Thum_image.value;
        // const customization = form?.customization;
        // const development = form?.development;
        // const webdesign = form?.webdesign;
        const projectType = form?.projectType?.value;

        const addProject = { image,Thum_image, title, projectType}

        console.log('handleAddProject', addProject);
        fetch('http://localhost:5000/dashboard/addproject',{
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(addProject)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('add project data posted', data)
        })
        form.reset();
                Swal.fire({
                    title: 'product added successfully',

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
                        <h1 className="text-5xl font-bold">Add Project now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleAddProject} className="card-body">
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
                                    <span className="label-text text-white">Project Title</span>
                                </label>
                                <input name='title' type="text" placeholder="service title" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Service details</span>
                                </label>
                                <select name="projectType" className="select select-accent w-full max-w-xs">
                                    <option value="" disabled selected>Select Your Project Type</option>
                                    <option value="webdesign" >Web Design</option>
                                    <option value="customization" >Customization</option>
                                    <option value="development">Development</option>
                                </select>

                            </div>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-accent">Add Project</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </StaggeredFadeIn>
    );
};

export default AddProject;