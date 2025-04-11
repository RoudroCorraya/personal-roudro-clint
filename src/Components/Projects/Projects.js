import React, { useEffect, useState } from 'react';
import ImageModal from "./ProjectImageModal";
import './Project.css';
import { useLoaderData } from 'react-router-dom';
import StaggeredFadeIn from '../../ScrollEffects/StaggeredFadeIn';

const Projects = () => {
    const [selectedValue, setSelectedValue] = useState("allProjects");
    const loadedProjects = useLoaderData();
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    


    useEffect(() => {
        if (selectedValue === "allProjects") {
            setProjects(loadedProjects);
        }
    }, [loadedProjects, selectedValue]);

    const handleProjects = (value) => {
        const projectTypeData = value;

        console.log(projectTypeData);



        
        fetch(`http://localhost:5000/allprojects/${projectTypeData}`)
            .then(res => res.json())
            .then(projectdatas => {
                setProjects(projectdatas);

                console.log('add projetc get data', projectdatas);
                
            })
            

    }
    return (
        <div>
            {/* =====================modal start========================== */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                {selectedProject && (
                    <div className="modal-box">
                        <img src={selectedProject.Thum_image} alt="Thumbnail" />
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn bg-red-700">
                                    <span className="text-white text-3xl">X</span>
                                </button>
                            </form>
                        </div>

                    </div>
                )}
            </dialog>
            {/* =====================modal end========================== */}
            <h1>Projects</h1>
            <div className='flex text-white'>
                <div role="tablist" className="tabs tabs-bordered">
                    <input type="radio" name="my_tabs_1" value="allProjects" role="tab" className="tab modyif" aria-label="All Projects" defaultChecked onChange={(event) => setSelectedValue(event.target.value)} />
                    <div role="tabpanel" className="tab-content p-10">


                        <StaggeredFadeIn key={selectedValue}  className="grid product lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
                            {
                                projects.map((project) => <div key={project._id} className="card card-compact bg-base-100   m-3 shadow-black shadow-xl drop-shadow-2xl">
                                    <figure className='h-40'>
                                        <img className='h-full w-full'
                                            src={project.Thum_image}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{project.title}</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions justify-end">
                                            <button onClick={() => {
                                                setSelectedProject(project);
                                                document.getElementById("my_modal_5").showModal();
                                            }} className="btn btn-accent text-white">View Now</button>
                                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                {selectedProject && (
                                                    <div className="modal-box">
                                                        <img src={selectedProject.Thum_image} alt="Thumbnail" />
                                                        <div className="modal-action">
                                                            <form method="dialog">
                                                                <button className="btn bg-red-700"><span className='text-white text-3xl'>X</span></button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                )}
                                            </dialog>
                                        </div>
                                    </div>
                                </div>)
                            }





                        </StaggeredFadeIn>



                    </div>
                    <input onChange={(event) => {
                        setSelectedValue(event.target.value);
                        handleProjects(event.target.value);
                    }} type="radio" name="my_tabs_1" value="webdesign" role="tab" className="tab modyif" aria-label="Web Design" />

                    <div role="tabpanel" className="tab-content p-10">


                        <StaggeredFadeIn key={selectedValue} className="grid product lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                            {
                                projects.map(project => <div key={project._id} className="card card-compact bg-base-100 lg:w-80 md:w-80 sm:w-80  m-3 shadow-black shadow-xl drop-shadow-2xl">
                                    <figure className='h-40'>
                                        <img className='h-full w-full'
                                            src={project.Thum_image}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{project.title}</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions justify-end">
                                            <button onClick={() => {
                                                setSelectedProject(project);
                                                document.getElementById("my_modal_5").showModal();
                                            }} className="btn btn-accent text-white">View Now</button>

                                        </div>

                                    </div>
                                </div>)
                            }





                        </StaggeredFadeIn>



                    </div>

                    <input
                        onChange={(event) => {
                            setSelectedValue(event.target.value);
                            handleProjects(event.target.value);
                        }} 
                        type="radio"
                        name="my_tabs_1"
                        value="customization"
                        role="tab"
                        className="tab"
                        aria-label="Customization"
                    />
                    <div role="tabpanel" className="tab-content p-10">
                        <StaggeredFadeIn key={selectedValue} className="grid product lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">


                            {
                                projects.map(project => <div key={project._id} className="card card-compact bg-base-100 lg:w-80 md:w-80 sm:w-80  m-3 shadow-black shadow-xl drop-shadow-2xl">
                                    <figure className='h-40'>
                                        <img className='h-full w-full'
                                            src={project.Thum_image}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{project.title}</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions justify-end">
                                            <button onClick={() => {
                                                setSelectedProject(project);
                                                document.getElementById("my_modal_5").showModal();
                                            }} className="btn btn-accent text-white">View Now</button>
                                        </div>

                                    </div>
                                </div>)
                            }


                        </StaggeredFadeIn>
                    </div>

                    <input onChange={(event) => {
                        setSelectedValue(event.target.value);
                        handleProjects(event.target.value);
                    }}  type="radio" name="my_tabs_1" value="development" role="tab" className="tab" aria-label="Development" />
                    <div role="tabpanel" className="tab-content p-10">
                        <StaggeredFadeIn key={selectedValue}  className="grid product lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">

                            {
                                projects.map(project => <div key={project._id} className="card card-compact bg-base-100 lg:w-80 md:w-80 sm:w-80  m-3 shadow-black shadow-xl drop-shadow-2xl">
                                    <figure className='h-40'>
                                        <img className='h-full w-full'
                                            src={project.Thum_image}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{project.title}</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions justify-end">
                                            <button onClick={() => {
                                                setSelectedProject(project);
                                                document.getElementById("my_modal_5").showModal();
                                            }} className="btn btn-accent text-white">View Now</button>
                                        </div>

                                    </div>
                                </div>)
                            }


                        </StaggeredFadeIn>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;