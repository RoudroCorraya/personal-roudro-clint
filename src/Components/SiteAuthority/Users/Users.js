
import axios from 'axios';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { GrUserAdmin } from "react-icons/gr";
import Swal from 'sweetalert2';
import { QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query';
import { VscRepoFetch } from 'react-icons/vsc';
import useAxiosSecure from '../../../hooks/useAxiosSecure'; 
import StaggeredFadeIn from '../../../ScrollEffects/StaggeredFadeIn';

// import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
// const fetchUsers = async () => {
//     const res = await axios.get('http://localhost:5000/users', {
//         withCredentials: true
//     });
    
//     return res.data;
    
   
// };








  

  const Users = () => {
    // const axiosSecure = UseAxiosSecure()
    const axiosSecure = useAxiosSecure();

    const fetchUsers = async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    };
    
    // Fetch users using React Query
    const { data: users = [], refetch, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });
   

    const handleMakeAdnin = (user) => {
        console.log('user info make admin', user);
        axiosSecure.patch(`user/admin/${user?._id}`, {}, {
            withCredentials: true,
            
        })
            .then(res => {
                console.log('axios handle admin inside', res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is admin now`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    refetch();
                }
            });
    }

    return (
        <StaggeredFadeIn>
            <h1>Users: {users.length}</h1>
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
                            Array.isArray(users) && users.length > 0
                                ? users.map((user, index) => (
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user?.name}</td>
                                        <td>{user?.user?.email}</td>
                                        <td>{user?.user?.lastLoginAt}</td>
                                        <td>
                                            {
                                                user.role === 'admin'
                                                    ? <span className='text-accent'>Admin <GrUserAdmin className='inline-block text-accent text-3xl' /></span>
                                                    : <button onClick={() => handleMakeAdnin(user)} className="btn btn-sm text-white bg-red-500">Make Admin</button>
                                            }
                                        </td>
                                    </tr>
                                ))
                                : <tr><td colSpan="5">No users found</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        </StaggeredFadeIn>
    );
};

export default Users;
