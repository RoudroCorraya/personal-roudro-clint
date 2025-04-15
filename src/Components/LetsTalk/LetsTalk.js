import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import styles
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles
import StaggeredFadeIn from '../../ScrollEffects/StaggeredFadeIn';
import FadeInOnScroll from '../../ScrollEffects/FadeInOnScroll';

const LetsTalk = () => {
    // const [userQuery, setuserQuery] = useState();
    const [date, setDate] = useState('');

    const navigate = useNavigate();
    const Swal = require('sweetalert2');

    const handleLetsTalk = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const phone = form.phone.value;
        const query = form.query.value;
        const userQuery = { name, country, phone, query, preferredDate: date }

        console.log('cheaking from', userQuery);
        fetch('http://localhost:5000/letstalk', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userQuery)
        })
            .then(res => res.json())
            .then(data => {
                console.log('letstalk server Post data', data);
            })
        form.reset();
        setDate('');
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
        <div className='text-white'>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <FadeInOnScroll direction='right' className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please tell you sweetable time and date upcoming 2 weeks in the query box</h1>
                        <p className="py-6">
                            Our team will contact you for the appoint confirmation within 2 hours through mail or phone call according to the query box.

                        </p>


                    </FadeInOnScroll>
                    <FadeInOnScroll direction='left' className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
                                <label className="block my-6">
                                    <span className="text-sm font-medium text-white mb-1">Preferred Date & Time</span>
                                    <input
                                        type="datetime-local"
                                        value={date}
                                        onChange={event => setDate(event.target.value)}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </label>



                                <textarea name='query' className="textarea textarea-bordered w-80 h-44" placeholder="Write your query"></textarea>
                                <button type='submit' className="btn btn-accent">Submit</button>
                            </div>

                        </form>
                    </FadeInOnScroll>
                </div>
            </div>
        </div>
    );
};

export default LetsTalk;