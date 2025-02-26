import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import axios from 'axios';
import { QueryClientProvider, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';


const CallInfo = () => {
    const letsTalkLoaded = useLoaderData();
    // const [letsTalks, setLetsStalk] = useState(letsTalkLoaded);
    // const [callStatus, setCallStatus] = useState({});
    const queryClient = useQueryClient();

    const { data: letsTalks = [], refetch } = useQuery({
        queryKey: ['letsTalks'],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/dashboard/letstalk");
            return res.data;
        }
    });
    const mutation = useMutation({
        mutationFn: (id) => axios.put(`http://localhost:5000/call/${id}`, { callInfo: "done" }),
        onSuccess: () => {
            queryClient.invalidateQueries(["letsTalks"]); // Ensures the UI updates after mutation
        },
    });
    
    const handleCall = (id, phone) => {
        if (phone) {
            // Open call window
            window.location.href = `tel:${phone}`;
    
            // Wait for 3 seconds, then ask the user for confirmation
            setTimeout(() => {
                const userConfirmed = window.confirm("Did you complete the call?");
                if (userConfirmed) {
                    mutation.mutate(id);
                }
            }, 3000);
        }
    };
    

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
    //                 console.log('callinfo patch deki', data);

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
                                    {letsTalk.callInfo === "done" ? (
                                        <FaCheckCircle className="text-accent text-3xl" />
                                    ) : (
                                        <button
                                            onClick={() => handleCall(letsTalk._id, letsTalk.phone)}
                                            className="btn btn-sm text-white bg-red-500"
                                        >
                                            Call
                                        </button>
                                    )}


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