import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import axios from 'axios';


const CallInfo = () => {
    const letsTalkLoaded = useLoaderData();
    const [letsTalks, setLetsStalk] = useState(letsTalkLoaded);
    // const [callStatus, setCallStatus] = useState({});

    // const handleCall = (id, phone) => {
    //     if (phone) {
    //         window.location.href = `tel:${phone}`;

           
    //         setLetsStalk((prevTalks) =>
    //             prevTalks.map((talk) =>
    //                 talk._id === id ? { ...talk, CallInfo: "done" } : talk
    //             )
    //         );
    //         console.log('call done pop up not showing', id);
    //         fetch(`http://localhost:5000/call/${id}`, {
    //             method: "PUT",
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ CallInfo: "done" }),

    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log('callinfo patch', data)
    //             })
    //     }
    // };
  


    return (
        <div>
            <h3>call information : {letsTalks.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Phone</th>
                            <th>Query</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            letsTalks.map((letsTalk, index) => <tr key={letsTalk._id}>
                                <th>{index + 1}</th>
                                <td>{letsTalk.name}</td>
                                <td>{letsTalk.country}</td>
                                <td>{letsTalk.phone}</td>
                                <td>{letsTalk.query}</td>
                                <td>
                                    {/* { letsTalk.CallInfo === "done" ? (
                                        <FaCheckCircle className="text-accent text-3xl" />
                                    ) : (
                                        <button
                                            onClick={() => handleCall(letsTalk._id, letsTalk.phone)}
                                            className="btn btn-sm text-white bg-red-500"
                                        >
                                            Call
                                        </button>
                                    
                                    )} */}
                                    call

                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CallInfo;