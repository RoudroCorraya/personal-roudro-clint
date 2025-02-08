import React from 'react';

const LetsTalk = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please provide the informations</h1>
                        <p className="py-6">
                           Our team will contact you within 2 hours
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">

                            <div className='contact w-80 mx-auto'>
                                <label className="input input-bordered flex items-center gap-2 my-6">

                                    <input type="text" className="grow" placeholder="Name" />
                                </label>
                                <label className="input input-bordered flex items-center gap-2 my-6">

                                    <input type="text" className="grow" placeholder="Country" />
                                </label>
                                <label className="input input-bordered flex items-center gap-2 my-6">

                                    <input type="text" className="grow" placeholder="Phone" />
                                </label>


                                <textarea className="textarea textarea-bordered w-80 h-44" placeholder="Write your query"></textarea>
                                <button className="btn btn-accent">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LetsTalk;