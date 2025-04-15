import React, { useEffect, useState } from 'react';
import './Project.css';
import { useLoaderData } from 'react-router-dom';
import StaggeredFadeIn from '../../ScrollEffects/StaggeredFadeIn';
import { motion } from 'framer-motion';


const Projects = () => {
    const [selectedValue, setSelectedValue] = useState("allProjects");
    const loadedProjects = useLoaderData();
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (selectedValue === "allProjects") {
            setProjects(loadedProjects);
        } else {
            fetch(`http://localhost:5000/allprojects/${selectedValue}`)
                .then(res => res.json())
                .then(data => {
                    setProjects(data);
                });
        }
    }, [selectedValue, loadedProjects]);

    return (
        <div className="px-2 w-full flex flex-col items-center">
            {/* Modal */}
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

            <h1 className="text-white text-3xl font-bold mb-6 text-center">Projects</h1>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center w-full">
                {["allProjects", "webdesign", "customization", "development"].map((value) => (
                    <motion.button
                    key={value}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    className={`tab tab-bordered px-4 rounded-md transition duration-200 ${
                        selectedValue === value
                            ? 'bg-accent text-white border-none shadow-md'
                            : 'bg-transparent text-white hover:bg-accent/20'
                    }`}
                    onClick={() => setSelectedValue(value)}
                >
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                </motion.button>
                
                ))}
            </div>

            {/* Content Grid */}
            <div className="w-full flex justify-center">
                <div className="w-full max-w-6xl px-2">
                    <StaggeredFadeIn
                        key={selectedValue}
                        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center"
                    >
                        {projects.map((project) => (
                            <div
                                key={project._id}
                                className="card card-compact bg-base-100 w-full max-w-[20rem] shadow-black shadow-xl drop-shadow-2xl"
                            >
                                <figure className="h-40">
                                    <img
                                        className="h-full w-full object-cover"
                                        src={project.Thum_image}
                                        alt={project.title}
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{project.title}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button
                                            onClick={() => {
                                                setSelectedProject(project);
                                                document.getElementById("my_modal_5").showModal();
                                            }}
                                            className="btn btn-accent text-white"
                                        >
                                            View Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </StaggeredFadeIn>
                </div>
            </div>
        </div>
    );
};

export default Projects;
