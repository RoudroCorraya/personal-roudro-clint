import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const LetsTalk = () => {
    // const [userQuery, setuserQuery] = useState();
     const navigate = useNavigate();
        const Swal = require('sweetalert2')
    
    const handleLetsTalk = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const phone = form.phone.value;
        const query = form.query.value;
        const userQuery = {name, country, phone, query}

        console.log('cheaking from', userQuery);
        fetch('http://localhost:5000/letstalk', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userQuery)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('letstalk server Post data', data);
        })
        form.reset();
                Swal.fire({
                    title: 'Our team will contact you within 2 hours',

                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate('/')
        
        
    }
    // useEffect(()=>{
        
        
    // },[]);
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
                        <form onSubmit={handleLetsTalk} className="card-body">

                            <div className='contact w-80 mx-auto'>
                                <label className="input input-bordered flex items-center gap-2 my-6">

                                    <input name='name' type="text" className="grow" placeholder="Name" />
                                </label>
                                <label className="input input-bordered flex items-center gap-2 my-6">

                                    <input name='country' type="text" className="grow" placeholder="Country" />
                                </label>
                                <label className="input input-bordered flex items-center gap-2 my-6">

                                    <input name='phone' type="text" className="grow" placeholder="Phone" />
                                </label>


                                <textarea name='query' className="textarea textarea-bordered w-80 h-44" placeholder="Write your query"></textarea>
                                <button type='submit' className="btn btn-accent">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LetsTalk;