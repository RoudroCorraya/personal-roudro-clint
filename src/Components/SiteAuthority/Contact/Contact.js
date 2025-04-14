import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import StaggeredFadeIn from '../../../ScrollEffects/StaggeredFadeIn';

const Contact = () => {
    const contactLoaded = useLoaderData();
        const [contact, setContact ] = useState(contactLoaded);
    return (
        <StaggeredFadeIn>
            <h1></h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Query</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contact?.map((contact, index) => <tr key={contact._id}>
                                <th>{index + 1}</th>
                                <td>{contact?.name}</td>
                                <td>{contact?.email}</td>
                                <td>{contact?.phone}</td>
                                <td>{contact?.query}</td>
                                <td className=''>
                                    <button className="btn btn-sm text-white bg-red-500">Gmail</button>
                                    <button className="btn btn-sm bg-accent text-white">Call</button>
                                
                                </td>
                                
                            </tr>)
                        }
                        
                       
                        
                    </tbody>
                </table>
            </div>
        </StaggeredFadeIn>
    );
};

export default Contact;