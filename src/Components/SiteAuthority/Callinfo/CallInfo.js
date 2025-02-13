import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CallInfo = () => {
    const letsTalkLoaded = useLoaderData();
    const [letsTalks, setLetsStalk] = useState(letsTalkLoaded);
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
                            letsTalks.map((letsTalk, index) =>  <tr key={letsTalk._id}>
                                <th>{index + 1}</th>
                                <td>{letsTalk.name}</td>
                                <td>{letsTalk.country}</td>
                                <td>{letsTalk.phone}</td>
                                <td>{letsTalk.query}</td>
                                <td>
                                <button className="btn btn-xs text-white bg-red-500">Pending call</button>
                                <button className="btn btn-xs bg-accent text-white">Already Done</button>
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