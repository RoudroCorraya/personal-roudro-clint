
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const Users = () => {
    const usersLoded = useLoaderData();
    const [users, setUsers] = useState(usersLoded);

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
                                    <button className="btn btn-sm text-white bg-red-500">Pending</button>
                                    <button className="btn btn-sm bg-accent text-white">Resolved</button>
                                
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