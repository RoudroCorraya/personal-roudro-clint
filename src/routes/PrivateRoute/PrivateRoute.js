import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
const {user, loading} = useContext(AuthContext);
const loaction = useLocation();
if(loading){
    return <span className="loading loading-spinner text-accent"></span>
}
if(user){
    return children;
}
return user
? children
: <Navigate to="/login" state={{ from: loaction.pathname }} replace />;
};

export default PrivateRoute;