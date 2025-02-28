
import axios from 'axios';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { GrUserAdmin } from "react-icons/gr";
import Swal from 'sweetalert2';
import { QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query';
import { VscRepoFetch } from 'react-icons/vsc';
const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/users', {
        withCredentials: true
    });
    return res.data;
};
const Users = () => {
    
    // const usersLoded = useLoaderData();
    // const [users, setUsers] = useState(usersLoded);
  
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers
    });
    
     const handleMakeAdnin = (user) =>{
       
        console.log('user info nmakeadmin', user);
        axios.patch(`http://localhost:5000/user/admin/${user?._id}`,{}, {
            withCredentials: true
        })
        .then(res => {
            console.log('axios hadnleadmin inside', res.data);
            if(res.data.modifiedCount > 0){
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
                  
            }
        })
     }

    console.log('users all data ', users);
    return (
        
            <div>
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
                            users?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.user?.email}</td>
                                <td>{user?.user?.lastLoginAt}</td>
                                <td className=''>
                                    {
                                        user.role === 'admin'? <spna className='text-accent'>Admin <GrUserAdmin className='inline-block text-accent text-3xl' /></spna> : <button onClick={()=>handleMakeAdnin(user)} className="btn btn-sm text-white bg-red-500">Make Admin</button>
                                    }
                                    
                                
                                </td>
                                
                            </tr>)
                        }
                        
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
       
        
    );
};

export default Users;