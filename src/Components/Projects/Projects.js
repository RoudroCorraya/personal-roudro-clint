import React, { useState } from 'react';
import './Project.css';
import { useLoaderData } from 'react-router-dom';

const Projects = () => {
    const [selectedValue, setSelectedValue] = useState("webDesign");
    const loadedProjects = useLoaderData();
    const [projects, setProjects] = useState([]);

    const handleProjects = (value) =>{
        const projectTypeData = value;
       
        console.log(projectTypeData);
        
       

        
        fetch(`http://localhost:5000/allprojects/${projectTypeData}`)
        .then(res => res.json())
        .then(projectdatas =>{
            setProjects(projectdatas);
            console.log('add projetc get data', projectdatas);
        })

    }
    return (
        <div>
            <h1>Projects</h1>
            <div className='flex text-white'>
                <div role="tablist" className="tabs tabs-bordered">
                <input type="radio" name="my_tabs_1" value="webdesign" role="tab" className="tab modyif" aria-label="All Projects" defaultChecked/>
                <div role="tabpanel" className="tab-content p-10">


                        <div className="grid product lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
                            {
                                loadedProjects.map((loadProject)=><div key={loadProject._id} className="card card-compact bg-base-100   m-3 shadow-black shadow-xl drop-shadow-2xl">
                                <figure className='h-40'>
                                    <img className='h-full w-full'
                                        src={loadProject.Thum_image}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{loadProject.title}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-accent text-white">View Now</button>
                                    </div>
                                </div>
                            </div>)
                            }
                            
                            
                           
                            
                            
                        </div>



                    </div>
                    <input onClick={(event)=>handleProjects(event.target.value)} type="radio" name="my_tabs_1" value="webdesign" role="tab" className="tab modyif" aria-label="Web Design"/>
                    
                    <div role="tabpanel" className="tab-content p-10">


                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                            {
                                projects.map(project =><div key={project._id} className="card card-compact bg-base-100 lg:w-80 md:w-80 sm:w-80  m-3 shadow-black shadow-xl drop-shadow-2xl">
                                    <figure className='h-40'>
                                        <img className='h-full w-full'
                                            src={project.Thum_image}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{project.title}</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-accent text-white">View Now</button>
                                        </div>
                                    </div>
                                </div>)
                            }
                            
                            
                           
                            
                            
                        </div>



                    </div>

                    <input
                    onClick={(event)=>handleProjects(event.target.value)}
                        type="radio"
                        name="my_tabs_1"
                        value="customization"
                        role="tab"
                        className="tab"
                        aria-label="Customization"
                         />
                    <div role="tabpanel" className="tab-content p-10">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                           
                            
                    {
                                projects.map(project =><div key={project._id} className="card card-compact bg-base-100 lg:w-80 md:w-80 sm:w-80  m-3 shadow-black shadow-xl drop-shadow-2xl">
                                    <figure className='h-40'>
                                        <img className='h-full w-full'
                                            src={project.Thum_image}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{project.title}</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-accent text-white">View Now</button>
                                        </div>
                                    </div>
                                </div>)
                            }
                           
                            
                        </div>
                    </div>

                    <input onClick={(event)=>handleProjects(event.target.value)} type="radio" name="my_tabs_1" value="development" role="tab" className="tab" aria-label="Development" />
                    <div role="tabpanel" className="tab-content p-10">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                           
                    {
                                projects.map(project =><div key={project._id} className="card card-compact bg-base-100 lg:w-80 md:w-80 sm:w-80  m-3 shadow-black shadow-xl drop-shadow-2xl">
                                    <figure className='h-40'>
                                        <img className='h-full w-full'
                                            src={project.Thum_image}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{project.title}</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-accent text-white">View Now</button>
                                        </div>
                                    </div>
                                </div>)
                            }
                           
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;